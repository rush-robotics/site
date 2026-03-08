import React, { useState, useEffect, useRef } from 'react';
import {
  Send, Download, Plus, Bot, User, CheckCircle2,
  Table as TableIcon, FileText, FileDown, Zap, Image as ImageIcon,
  Cpu, Activity
} from 'lucide-react';

export default function Demo() {
  const [appState, setAppState] = useState<'idle' | 'generating' | 'done'>('idle');
  const [messages, setMessages] = useState<{ role: 'user' | 'system'; content: string; hasAttachment?: boolean }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [activeTab, setActiveTab] = useState<'instructions' | 'bom'>('instructions');
  const [generationStep, setGenerationStep] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const steps = [
    "Ingesting design inputs...",
    "Parsing N-ary geometry & identifying dependencies...",
    "Extracting 1x MCU (RP2040), 4x Switches, Case...",
    "Querying Lightsail & DigiKey APIs for Costing...",
    "Compiling BOM & Step-by-Step Instructions...",
    "Finalizing Exportable Techno-Economic Model..."
  ];

  const bomData = [
    { partNo: 'RR-001', name: 'RP2040 Microcontroller Board', supplier: 'DigiKey', qty: 1, unitCost: 1.10, leadTime: '2 Days' },
    { partNo: 'RR-002', name: 'Mechanical Switch (Tactile)', supplier: 'Mouser', qty: 4, unitCost: 0.65, leadTime: '1 Day' },
    { partNo: 'RR-003', name: 'PBT Blank Keycap', supplier: 'Alibaba', qty: 4, unitCost: 0.25, leadTime: '14 Days' },
    { partNo: 'RR-004', name: 'ABS Bottom Enclosure', supplier: 'Protolabs', qty: 1, unitCost: 3.50, leadTime: '7 Days' },
    { partNo: 'RR-005', name: 'Aluminum Top Plate', supplier: 'Xometry', qty: 1, unitCost: 4.20, leadTime: '5 Days' },
    { partNo: 'RR-006', name: 'M2x6mm Socket Head Screw', supplier: 'McMaster-Carr', qty: 4, unitCost: 0.05, leadTime: '1 Day' },
  ];

  const totalCost = bomData.reduce((acc, item) => acc + (item.unitCost * item.qty), 0);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages(prev => [...prev, { role: 'user', content: inputValue, hasAttachment: true }]);
    setInputValue('');
    setAppState('generating');
    setGenerationStep(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, appState, generationStep]);

  useEffect(() => {
    if (appState === 'generating') {
      const interval = setInterval(() => {
        setGenerationStep(prev => {
          if (prev >= steps.length - 1) {
            clearInterval(interval);
            setTimeout(() => {
              setAppState('done');
            }, 500);
            return prev;
          }
          return prev + 1;
        });
      }, 1200);
      return () => clearInterval(interval);
    }
  }, [appState]);

  return (
    <div className="min-h-screen text-slate-50 font-sans selection:bg-orange-500/30 overflow-hidden flex flex-col relative" style={{ backgroundColor: '#080f1a' }}>
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(234,88,12,0.06)' }} />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(26,51,88,0.3)' }} />

      {/* Header */}
      <header className="h-16 border-b border-white/5 backdrop-blur-xl flex items-center px-6 z-20 shrink-0" style={{ backgroundColor: 'rgba(8,15,26,0.6)' }}>
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Rush Robotics Logo" className="h-6 w-auto object-contain" />
        </div>
      </header>

      {/* Main Layout Area */}
      <main className="flex-1 flex overflow-hidden z-10 p-4 gap-4 transition-all duration-700">

        {/* Chat / Input Pane */}
        <section
          className={`flex flex-col rounded-2xl border border-white/5 backdrop-blur-lg shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${appState === 'idle'
            ? 'w-full max-w-3xl mx-auto my-12 h-[calc(100vh-10rem)]'
            : 'w-80 shrink-0 h-full'
            }`}
          style={{ backgroundColor: 'rgba(15,30,56,0.4)' }}
        >
          {appState === 'idle' && (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 rounded-2xl border flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(234,88,12,0.1)', borderColor: 'rgba(234,88,12,0.2)' }}>
                <Cpu className="w-8 h-8 text-orange-400" />
              </div>
              <h1 className="text-3xl font-semibold mb-3">What are we building?</h1>
              <p className="text-slate-400 max-w-md">
                Upload CAD models, rough sketches, or describe your assembly. Rush Robotics will generate work instructions, deterministic BOMs, and costing.
              </p>
            </div>
          )}

          {appState !== 'idle' && (
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-[#1a3358]' : 'border'}`}
                    style={msg.role !== 'user' ? { backgroundColor: 'rgba(234,88,12,0.15)', borderColor: 'rgba(234,88,12,0.3)' } : {}}>
                    {msg.role === 'user' ? <User className="w-4 h-4 text-slate-300" /> : <Bot className="w-4 h-4 text-orange-400" />}
                  </div>
                  <div className={`px-4 py-3 rounded-2xl text-sm ${msg.role === 'user'
                    ? 'text-slate-100 rounded-tr-sm break-words max-w-[85%]'
                    : 'bg-white/5 border border-white/10 text-slate-300 rounded-tl-sm'
                    }`}
                    style={msg.role === 'user' ? { backgroundColor: '#1a3358' } : {}}>
                    {msg.hasAttachment && (
                      <div className="flex items-center gap-2 mb-2 p-2 rounded border" style={{ backgroundColor: '#080f1a', borderColor: '#1a3358' }}>
                        <ImageIcon className="w-4 h-4 text-orange-400" />
                        <span className="text-xs font-mono text-orange-400 truncate">attachment_sketch.png</span>
                      </div>
                    )}
                    {msg.content}
                  </div>
                </div>
              ))}

              {appState === 'generating' && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(234,88,12,0.15)', borderColor: 'rgba(234,88,12,0.3)' }}>
                    <Zap className="w-4 h-4 text-orange-400 animate-pulse" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-white/5 border border-white/10 w-full">
                    <div className="space-y-3">
                      {steps.map((step, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-2 text-xs font-mono transition-all duration-300 ${i < generationStep ? 'text-orange-400' :
                            i === generationStep ? 'text-orange-400 animate-pulse' :
                              'text-slate-600'
                            }`}
                        >
                          {i < generationStep ? (
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          ) : i === generationStep ? (
                            <Activity className="w-3.5 h-3.5" />
                          ) : (
                            <div className="w-3.5 h-3.5 rounded-full border border-slate-700" />
                          )}
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-white/5" style={{ backgroundColor: 'rgba(15,30,56,0.5)' }}>
            <div className="relative group">
              <button className="absolute left-3 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white">
                <Plus className="w-5 h-5" />
              </button>
              <input
                type="text"
                autoFocus
                disabled={appState === 'generating'}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={appState === 'generating' ? "Compiling..." : "Describe the assembly or drop CAD/images..."}
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl pl-12 pr-12 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all placeholder:text-slate-500 disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || appState === 'generating'}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-orange-600 hover:bg-orange-500 disabled:opacity-30 text-white rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            {appState === 'idle' && (
              <div className="mt-3 flex gap-2 justify-center">
                <button onClick={() => setInputValue("Analyze this macropad CAD and generate instructions.")} className="text-xs px-3 py-1.5 rounded-full border text-slate-400 hover:text-slate-200 transition-colors" style={{ borderColor: '#1a3358' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1a3358')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                  "Analyze this macropad CAD..."
                </button>
                <button onClick={() => setInputValue("Costing for a 3-part enclosure")} className="text-xs px-3 py-1.5 rounded-full border text-slate-400 hover:text-slate-200 transition-colors" style={{ borderColor: '#1a3358' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1a3358')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                  "Costing for a 3-part..."
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Dashboard / Output Pane */}
        {appState !== 'idle' && (
          <section className="flex-1 rounded-2xl border border-white/5 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right-8 duration-700 delay-100 fill-mode-both" style={{ backgroundColor: 'rgba(8,15,26,0.85)' }}>

            {/* Dashboard Header */}
            <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-white/5">
              <div className="flex gap-6">
                <button
                  onClick={() => setActiveTab('instructions')}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors border-b-2 h-16 pt-[2px] ${activeTab === 'instructions' ? 'border-orange-500 text-white' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
                >
                  <FileText className="w-4 h-4" /> Work Instructions
                </button>
                <button
                  onClick={() => setActiveTab('bom')}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors border-b-2 h-16 pt-[2px] ${activeTab === 'bom' ? 'border-orange-500 text-white' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
                >
                  <TableIcon className="w-4 h-4" /> Bill of Materials & Cost
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-3 py-1 rounded-full border text-xs text-slate-400 font-mono" style={{ backgroundColor: '#0f1e38', borderColor: '#1a3358' }}>
                  {appState === 'generating' ? 'Status: Building...' : 'Status: Ready'}
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar relative">
              {appState === 'generating' ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4 opacity-50">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 border-4 rounded-full" style={{ borderColor: '#1a3358' }}></div>
                      <div className="absolute inset-0 border-4 border-orange-500 rounded-full border-t-transparent animate-spin"></div>
                    </div>
                    <span className="text-sm text-slate-400 animate-pulse">Processing geometric relations...</span>
                  </div>
                </div>
              ) : (
                <div className="h-full animate-in fade-in duration-500">
                  {activeTab === 'instructions' ? (
                    <div className="max-w-4xl mx-auto">
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h2 className="text-2xl font-bold tracking-tight">Standard Operating Procedure</h2>
                          <p className="text-slate-400 text-sm mt-1">IoT Macropad Assembly REV A</p>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 text-slate-200 rounded-lg text-sm font-medium transition-colors border" style={{ backgroundColor: '#0f1e38', borderColor: '#1a3358' }}>
                          <FileDown className="w-4 h-4" /> Export PDF
                        </button>
                      </div>

                      <div className="space-y-8">
                        {[
                          {
                            n: 1, title: "Prepare Bottom Enclosure & Top Plate",
                            desc: "Inspect the ABS Bottom Enclosure (RR-004) for any molding defects. Align the Aluminum Top Plate (RR-005) with the mounting standoffs. Ensure correct orientation using the USB-C port cutout.",
                            img: `${import.meta.env.BASE_URL}images/macropad_cad.png`, alt: "CAD View"
                          },
                          {
                            n: 2, title: "Install Switches & PCB",
                            desc: "Snap the 4x Mechanical Switches (RR-002) firmly into the Top Plate. Align the pins with the hot-swap sockets on the PCB (RR-001) and press down evenly. Do not bend pins.",
                            img: `${import.meta.env.BASE_URL}images/macropad_step_cad.png`, alt: "Step View"
                          },
                          {
                            n: 3, title: "Fasten Assembly",
                            desc: "Use 4x M2x6mm Socket Head Screws (RR-006) to secure the Top Plate sub-assembly to the Bottom Enclosure. Apply a torque of 0.4 Nm. Attach Keycaps (RR-003) to finish.",
                            img: null, alt: ""
                          },
                        ].map(({ n, title, desc, img, alt }) => (
                          <div key={n} className="rounded-xl p-6 border border-white/5" style={{ backgroundColor: 'rgba(15,30,56,0.5)' }}>
                            <div className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-full border flex items-center justify-center text-orange-400 font-bold shrink-0" style={{ backgroundColor: 'rgba(234,88,12,0.15)', borderColor: 'rgba(234,88,12,0.3)' }}>{n}</div>
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{desc}</p>
                                {img && (
                                  <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/10 flex items-center justify-center" style={{ backgroundColor: '#080f1a' }}>
                                    <img src={img} alt={alt} className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity" />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-5xl mx-auto">
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h2 className="text-2xl font-bold tracking-tight">Live Economic Model</h2>
                          <p className="text-slate-400 text-sm mt-1">Sourcing via DigiKey & Xometry APIs (1,000 Volume)</p>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 text-slate-200 rounded-lg text-sm font-medium transition-colors border" style={{ backgroundColor: '#0f1e38', borderColor: '#1a3358' }}>
                          <Download className="w-4 h-4" /> Export Excel
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-6 mb-8">
                        <div className="p-5 rounded-xl border border-white/5" style={{ backgroundColor: 'rgba(15,30,56,0.5)' }}>
                          <div className="text-sm font-medium text-slate-400 mb-1">Total Unit Cost</div>
                          <div className="text-3xl font-bold text-white">${totalCost.toFixed(2)}</div>
                          <div className="text-xs text-orange-400 mt-2 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Pricing Verified
                          </div>
                        </div>
                        <div className="p-5 rounded-xl border border-white/5" style={{ backgroundColor: 'rgba(15,30,56,0.5)' }}>
                          <div className="text-sm font-medium text-slate-400 mb-1">Est. Tooling Cost</div>
                          <div className="text-3xl font-bold text-white">$1,850.00</div>
                          <div className="text-xs text-amber-400 mt-2 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Injection Mold Setup
                          </div>
                        </div>
                        <div className="p-5 rounded-xl border border-white/5" style={{ backgroundColor: 'rgba(15,30,56,0.5)' }}>
                          <div className="text-sm font-medium text-slate-400 mb-1">Critical Lead Time</div>
                          <div className="text-3xl font-bold text-white">14 Days</div>
                          <div className="text-xs text-slate-400 mt-2">Driven by RR-003</div>
                        </div>
                      </div>

                      <div className="rounded-xl border border-white/5 overflow-hidden" style={{ backgroundColor: 'rgba(15,30,56,0.5)' }}>
                        <table className="w-full text-left text-sm whitespace-nowrap">
                          <thead className="border-b border-white/5" style={{ backgroundColor: 'rgba(8,15,26,0.5)' }}>
                            <tr>
                              <th className="px-6 py-4 font-semibold text-slate-300">Part Number</th>
                              <th className="px-6 py-4 font-semibold text-slate-300">Description</th>
                              <th className="px-6 py-4 font-semibold text-slate-300">Supplier</th>
                              <th className="px-6 py-4 font-semibold text-slate-300">Qty</th>
                              <th className="px-6 py-4 font-semibold text-slate-300">Unit Cost</th>
                              <th className="px-6 py-4 font-semibold text-slate-300">Ext Cost</th>
                              <th className="px-6 py-4 font-semibold text-slate-300 text-right">Lead Time</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {bomData.map((item, i) => (
                              <tr key={i} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 font-mono text-xs text-orange-400">{item.partNo}</td>
                                <td className="px-6 py-4 text-slate-200">{item.name}</td>
                                <td className="px-6 py-4 text-slate-400">{item.supplier}</td>
                                <td className="px-6 py-4 text-slate-200">{item.qty}</td>
                                <td className="px-6 py-4 text-slate-200">${item.unitCost.toFixed(2)}</td>
                                <td className="px-6 py-4 text-slate-200 font-medium">${(item.unitCost * item.qty).toFixed(2)}</td>
                                <td className="px-6 py-4 text-slate-400 text-right">{item.leadTime}</td>
                              </tr>
                            ))}
                            <tr className="font-semibold border-t border-white/10" style={{ backgroundColor: 'rgba(8,15,26,0.3)' }}>
                              <td colSpan={5} className="px-6 py-4 text-right">Total:</td>
                              <td className="px-6 py-4 text-orange-400">${totalCost.toFixed(2)}</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(255,255,255,0.1); border-radius: 20px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: rgba(255,255,255,0.2); }
      `}} />
    </div>
  );
}
