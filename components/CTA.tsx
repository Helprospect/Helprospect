export default function CTA() {
  return (
    <section className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Yellow glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #F5C518 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="section-label justify-center mb-8">Sans engagement</div>

        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] mb-8"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Prêt à remplir
          <br />
          <span className="text-gradient">votre pipeline ?</span>
        </h2>

        <p className="text-[#555] text-base mb-12 max-w-lg mx-auto leading-relaxed">
          Un appel de 30 minutes suffit à cadrer votre ICP, vos objectifs et le démarrage de votre campagne. Premiers leads sous 72h.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-14">
          <a
            href="https://calendly.com/helprospect/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Prendre rendez-vous maintenant
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="mailto:contact@helprospect.fr"
            className="btn-secondary text-sm"
          >
            contact@helprospect.fr
          </a>
        </div>

        {/* Trust signals */}
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { icon: '🔒', label: 'RGPD compliant' },
            { icon: '⚡', label: 'Démarrage en 72h' },
            { icon: '🤝', label: 'Sans engagement' },
          ].map((t, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-xl">{t.icon}</span>
              <span className="text-xs text-[#444] text-center" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
