import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Crown, Layers, Home, Paintbrush, ShoppingCart, 
  TrendingUp, Cpu, Search, Zap, Megaphone, Gift, 
  Bot, Smartphone, Globe, Rocket, Menu, X, ChevronRight, Moon, Coffee
} from 'lucide-react';
import { blueprintData } from './data/blueprint';

const iconMap: Record<string, any> = {
  Crown, Sitemap: Layers, Home, Paintbrush, ShoppingCart, 
  TrendingUp, Cpu, Search, Zap, Megaphone, Gift, 
  Bot, Smartphone, Globe, Rocket, Coffee
};

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState(blueprintData[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeSection = blueprintData.find(s => s.id === activeSectionId) || blueprintData[0];

  return (
    <div className="min-h-screen flex bg-[#0A0A0A] text-[#FBF9F6] font-sans selection:bg-[#D4AF37]/30">
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Moon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
          <span className="font-serif text-[#D4AF37] font-bold tracking-wider">أبوصالح</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-white">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-[#0A0A0A] border-r border-white/10 transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="h-full flex flex-col pt-16 md:pt-0">
          
          <div className="p-8 hidden md:block">
            <div className="flex items-center gap-3 mb-2">
              <Moon className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />
              <h1 className="text-2xl font-serif text-[#D4AF37] font-bold tracking-widest">أبوصالح</h1>
            </div>
            <p className="text-xs tracking-widest text-white/40 uppercase font-light">Digital Infrastructure Blueprint</p>
          </div>

          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-hide">
            {blueprintData.map((section) => {
              const IconComponent = iconMap[section.icon];
              const isActive = activeSectionId === section.id;
              
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSectionId(section.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 group
                    ${isActive 
                      ? 'bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 text-white shadow-[0_0_20px_rgba(212,175,55,0.05)]' 
                      : 'hover:bg-white/5 text-white/50 hover:text-white/90'
                    }`}
                >
                  <IconComponent className={`w-4 h-4 transition-colors duration-300 ${isActive ? 'text-[#D4AF37]' : 'text-white/40 group-hover:text-[#D4AF37]/70'}`} strokeWidth={1.5} />
                  <span className={`text-sm font-medium ${isActive ? 'font-semibold' : ''}`}>{section.title}</span>
                  {isActive && (
                    <ChevronRight className="w-4 h-4 ml-auto text-[#D4AF37]/70 animate-in fade-in slide-in-from-left-2" />
                  )}
                </button>
              );
            })}
          </nav>
          
          <div className="p-6 border-t border-white/10 bg-white/[0.02]">
            <p className="text-xs text-white/30 font-mono">CONFIDENTIAL & PROPRIETARY<br/>AGENCY BLUEPRINT v1.0</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col md:ml-72 min-h-screen pt-16 md:pt-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/[0.03] via-[#0A0A0A] to-[#0A0A0A]">
        {mounted && (
          <div className="flex-1 overflow-y-auto px-6 py-10 md:p-16 max-w-5xl mx-auto w-full">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="w-full"
              >
                {/* Section Header */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[#D4AF37]/20 blur-md"></div>
                      {(() => {
                        const Icon = iconMap[activeSection.icon];
                        return <Icon className="w-5 h-5 text-[#D4AF37] relative z-10" strokeWidth={1.5} />;
                      })()}
                    </div>
                    <div className="h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent flex-1" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-[#D4AF37]/80 leading-tight">
                    {activeSection.title}
                  </h2>
                </div>

                {/* Section Body rendered from structured data */}
                <div className="prose prose-invert prose-p:text-white/80 max-w-none">
                  {activeSection.content}
                </div>
                
                {/* Next Button Nav */}
                <div className="mt-16 pt-8 border-t border-white/10 flex justify-end">
                  {(() => {
                     const currentIndex = blueprintData.findIndex(s => s.id === activeSection.id);
                     if (currentIndex < blueprintData.length - 1) {
                       const nextSection = blueprintData[currentIndex + 1];
                       return (
                         <button 
                           onClick={() => {
                             setActiveSectionId(nextSection.id);
                             window.scrollTo({ top: 0, behavior: 'smooth' });
                           }}
                           className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#B8972E] text-[#0A0A0A] font-semibold transition-all duration-300 hover:scale-[1.02]"
                         >
                           Continue to {nextSection.title.split('.')[1]} <ChevronRight className="w-4 h-4" />
                         </button>
                       );
                     }
                     return null;
                  })()}
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        )}
      </main>

    </div>
  );
}
