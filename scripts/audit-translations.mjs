import fs from 'node:fs'
import path from 'node:path'
import ts from 'typescript'

const files = fs.readdirSync('src', { recursive: true }).filter(file => /\.(tsx?|jsx?)$/.test(file))
const parse = file => ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true, file.endsWith('x') ? ts.ScriptKind.TSX : ts.ScriptKind.TS)
const dictionary = new Set()
function walk(node, visit) { visit(node); ts.forEachChild(node, child => walk(child, visit)) }
walk(parse('src/components/translations.ts'), node => {
  if (ts.isPropertyAssignment(node) && ts.isStringLiteral(node.name)) dictionary.add(node.name.text)
})
if (fs.existsSync('src/components/englishTranslations.ts')) walk(parse('src/components/englishTranslations.ts'), node => {
  if (ts.isPropertyAssignment(node) && ts.isStringLiteral(node.name)) dictionary.add(node.name.text)
})
const missing = new Set(), raw = [], candidates = new Set()
for (const file of files) {
  if (/LanguageContext|englishTranslations|translations\.ts|translate\.ts|publications\.ts/.test(file)) continue
  const source = parse(path.join('src', file))
  walk(source, node => {
    if (ts.isCallExpression(node) && node.expression.getText(source) === 't' && node.arguments[0]) walk(node.arguments[0], argument => {
      if ((ts.isStringLiteral(argument) || ts.isNoSubstitutionTemplateLiteral(argument)) && !dictionary.has(argument.text)) missing.add(argument.text)
    })
    if (ts.isJsxText(node) && node.text.trim().match(/[a-záéíóúñ]{3}/i)) raw.push({file, text: node.text.trim().replace(/\s+/g, ' ')})
    if (ts.isStringLiteral(node) && !dictionary.has(node.text) && node.text.match(/[áéíóúñ¿¡]|\s/) && !node.text.includes('/') && node.text.length > 3) {
      const p = node.parent
      const inKeywords = ts.isArrayLiteralExpression(p) && ts.isPropertyAssignment(p.parent) && p.parent.name.getText(source) === 'keywords'
      if ((ts.isPropertyAssignment(p) && /^(title|description|heading|text|answer|question|label|alt|category|name|role|profile|area|headline|intro|invitation|contextTitle|context|challengeTitle|challenge|actionsTitle|closing|programLabel|imageAlt|introduction|date|titleStart|titleEnd)$/.test(p.name.getText(source))) || (ts.isArrayLiteralExpression(p) && !inKeywords)) candidates.add(node.text)
    }
  })
}
const report = { missing: [...missing], candidates: [...candidates].filter(text => !missing.has(text)), raw }
if (process.argv.includes('--json')) console.log(JSON.stringify(report, null, 2))
else {
  const identifiers = new Set(['Av. Arequipa 2447 – Office 409, Lince District, Lima, Peru', 'ES | Español', 'EN | English', 'SEMBRANDO PERÚ', 'SEMBRANDO', 'PERÚ'])
  const untranslatedMarkup = raw.filter(({ text }) => !identifiers.has(text) && !text.includes('@') && !text.startsWith('https://'))
  if (missing.size || report.candidates.length || untranslatedMarkup.length) {
    console.error(JSON.stringify({ missing: report.missing, data: report.candidates, markup: untranslatedMarkup }, null, 2))
    process.exitCode = 1
  } else console.log('PASS: all static translation keys, page data and visible text are covered.')
}
