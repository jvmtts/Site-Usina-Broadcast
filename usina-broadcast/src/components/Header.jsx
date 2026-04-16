import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoUsina from '../assets/UsinaBroadcastLogo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Trabalhos', href: '#portfolio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <div className="flex-shrink-0 z-[110] relative">
          <a href="#home" className="block group">
            <img 
              src={logoUsina} 
              alt="Logo Usina Broadcast" 
              className="h-16 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </a>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 text-[13px] font-medium text-zinc-300 uppercase tracking-wider">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="group relative py-2 transition hover:text-white">
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden relative z-[110] text-zinc-300 hover:text-white p-2 focus:outline-none"
        >
          <svg className="w-8 h-8 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 w-full h-screen bg-[#050505]/95 backdrop-blur-2xl md:hidden flex flex-col justify-center items-center z-[105]"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-3xl font-bold text-zinc-300 hover:text-white transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}