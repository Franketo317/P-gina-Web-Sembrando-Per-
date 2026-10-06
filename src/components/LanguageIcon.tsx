import { ChevronDown, Globe } from 'lucide-react'

export default function LanguageIcon() {
  return <Globe className="language-globe" size={36} strokeWidth={1.5} aria-hidden="true" />
}

export function LanguageChevron() {
  return <ChevronDown className="language-chevron" size={16} strokeWidth={1.75} aria-hidden="true" />
}