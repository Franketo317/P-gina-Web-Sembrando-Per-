import { ChevronDown, Globe } from 'lucide-react'

export default function LanguageIcon({ size = 18 }: { size?: number }) {
  return <Globe className="language-globe" size={size} strokeWidth={1.75} aria-hidden="true" />
}

export function LanguageChevron({ size = 14 }: { size?: number }) {
  return <ChevronDown className="language-chevron" size={size} strokeWidth={2} aria-hidden="true" />
}