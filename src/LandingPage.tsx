import React, { useState, useEffect } from 'react';
import {
    Cpu,
    Zap,
    ArrowRight,
    Box,
    CheckCircle2,
    Play,
    ShieldCheck,
    Bot,
    UploadCloud
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    const [terminalText, setTerminalText] = useState('');
    const fullText = `> Initializing Phantom VLA Model...
> Ingesting CAD: "Actuated_Joint_v7.STEP"
> Generating Rooted Manufacturing Operation Tree...
> Mapping constraints to robotic execution paths...
> Compiling prompt-result pairs for arm sequence...
> Simulating snap-fit assembly...
> SUCCESS: Assembly sequence verified. Ready for execution.`;

    // Typing effect for the hero terminal
    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setTerminalText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 30);
        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500/30">
            {/* Navigation */}
            <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 block">
                        <img src="/logo.jpg" alt="Phantom Assembly Logo" className="w-6 h-6 rounded-sm object-contain mix-blend-screen" />
                        <span className="text-xl font-bold tracking-tight">Phantom Assembly</span>
                    </div>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
                        <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
                        <a href="#why-phantom" className="hover:text-white transition-colors">Why Phantom?</a>
                        <a href="#pilot" className="hover:text-white transition-colors">Pilot Program</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-slate-200 transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Abstract Background Glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-600/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                            <Zap className="w-4 h-4" />
                            <span>The Protolabs for Mechatronic Assembly</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                            The API for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                                Mechatronic Assembly.
                            </span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
                            Don't write another PDF traveler. Upload your CAD, and our VLA-powered robotic microfactory will assemble and ship your complex actuated joints in 3 days.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                Upload CAD for Instant Quote <ArrowRight className="w-4 h-4" />
                            </button>
                            <Link to="/demo" className="flex items-center justify-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-all border border-slate-700">
                                Watch the Microfactory in Action <Play className="w-4 h-4 fill-current" />
                            </Link>
                        </div>
                    </div>

                    {/* Hero Terminal UI */}
                    <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900/50 shadow-2xl backdrop-blur-sm">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-950/50">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <span className="text-xs font-mono text-slate-500 ml-2">microfactory.exe — Phantom Assembly</span>
                        </div>
                        <div className="p-6 h-[320px] overflow-y-auto font-mono text-sm text-emerald-400 leading-relaxed">
                            <pre className="whitespace-pre-wrap">{terminalText}</pre>
                            <span className="animate-pulse">_</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* How It Works */}
            <section id="how-it-works" className="py-24 bg-slate-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                        <p className="text-slate-400">From CAD upload to physically verified assembly, our 3-step process guarantees deterministic output.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<UploadCloud className="w-6 h-6 text-emerald-400" />}
                            title="Step 1: Ingest & Parse"
                            description="You upload a CAD assembly. Our engine (powered by constraint assembly graphs) breaks it down into a deterministic 'Rooted Manufacturing Operation Tree.'"
                        />
                        <FeatureCard
                            icon={<Bot className="w-6 h-6 text-emerald-400" />}
                            title="Step 2: VLA Robotic Execution"
                            description="No manual labor. Our proprietary translation layer feeds prompt-result pairs directly into off-the-shelf robotic arms powered by advanced Vision-Language-Action models."
                        />
                        <FeatureCard
                            icon={<ShieldCheck className="w-6 h-6 text-emerald-400" />}
                            title="Step 3: Quality Verified & Shipped"
                            description="The AI visually verifies every step against the CAD constraints. You receive a fully assembled, ISO-compliant joint ready for your robot."
                        />
                    </div>
                </div>
            </section>

            {/* Why Phantom? */}
            <section id="why-phantom" className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-2xl" />
                            <div className="border border-slate-800 rounded-2xl p-8 bg-slate-900/50 backdrop-blur-sm relative z-10">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Cpu className="text-emerald-500" /> "Why Phantom?"
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-slate-200 block mb-1">Drop the Legacy CMs</strong>
                                            <span className="text-slate-400 text-sm">Stop relying on Tier 2/3 contract manufacturers who use chaotic email chains, Excel spreadsheets, and expensive manual labor.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-slate-200 block mb-1">Software-Defined Reliability</strong>
                                            <span className="text-slate-400 text-sm">Because our assembly line is driven by code and AI foundation models, we eliminate human error, missed steps, and "tribal knowledge" loss.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-slate-200 block mb-1">Capture Your Margins</strong>
                                            <span className="text-slate-400 text-sm">Perfect for humanoid robotics, robotic grippers, and advanced aerospace components. You focus on design; we handle the messy physical execution.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Stop managing chaos. Start scaling hardware.</h2>
                            <p className="text-lg text-slate-400 mb-6">
                                We've moved beyond software to solve the physical problem. Phantom provides reliable, automated assembly for the most complex mechatronic joints.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Pilot CTA */}
            <section id="pilot" className="py-24 border-t border-white/5 relative">
                <div className="absolute inset-0 bg-emerald-900/10" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <Box className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
                    <h2 className="text-4xl font-bold mb-6">Join the Actuated Joint Pilot.</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        We are currently taking on early partners building humanoid joints, harmonic drives, and multi-DOF grippers. Let us assemble your hardest sub-assembly for free to prove our precision.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <button className="bg-white text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            Apply for the Pilot
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/10 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <img src="/logo.jpg" alt="Phantom Assembly Logo" className="w-6 h-6 rounded-sm object-contain mix-blend-screen" />
                        <span className="text-lg font-bold tracking-tight text-slate-200">Phantom Assembly</span>
                    </div>

                    <div className="flex gap-8 text-sm font-medium text-slate-400">
                        <a href="#" className="hover:text-white transition-colors">Technology</a>
                        <a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                            Careers <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">We're hiring AI/Robotics Engineers!</span>
                        </a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Contact Us</a>
                    </div>

                    <div className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Phantom Assembly, Inc. Based in Cambridge, MA.
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Helper Component for Features
function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-200">{title}</h3>
            <p className="text-slate-400 leading-relaxed">{description}</p>
        </div>
    );
}