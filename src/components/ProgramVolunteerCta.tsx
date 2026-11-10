import { ArrowRight, Users } from 'lucide-react'
import { useLanguage } from './LanguageContext'
import './ProgramVolunteerCta.css'

export default function ProgramVolunteerCta({ description, variant = 'default' }: { description: string; variant?: 'default' | 'work' }) {
  const { t } = useLanguage()
  const isWorkVariant = variant === 'work'

  return (
    <aside
      className={`program-volunteer-cta${isWorkVariant ? ' program-volunteer-cta--work' : ''}`}
      aria-labelledby="program-volunteer-title"
    >
      <div className="program-volunteer-cta__inner">
        <div className="program-volunteer-cta__identity">
          <Users size={48} strokeWidth={1.7} aria-hidden="true" />
          <div className="program-volunteer-cta__title-group">
            {isWorkVariant && <span className="program-volunteer-cta__eyebrow">{t('VOLUNTARIADO')}</span>}
            <h2 id="program-volunteer-title">{t(isWorkVariant ? 'Sé parte del cambio' : '¡Súmate al voluntariado!')}</h2>
          </div>
        </div>
        <span className="program-volunteer-cta__divider" aria-hidden="true" />
        <p>{t(description)}</p>
        <a href="/voluntariado">{t(isWorkVariant ? 'Súmate al voluntariado' : 'Quiero ser voluntario')} <ArrowRight size={18} aria-hidden="true" /></a>
      </div>
    </aside>
  )
}
