import assert from 'node:assert/strict'
import { createServer } from 'vite'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

// Render real page components without submitting forms or contacting external services.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
try {
  const { translateText } = await server.ssrLoadModule('/src/components/translate.ts')
  const { translations } = await server.ssrLoadModule('/src/components/translations.ts')
  assert.equal(translateText('RETOS EDUCATIVOS', 'en'), 'EDUCATIONAL CHALLENGES')
  assert.equal(translateText('  retos educativos  ', 'en'), 'EDUCATIONAL CHALLENGES')
  assert.equal(translateText('¿QUÉ HACEMOS POR LA SALUD?', 'es'), '¿QUÉ HACEMOS POR LA SALUD?')
  assert.equal(translateText('contacto@sembrandoperu.org', 'en'), 'contacto@sembrandoperu.org')

  const { default: App } = await server.ssrLoadModule('/src/App.tsx')
  const { LanguageProvider } = await server.ssrLoadModule('/src/components/LanguageContext.tsx')
  const { campaigns } = await server.ssrLoadModule('/src/pages/campaigns.ts')
  const { strategies } = await server.ssrLoadModule('/src/pages/conservationStrategies.ts')
  const { consultancies } = await server.ssrLoadModule('/src/pages/consultancies.ts')
  const { getPublications } = await server.ssrLoadModule('/src/pages/publications.ts')
  const routes = ['/', '/nosotros', '/como-trabajamos', '/reforestacion', '/educacion', '/salud', '/trabaja-con-nosotros', '/nuestro-equipo', '/mecanismo-de-quejas', '/contacto', '/donacion', '/sumate', '/noticias', '/publicaciones', '/campanas', '/estrategias-conservacion', '/convocatoria-consultorias',
    ...campaigns.map(item => `/campanas/${item.slug}`),
    ...strategies.map(item => `/estrategias-conservacion/${item.slug}`),
    ...consultancies.map(item => `/convocatoria-consultorias/${item.slug}`),
    ...getPublications('es').map(item => `/publicaciones/articulo/${item.slug}`),
    ...['sembrando-futuro-juntos-por-nuestros-bosques', 'transformando-vidas-comunidades', 'jornada-reforestacion-madre-de-dios', 'guardianas-del-bosque', 'prevencion-anemia-nuevos-enfoques'].map(slug => `/blog/articulo/${slug}`),
  ]
  const spanishSentences = Object.entries(translations).filter(([es, en]) => es !== en && es.length > 35)
  const removeMarkup = html => html.replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim()
  for (const pathname of routes) {
    const render = language => {
      globalThis.window = { location: { pathname, hash: '', origin: 'https://example.test' }, localStorage: { getItem: () => language } }
      return renderToStaticMarkup(React.createElement(LanguageProvider, null, React.createElement(App)))
    }
    const english = render('en'), spanish = render('es')
    assert.notEqual(english, spanish, `Language did not change on ${pathname}`)
    assert.ok(english.includes('EN | English'), `English not selected on ${pathname}`)
    const visibleEnglish = removeMarkup(english)
    for (const [sentence] of spanishSentences) assert.ok(!visibleEnglish.includes(sentence), `Untranslated content on ${pathname}: ${sentence}`)
  }
  console.log(`PASS: ${routes.length} pages rendered in English and Spanish; no untranslated Spanish sentences found.`)
} finally {
  delete globalThis.window
  await server.close()
}
