import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, Phone, TrendingDown, Clock, Shield, ChevronRight } from 'lucide-react';

const NAV = '#080f1a';
const BG = '#080f1a';
const CARD = '#0f1e38';
const BORDER = '#1a3358';
const ORANGE = '#ea580c';

export default function LandingPage() {
    const [savings, setSavings] = useState(0);

    // Animate the savings counter on mount
    useEffect(() => {
        const target = 2880;
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setSavings(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
        };
        const delay = setTimeout(() => requestAnimationFrame(tick), 600);
        return () => clearTimeout(delay);
    }, []);

    return (
        <div className="min-h-screen text-slate-50 font-sans" style={{ backgroundColor: BG }}>

            {/* Nav */}
            <nav className="fixed w-full z-50 top-0 border-b backdrop-blur-md" style={{ backgroundColor: `${NAV}e0`, borderColor: BORDER }}>
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <img src="/logo.png" alt="Rush Robotics" className="h-7 w-auto object-contain" />
                    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
                        <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
                        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </div>
                    <a href="#contact" className="text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors" style={{ backgroundColor: ORANGE }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c2410c')}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
                        Get a Free Assessment
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative pt-36 pb-24 lg:pt-52 lg:pb-36 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[140px]" style={{ backgroundColor: 'rgba(26,51,88,0.35)' }} />
                    <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] rounded-full blur-[120px]" style={{ backgroundColor: 'rgba(234,88,12,0.08)' }} />
                </div>

                <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-8 border" style={{ backgroundColor: 'rgba(234,88,12,0.08)', borderColor: 'rgba(234,88,12,0.2)', color: '#fb923c' }}>
                            <MapPin className="w-3.5 h-3.5" />
                            D.C., Maryland & Virginia
                        </div>
                        <h1 className="text-5xl lg:text-[3.75rem] font-extrabold leading-[1.08] tracking-tight mb-6">
                            Stop paying for work<br />
                            <span style={{ color: ORANGE }}>a robot can do.</span>
                        </h1>
                        <p className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: '#94a3b8' }}>
                            We map your kitchen using your existing cameras, find the right robot, and handle the entire installation. Then we monitor everything so you never have to think about it.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a href="#contact"
                                className="inline-flex items-center justify-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl transition-all"
                                style={{ backgroundColor: ORANGE, boxShadow: '0 0 28px rgba(234,88,12,0.3)' }}
                                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c2410c')}
                                onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
                                Book a Free Site Visit <ArrowRight className="w-4 h-4" />
                            </a>
                            <a href="#how-it-works"
                                className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-xl border transition-colors text-slate-300 hover:text-white"
                                style={{ borderColor: BORDER, backgroundColor: 'rgba(26,51,88,0.3)' }}>
                                See how it works
                            </a>
                        </div>
                    </div>

                    {/* Monthly Savings Card */}
                    <div className="rounded-2xl p-6 shadow-2xl" style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}>
                        {/* Card header */}
                        <div className="flex items-center justify-between mb-6 pb-5" style={{ borderBottom: `1px solid ${BORDER}` }}>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#64748b' }}>Monthly Site Report</p>
                                <p className="font-semibold text-slate-200">Arlington, VA — Location #04</p>
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(34,197,94,0.12)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.2)' }}>
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                All Systems Active
                            </span>
                        </div>

                        {/* Big savings number */}
                        <div className="mb-6 p-5 rounded-xl" style={{ backgroundColor: 'rgba(234,88,12,0.08)', border: '1px solid rgba(234,88,12,0.15)' }}>
                            <p className="text-sm font-medium mb-1" style={{ color: '#fb923c' }}>Estimated Labor Savings This Month</p>
                            <p className="text-5xl font-extrabold tracking-tight text-white">
                                ${savings.toLocaleString()}
                            </p>
                        </div>

                        {/* Stats grid */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            {[
                                { label: 'Hours Automated', value: '240 hrs' },
                                { label: 'Robot Uptime', value: '99.8%' },
                                { label: 'Open Alerts', value: '0' },
                            ].map(({ label, value }) => (
                                <div key={label} className="p-3 rounded-lg text-center" style={{ backgroundColor: 'rgba(26,51,88,0.5)' }}>
                                    <p className="text-lg font-bold text-white">{value}</p>
                                    <p className="text-xs mt-0.5" style={{ color: '#64748b' }}>{label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Robot status */}
                        <div className="space-y-2">
                            {[
                                { name: 'Miso Flippy 2 — Fryer Station', status: 'Running' },
                                { name: 'CCTV Monitoring — 4 cameras', status: 'Active' },
                                { name: 'Remote Support', status: 'On call' },
                            ].map(({ name, status }) => (
                                <div key={name} className="flex items-center justify-between py-2.5 px-3 rounded-lg" style={{ backgroundColor: 'rgba(26,51,88,0.3)' }}>
                                    <span className="text-sm text-slate-300">{name}</span>
                                    <span className="text-xs font-semibold" style={{ color: '#4ade80' }}>{status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats bar */}
            <div style={{ backgroundColor: CARD, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
                <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { value: '$1,000', label: 'One-time setup fee' },
                        { value: '$100 / mo', label: 'Per location, all-in' },
                        { value: '24 / 7', label: 'Monitoring & support' },
                        { value: 'DMV only', label: 'Focused, local service' },
                    ].map(({ value, label }) => (
                        <div key={label}>
                            <p className="text-2xl font-extrabold mb-1" style={{ color: ORANGE }}>{value}</p>
                            <p className="text-sm text-slate-500">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Problem + Value */}
            <section className="py-28">
                <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl font-extrabold leading-tight mb-6 tracking-tight">
                            Labor is your biggest cost.<br />
                            <span className="text-slate-400 font-normal">It doesn't have to be.</span>
                        </h2>
                        <p className="text-slate-400 leading-relaxed mb-8">
                            Between rising wages, constant turnover, and no-shows, staffing a restaurant is harder than ever. Automation technology that could fix this already exists — the problem is nobody makes it easy to actually get it running in your kitchen.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            That's what we do. Rush Robotics is a local integration service — we handle everything from camera setup to robot installation to ongoing support, so you can focus on your customers, not your tech stack.
                        </p>
                    </div>
                    <div className="grid gap-4">
                        {[
                            { icon: <TrendingDown className="w-5 h-5" style={{ color: ORANGE }} />, title: 'Cut labor overhead', body: 'Automate repetitive back-of-house tasks. Run leaner during off-peak hours without cutting service quality.' },
                            { icon: <Clock className="w-5 h-5" style={{ color: ORANGE }} />, title: 'No learning curve for your team', body: 'We handle setup, training, and troubleshooting. Your staff doesn\'t need to become robot technicians.' },
                            { icon: <Shield className="w-5 h-5" style={{ color: ORANGE }} />, title: 'Always-on monitoring', body: 'We watch your CCTV feeds and robot health 24/7. If something\'s off, we catch it before it becomes your problem.' },
                        ].map(({ icon, title, body }) => (
                            <div key={title} className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}>
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(234,88,12,0.1)' }}>
                                    {icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-200 mb-1">{title}</p>
                                    <p className="text-sm text-slate-400 leading-relaxed">{body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, backgroundColor: 'rgba(15,30,56,0.35)' }} className="py-28">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-xl mb-16">
                        <h2 className="text-4xl font-extrabold tracking-tight mb-4">What working with us looks like</h2>
                        <p className="text-slate-400">From first call to live robot, we handle every step. Most locations are up and running within two weeks.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                n: '01',
                                title: 'We come to your location',
                                body: 'We visit your restaurant, review your existing cameras, and map your kitchen workflow. Free, no commitment.',
                            },
                            {
                                n: '02',
                                title: 'We find the right robot',
                                body: 'Using a digital model of your kitchen, we test options from Miso Robotics, Serve Robotics, and Pickle Robotics before anything ships.',
                            },
                            {
                                n: '03',
                                title: 'We install, you get back to work',
                                body: 'Our team handles installation and staff walkthroughs. After that, we\'re your 24/7 support line for everything — cameras included.',
                            },
                        ].map(({ n, title, body }) => (
                            <div key={n} className="relative p-7 rounded-2xl" style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}>
                                <p className="text-6xl font-black mb-6 select-none" style={{ color: 'rgba(26,51,88,0.8)' }}>{n}</p>
                                <h3 className="text-lg font-bold mb-3 text-slate-100">{title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="py-28">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-xl mb-14">
                        <h2 className="text-4xl font-extrabold tracking-tight mb-4">Technology we bring to your kitchen</h2>
                        <p className="text-slate-400">We partner with the leading commercial robotics companies — and take on all the complexity of making their products work in your specific restaurant.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            { name: 'Miso Robotics', tag: 'Kitchen Automation', body: 'AI-powered fry stations and back-of-house automation designed for high-volume operations.' },
                            { name: 'Serve Robotics', tag: 'Sidewalk Delivery', body: 'Autonomous outdoor delivery robots that expand your delivery area with zero added headcount.' },
                            { name: 'Pickle Robotics', tag: 'Dishwashing & Prep', body: 'Tackles one of the most exhausting back-of-house jobs — so your team doesn\'t have to.' },
                        ].map(({ name, tag, body }) => (
                            <div key={name} className="p-6 rounded-2xl group cursor-default transition-all duration-200" style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
                                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(234,88,12,0.35)')}
                                onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}>
                                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>{tag}</p>
                                <h3 className="text-xl font-bold mb-3 text-slate-100">{name}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-28" style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, backgroundColor: 'rgba(15,30,56,0.35)' }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-xl mb-14">
                        <h2 className="text-4xl font-extrabold tracking-tight mb-4">Straightforward pricing</h2>
                        <p className="text-slate-400">No per-robot licensing fees. No surprise charges. Just two line items.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
                        <div className="p-8 rounded-2xl" style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}>
                            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#64748b' }}>One-Time</p>
                            <p className="text-5xl font-extrabold mb-1 text-white">$1,000</p>
                            <p className="text-slate-400 mb-8">Integration fee</p>
                            <ul className="space-y-3">
                                {['On-site kitchen audit & camera review', 'Digital twin + robot selection & simulation', 'Full installation & configuration', 'Staff onboarding'].map(f => (
                                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: ORANGE }} />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-8 rounded-2xl" style={{ backgroundColor: 'rgba(26,51,88,0.5)', border: `1px solid rgba(234,88,12,0.35)` }}>
                            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Per Location / Month</p>
                            <p className="text-5xl font-extrabold mb-1 text-white">$100</p>
                            <p className="text-slate-400 mb-8">Ongoing monitoring & support</p>
                            <ul className="space-y-3">
                                {['24/7 CCTV system monitoring', 'Robot health & uptime alerts', 'Remote diagnostics & support', 'Monthly performance summary'].map(f => (
                                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: ORANGE }} />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <p className="text-slate-500 text-sm mt-8">Hardware pricing varies by robot model. We provide a detailed quote at your free site assessment.</p>
                </div>
            </section>

            {/* Contact CTA */}
            <section id="contact" className="py-28">
                <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-extrabold tracking-tight mb-5">Let's visit your restaurant.</h2>
                        <p className="text-slate-400 leading-relaxed mb-8">
                            We work exclusively with restaurants in D.C., Maryland, and Virginia. Reach out and we'll schedule a free walkthrough — no pitch decks, no pressure.
                        </p>
                        <div className="flex items-center gap-3 text-slate-300">
                            <Phone className="w-4 h-4 text-orange-500" />
                            <span className="text-sm">We'll call you back within one business day.</span>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t" style={{ backgroundColor: NAV, borderColor: BORDER }}>
                <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <img src="/logo.png" alt="Rush Robotics" className="h-6 w-auto object-contain" />
                    <p className="text-sm text-slate-600">© {new Date().getFullYear()} Rush Robotics · D.C., Maryland & Virginia</p>
                </div>
            </footer>
        </div>
    );
}

function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'sent'>('idle');
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sent');
    };

    if (status === 'sent') {
        return (
            <div className="flex flex-col items-center justify-center p-10 rounded-2xl text-center" style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}>
                <CheckCircle2 className="w-12 h-12 mb-4" style={{ color: ORANGE }} />
                <p className="text-xl font-bold mb-2">We'll be in touch soon.</p>
                <p className="text-slate-400 text-sm">Expect a call or email within one business day.</p>
            </div>
        );
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="p-7 rounded-2xl space-y-4" style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}>
            <div className="grid sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Your name</label>
                    <input required type="text" placeholder="Jane Smith" className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                        style={{ backgroundColor: 'rgba(26,51,88,0.5)', border: `1px solid ${BORDER}` }}
                        onFocus={e => (e.currentTarget.style.borderColor = ORANGE)}
                        onBlur={e => (e.currentTarget.style.borderColor = BORDER)} />
                </div>
                <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Phone or email</label>
                    <input required type="text" placeholder="(202) 555-0100" className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                        style={{ backgroundColor: 'rgba(26,51,88,0.5)', border: `1px solid ${BORDER}` }}
                        onFocus={e => (e.currentTarget.style.borderColor = ORANGE)}
                        onBlur={e => (e.currentTarget.style.borderColor = BORDER)} />
                </div>
            </div>
            <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Restaurant name & location</label>
                <input required type="text" placeholder="Joe's Burgers — Capitol Hill, D.C." className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                    style={{ backgroundColor: 'rgba(26,51,88,0.5)', border: `1px solid ${BORDER}` }}
                    onFocus={e => (e.currentTarget.style.borderColor = ORANGE)}
                    onBlur={e => (e.currentTarget.style.borderColor = BORDER)} />
            </div>
            <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Biggest operational headache (optional)</label>
                <textarea rows={3} placeholder="e.g. fryer coverage during lunch rush, dishwashing..." className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none transition-colors resize-none"
                    style={{ backgroundColor: 'rgba(26,51,88,0.5)', border: `1px solid ${BORDER}` }}
                    onFocus={e => (e.currentTarget.style.borderColor = ORANGE)}
                    onBlur={e => (e.currentTarget.style.borderColor = BORDER)} />
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-lg transition-colors"
                style={{ backgroundColor: ORANGE }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c2410c')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = ORANGE)}>
                Request a Free Site Visit <ChevronRight className="w-4 h-4" />
            </button>
        </form>
    );
}
