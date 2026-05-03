export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-4 pt-20 pb-16 text-center max-w-2xl mx-auto">
        <span className="text-4xl mb-4">💊</span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Visual Pill Tracking with{' '}
          <span className="text-[#58a6ff]">Photo Verification</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl">
          Snap a photo before you take your pills. AI instantly verifies the correct medication and dosage, then tracks your adherence — with caregiver alerts built in.
        </p>
        <a
          href={checkoutUrl}
          className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg transition-colors"
        >
          Start for $9/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">Cancel anytime. No credit card surprises.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-left">
          {[
            { icon: '📸', title: 'Photo Verification', desc: 'AI checks pill color, shape, and imprint against your medication profile.' },
            { icon: '📊', title: 'Adherence Tracking', desc: 'Daily, weekly, and monthly reports show your medication patterns at a glance.' },
            { icon: '🔔', title: 'Caregiver Alerts', desc: 'Family or nurses get notified instantly if a dose is missed or looks wrong.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm w-full text-center shadow-lg">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited photo verifications',
              'AI medication & dosage check',
              'Adherence history & reports',
              'Up to 3 caregiver contacts',
              'Mobile-first, works on any device',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does the AI verify my pills?',
              a: 'You snap a photo before taking your medication. Our AI vision model analyzes pill color, shape, and imprint, then cross-references your saved medication profile to confirm it matches.',
            },
            {
              q: 'Who can receive caregiver notifications?',
              a: 'You can add up to 3 contacts — family members, nurses, or doctors. They receive an alert via email or SMS if a dose is missed or if the AI flags an unexpected pill.',
            },
            {
              q: 'Is my health data private and secure?',
              a: 'Yes. Photos are encrypted in transit and at rest, processed only for verification, and never sold or shared. You can delete your data at any time.',
            },
          ].map((item) => (
            <div key={item.q} className="border-b border-[#30363d] pb-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-8 text-xs text-[#484f58] border-t border-[#21262d]">
        © {new Date().getFullYear()} MedSnap. All rights reserved.
      </footer>
    </main>
  )
}
