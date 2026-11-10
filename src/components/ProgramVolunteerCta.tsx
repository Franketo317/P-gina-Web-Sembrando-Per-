import { ArrowRight, Users } from 'lucide-react'
import { useLanguage } from './LanguageContext'

export default function ProgramVolunteerCta({ description }: { description: string }) {
  const { t } = useLanguage()

  return (
    <aside className="program-volunteer-cta" aria-labelledby="program-volunteer-title">
      <div className="program-volunteer-cta__inner">
        <div className="program-volunteer-cta__identity">
          <Users size={48} strokeWidth={1.7} aria-hidden="true" />
          <h2 id="program-volunteer-title">{t('¡Súmate al voluntariado!')}</h2>
        </div>
        <span className="program-volunteer-cta__divider" aria-hidden="true" />
        <p>{t(description)}</p>
        <a href="/voluntariado">{t('Quiero ser voluntario')} <ArrowRight size={18} aria-hidden="true" /></a>
      </div>
    </aside>
  )
}
