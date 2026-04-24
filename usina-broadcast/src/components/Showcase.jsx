import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import covImg1 from '../assets/Cobertura-de-eventos/imagem1.webp';
import covImg2 from '../assets/Cobertura-de-eventos/imagem2.webp';
import covImg3 from '../assets/Cobertura-de-eventos/imagem3.webp';
import covImg4 from '../assets/Cobertura-de-eventos/imagem4.webp';
import covImg5 from '../assets/Cobertura-de-eventos/imagem5.webp';
import covImg6 from '../assets/Cobertura-de-eventos/imagem6.webp';
import covImg7 from '../assets/Cobertura-de-eventos/imagem7.webp';
import covImg8 from '../assets/Cobertura-de-eventos/imagem8.webp';
import covImg9 from '../assets/Cobertura-de-eventos/imagem9.webp';
import covImg10 from '../assets/Cobertura-de-eventos/imagem10.webp';
import covImg11 from '../assets/Cobertura-de-eventos/imagem11.webp';
import covImg12 from '../assets/Cobertura-de-eventos/imagem12.webp';
import covImg13 from '../assets/Cobertura-de-eventos/imagem13.webp';

import corpImg1 from '../assets/Eventos-Corporativos/imagem1.webp';
import corpImg2 from '../assets/Eventos-Corporativos/imagem2.webp';
import corpImg3 from '../assets/Eventos-Corporativos/imagem3.webp';
import corpImg4 from '../assets/Eventos-Corporativos/imagem4.webp';
import corpImg5 from '../assets/Eventos-Corporativos/imagem5.webp';
import corpImg6 from '../assets/Eventos-Corporativos/imagem6.webp';
import corpImg7 from '../assets/Eventos-Corporativos/imagem7.webp';
import corpImg8 from '../assets/Eventos-Corporativos/imagem8.webp';
import corpImg9 from '../assets/Eventos-Corporativos/imagem9.webp';
import corpImg10 from '../assets/Eventos-Corporativos/imagem10.webp';
import corpImg11 from '../assets/Eventos-Corporativos/imagem11.webp';
import corpImg12 from '../assets/Eventos-Corporativos/imagem12.webp';
import corpImg13 from '../assets/Eventos-Corporativos/imagem13.webp';

import socImg1 from '../assets/Social-Media/imagem1.webp';
import socImg2 from '../assets/Social-Media/imagem2.webp';
import socImg3 from '../assets/Social-Media/imagem3.webp';
import socImg4 from '../assets/Social-Media/imagem4.webp';
import socImg5 from '../assets/Social-Media/imagem5.webp';
import socImg6 from '../assets/Social-Media/imagem6.webp';
import socImg7 from '../assets/Social-Media/imagem7.webp';
import socImg8 from '../assets/Social-Media/imagem8.webp';
import socImg9 from '../assets/Social-Media/imagem9.webp';
import socImg10 from '../assets/Social-Media/imagem10.webp';
import socImg11 from '../assets/Social-Media/imagem11.webp';
import socImg12 from '../assets/Social-Media/imagem12.webp';
import socImg13 from '../assets/Social-Media/imagem13.webp';

import ilhabelaImg from '../assets/ilhabela.png';

export default function Showcase() {
  const [activeItem, setActiveItem] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const projects = [
    {
      id: 0,
      title: "Cobertura de Eventos",
      category: "Aftermovies & Captação",
      image: covImg1,
      description: "Nossa equipe mergulha na ação para capturar a essência do seu evento. Com operação ágil de drones, câmeras estabilizadas e olhar cinematográfico, entregamos um material bruto rico e cortes dinâmicos que transmitem a verdadeira energia do momento, sem perder um segundo de ação.",
      gallery: [
        covImg2, covImg3, covImg4, covImg5,
        covImg6, covImg7, covImg8, covImg9,
        covImg10, covImg11, covImg12, covImg13
      ]
    },
    {
      id: 1,
      title: "Eventos Corporativos",
      category: "Business & Feiras",
      image: corpImg1,
      description: "Registro de alto padrão para o mercado corporativo. Cobrimos palestras, estandes em feiras e ativações de marca com discrição e precisão técnica. Entregamos desde o material para a imprensa até os cortes virais para as redes sociais da sua empresa.",
      gallery: [
        corpImg2, corpImg3, corpImg4, corpImg5,
        corpImg6, corpImg7, corpImg8, corpImg9,
        corpImg10, corpImg11, corpImg12, corpImg13
      ]
    },
    {
      id: 2,
      title: "Content Maker & Redes Sociais",
      category: "Reels, TikToks & In-Loco",
      image: socImg1,
      description: "Esqueça a cobertura tradicional. Aqui o foco é gerar engajamento instantâneo. Nossa equipe atua de forma ágil para capturar a essência do seu evento em tempo real, criando vídeos na vertical e fotos de alto impacto. Entregamos material formatado e pronto para viralizar, conectando sua marca à audiência digital enquanto tudo acontece.",
      gallery: [
        socImg2, socImg3, socImg4, socImg5,
        socImg6, socImg7, socImg8, socImg9,
        socImg10, socImg11, socImg12, socImg13
      ]
    },
    {
      id: 3,
      title: "Travessia São Sebastião x Ilhabela",
      category: "Cinematografia Náutica",
      image: ilhabelaImg, 
      description: "Cobertura completa do evento náutico, operando equipamentos à prova d'água e coordenando a captação entre as embarcações e a equipe em terra. O resultado foi um material vibrante que capturou a essência da travessia e a adrenalina de todos os envolvidos.",
      gallery: [
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop"
      ]
    }
  ];

  useEffect(() => {
    if (selectedProject || zoomedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject, zoomedImage]);

  useEffect(() => {
    const preloadAllImages = () => {
      projects.forEach(project => {
        const allImgs = [project.image, ...(project.gallery || [])];
        allImgs.forEach(src => {
          if (src && typeof src === 'string') {
            const img = new Image();
            img.src = src;
          }
        });
      });
    };
    
    const timer = setTimeout(preloadAllImages, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Nosso <span className="text-[#4ade80]">Portfólio</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
            Da poeira do off-road aos palcos corporativos. Clique nos projetos para ver os detalhes da nossa entrega visual.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col md:flex-row h-[700px] md:h-[600px] w-full gap-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              onMouseEnter={() => setActiveItem(project.id)}
              onClick={() => setActiveItem(project.id)}
              animate={{ 
                flex: activeItem === project.id ? 5 : 1,
                opacity: activeItem === project.id ? 1 : 0.4
              }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className={`relative h-full rounded-2xl overflow-hidden cursor-pointer group bg-zinc-900 border-2 transition-colors duration-300 ${activeItem === project.id ? 'border-green-500/0 shadow-2xl shadow-green-900/20' : 'border-zinc-800/0'}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:grayscale-0 md:group-hover:scale-105 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 whitespace-nowrap overflow-hidden w-full">
                <motion.div 
                  initial={false}
                  animate={{ 
                    opacity: activeItem === project.id ? 1 : 0,
                    x: activeItem === project.id ? 0 : -20,
                    y: activeItem === project.id ? 0 : 10,
                    pointerEvents: activeItem === project.id ? "auto" : "none" 
                  }}
                  transition={{ duration: 0.3, delay: activeItem === project.id ? 0.1 : 0 }}
                  className="flex flex-col items-start"
                >
                  <span className="text-[#4ade80] text-xs md:text-sm font-bold uppercase tracking-widest block mb-2 whitespace-normal">
                    {project.category}
                  </span>
                  <h3 className="font-display text-white text-2xl md:text-3xl font-bold mb-4 whitespace-normal line-clamp-2 md:line-clamp-none">
                    {project.title}
                  </h3>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); 
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/20 transition-colors group-hover:pr-4"
                  >
                    Ver Projeto Completo <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a] overflow-y-auto"
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="fixed top-6 right-6 md:top-10 md:right-10 bg-black/50 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10 z-[150] cursor-pointer"
            >
              ✕
            </button>

            <div className="relative h-[40vh] md:h-[60vh] w-full bg-[#0a0a0a]">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 -mt-20 md:-mt-32 relative z-20 pb-32">
              <span className="text-[#4ade80] font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">
                {selectedProject.category}
              </span>
              <h2 className="font-display text-3xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                {selectedProject.title}
              </h2>
              
              <div className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 p-6 md:p-12 rounded-3xl mb-12 md:mb-16">
                <h3 className="font-display text-xl text-white font-bold mb-4">Visão Geral</h3>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {selectedProject.gallery.map((img, index) => (
                  <div 
                    key={index} 
                    onClick={() => setZoomedImage(img)}
                    className="aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-zoom-in group relative"
                  >
                    <img 
                      src={img} 
                      alt={`Galeria ${index + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 will-change-transform" 
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-16 text-center">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-zinc-400 hover:text-white transition-colors font-medium cursor-pointer"
                >
                  ← Voltar para o Portfólio
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setZoomedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.1 }}
              src={zoomedImage}
              alt="Ampliada"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl will-change-transform"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}