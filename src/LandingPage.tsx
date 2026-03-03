import React, { useState, useEffect } from 'react';
import {
    Cpu,
    Zap,
    ArrowRight,
    Box,

    DollarSign,
    Workflow,
    PenTool,
    CheckCircle2,
    Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    const [terminalText, setTerminalText] = useState('');
    const fullText = `> Initializing Phantom AI...
> Ingesting unstructured input: "Actuator_Assembly_v3.STEP"
> Parsing N-ary geometry...
> Parsing joint assembly tree...
> Harmonic drive subassembly detected.
> 6x DOF linkage chain detected.
> Precision machined housing detected. Recommended: Tier 2 CM.
> Querying Lightsail & DigiKey APIs...
> Costing complete: $847 / unit @ 500 vol. Operation tree ready.
> Generating deterministic BOM...
> Compiling work instructions...
> SUCCESS: Techno-Economic Model Ready.`;

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
                        <a href="#product" className="hover:text-white transition-colors">Product</a>
                        <a href="#pipeline" className="hover:text-white transition-colors">The Compiler</a>
                        <a href="#use-cases" className="hover:text-white transition-colors">Consumer Hardware</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/demo" className="text-slate-300 hover:text-white text-sm font-semibold transition-colors flex items-center gap-2">
                            <Play className="w-4 h-4 fill-current" /> Try Demo
                        </Link>
                        <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-slate-200 transition-colors">
                            Request Early Access
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
                            <span>Built for hardware teams at Series A–C robotics companies</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                            Your design, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                                factory-ready in 30 minutes.
                            </span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
                            Phantom Assembly turns your CAD files and design intent into a structured manufacturing plan — version-controlled, cost-rolled, and ready for your contract manufacturer. No more re-quotes. No more lost context on revision 3.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/demo" className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                Try Live Demo <ArrowRight className="w-4 h-4" />
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
                            <span className="text-xs font-mono text-slate-500 ml-2">compiler.exe — Phantom Assembly</span>
                        </div>
                        <div className="p-6 h-[320px] overflow-y-auto font-mono text-sm text-emerald-400 leading-relaxed">
                            <pre className="whitespace-pre-wrap">{terminalText}</pre>
                            <span className="animate-pulse">_</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Core Features */}
            <section id="product" className="py-24 bg-slate-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4">From Messy Input to Deterministic Output</h2>
                        <p className="text-slate-400">Stop wasting engineering hours on manual procurement and documentation. Our agentic workflow engine acts as the translation layer between design intent and factory execution.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<PenTool className="w-6 h-6 text-emerald-400" />}
                            title="Messy Design Ingestion"
                            description="Upload unstructured CAD, rough sketches, or text prompts. Our vision models extract geometric constraints and electro-mechanical intent instantly."
                        />
                        <FeatureCard
                            icon={<DollarSign className="w-6 h-6 text-green-400" />}
                            title="Live Techno-Economic Models"
                            description="We link directly to procurement rails like Lightsail and DigiKey to generate real-time cost estimates and supplier routing before you cut steel."
                        />
                        <FeatureCard
                            icon={<Workflow className="w-6 h-6 text-purple-400" />}
                            title="Execution-Ready Outputs"
                            description="Automatically generate structured N-ary BOMs and step-by-step assembly instructions. Ship to your CM with zero ambiguity."
                        />
                    </div>
                </div>
            </section>

            {/* ICP / Target Audience Section */}
            <section id="use-cases" className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-2xl" />
                            <div className="border border-slate-800 rounded-2xl p-8 bg-slate-900/50 backdrop-blur-sm relative z-10">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Cpu className="text-emerald-500" /> Target: Electro-Mechanical Assemblies
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                         "Robotics startups (Series A–C)",
                                         "Hardware leads managing CM relationships solo",
                                         "Teams iterating faster than their quote cycle"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                            <span className="text-slate-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Built for robotics hardware teams who are done losing weeks to the CM handoff.</h2>
                            <p className="text-lg text-slate-400 mb-6">
                                Complex actuated assemblies — joints, grippers, drives — break every generic tool. Phantom is purpose-built for the electro-mechanical handoff: from your STEP file to a factory-ready operation tree, in one step.
                            </p>
                            <div className="flex items-center gap-4 text-sm text-slate-300 font-medium">
                                <div className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700">Actuated Joints</div>
                                <div className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700">Harmonic Drives</div>
                                <div className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700">Multi-DOF Grippers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Pipeline CTA */}
            <section className="py-24 border-t border-white/5 relative">
                <div className="absolute inset-0 bg-emerald-900/10" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <Box className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
                    <h2 className="text-4xl font-bold mb-6">Ready to compile your hardware?</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        Join the private beta and start turning messy ideas into procurement-ready production plans.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Link to="/demo" className="bg-white text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            Try the Demo Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-white/10 text-center text-sm text-slate-500">
                <p>© {new Date().getFullYear()} Phantom Assembly, Inc. Based in Cambridge, MA.</p>
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
