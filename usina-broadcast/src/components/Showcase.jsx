import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ilhabelaImg from '../assets/ilhabela.png';

export default function Showcase() {
  const [activeItem, setActiveItem] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const projects = [
    {
      id: 0,
      title: "Expedição Alter do Chão 2026",
      category: "Cobertura Off-Road",
      image: "https://www.escolhaviajar.com/wp-content/uploads/2018/11/Praias-de-Alter-do-Ch%C3%A3o.jpg", 
      description: "A 4ª edição da expedição exigiu logística impecável. Acompanhamos a frota com drones de alta velocidade e câmeras estabilizadas nos veículos, garantindo takes de tirar o fôlego mesmo nas condições mais extremas da selva e dos rios, sem perder um segundo de ação.",
      gallery: [
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Alter_do_Ch%C3%A3o_486a.jpg", 
        "https://cafeviagem.com/wp-content/uploads/2023/02/Dicas-de-Alter-do-Chao-praias-2.jpg", 
        "https://transparencia.santarem.pa.gov.br/storage/midias/2019/grandes/up_ag_3217_93f7e0c9-b2d8-4c1b-adb5-4d603d87ffa9.jpg"
      ]
    },
    {
      id: 1,
      title: "Travessia São Sebastião x Ilhabela",
      category: "Cinematografia Náutica",
      image: ilhabelaImg, 
      description: "Cobertura completa do evento náutico, operando equipamentos à prova d'água e coordenando a captação entre as embarcações e a equipe em terra. O resultado foi um material vibrante que capturou a essência da travessia e a adrenalina de todos os envolvidos.",
      gallery: [
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      id: 2,
      title: "COMNEcT CAST - AUTOCOM",
      category: "Eventos & Podcasts",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop",
      description: "Montagem e operação de um estúdio completo de podcast no meio de uma das maiores feiras do setor. Entregamos captação de áudio cristalino e cortes de vídeo dinâmicos e imediatos, conectando o que acontecia no evento diretamente para as redes sociais.",
      gallery: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhkUrz3VmklA5TlawmCqVaqOY3jkH9D9dLg&s", 
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGCAaGRgYGCAZHhsfGh8hHR4bGR8dHiggGx4lIBgaITEhJikrLi4uGiAzODMtNygtLi0BCgoKDg0OGxAQGzImICYwLS0tMC0tLTItLS0tLS0yLzUtLS0tLS8vLS0tLy0tLS0vLS0tLS0tLS0tLS0tLS0tLf/AABEIAKsBJwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAQIHAP/EAEEQAAIBAgQDBgMGAwcEAgMAAAECEQMhAAQSMQVBUQYTImFxgTKRoRQjQlKxwQfR8CQzYpKi4fEVQ3KCFuJjssL/xAAaAQACAwEBAAAAAAAAAAAAAAACAwEEBQAG/8QAMREAAgIBAwEGBQQCAwEAAAAAAAECEQMSITEEBSJBUWFxMoHB0fATkbHxoeEjM3IU/9oADAMBAAIRAxEAPwBa4TxCojtQ+zLXSQSp8QXcRsQAZmPPEfaLgOWI1CmmVbf45LeWhAVUcre843PGHbwk6UuNOk0wIsR4Ay7/AJmxGjalIpi0H4QKg9zTJA94xck4paeV8vp9xaj4hXIdj0+zpUyncV6rKCRVqExInYLB9DHrhd4tU4jRP31FlXogBSBvBQ2FxvO4xayDhqahYDADUZsp6QN28o6TGC2R4hVpkkOzmbmoJmOpbYb7DCXHFInvCtkO0I6R/q/+2GThHFabOGsCDuhggfriamKWYo1DXy1EspMON9+og8uuB2U7N5et/d1jQIFg51KT1WbhY5kz7XwqUPBMnUdXy/HcrWy2iogLAQJ3nkbXwgcVVVMpUakA4PjGochZlGpR4YnS0YCVKFeiFCV6NXVsi1Az3t4kNx7GMDOJ5+qHC1w1MKYIKkX5gBh9JOESxPxDjNWPJz2YanPianP97TK1kQC4ussuwk1ALj5ieDcZpfacw1UI6OswVNQMZBGgAGbGxMC++F5OPERVptTpOu2kQ/zNvXfBZj37F63d1XMgqw0MLi4qLpYm1tWu0+YwcXp2BcbdhTiPZ3Ij7xs7Tp1GulNT3iqDyABLsf8AEPYRhS/6dVh4oVHUMRPdlQQIOqGAIBBDSRsRgvwhxRPeUXqU5JEuRp3j+8pLdbWDIB54IZTOVddT7QqNRbxNVt4gBCgupNPw3MNpnU1hJxNRZ26ECqXRdSEopIEBiQfOOnlzxmiARDFqRa5qL8Jm4kKBAvbYDHQO2NSjmKNErTSnV71AzBQLXANrFbSL8oxWz/Y2sqo9JlfUgsTp5Axe179Lnzx1OtiL8xPoTSbUyqywIdRrWD+bnB6/LBzJolRNdLSQd1MkDqOq/UYC0aOl20lqbcwRvfZlN59hjJy7GSKbU3H/AHFOhW9Q0D+t8C46vAYnQQydUoEIlGUkqIEi59mHUX9sNGV7SrVp1KdRdNXQ3wiVNjfqJwn5TM1FpAMKbICbqSx3mSFDD3t64vZekKo1LVB/KQLiRBXU0ja1x746NxfOwMkpIYsjlKeY1U6gLhadMBhpm63mYkH3wD452Zq5YSgDpFo5eX9e043oV2pyIe8TNQo2lbC1MLaJvceuGTh9PJVAai6RVUG1QjX5w34h7+wwWqMtgUnFWc34cdSBRq8JuoBJJFvwgkc/PEn2JwJWmUYGVJ0rHi2YFvFM9Ogwz8TyuXqgp31NKgjSk6g03gqJ2jfl57YWs7SakQlVCKm2rTIInqbMD/zHJbtMYnastZbMuXcFqSsSCwvG2mIIutpibG+LP2ao27MT1VYnYAS5YehwIzDuzKygqyiUMgERPQGf98X8hxGtVGkmmDexUmR5AsBF58tx0wDVqyVya1sirGTIMG7HYWgwOmxHni/L&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Setup Corporate Master",
      category: "Transmissão ao Vivo",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop",
      description: "Transmissão corporativa de alto padrão com multicâmeras 4K, iluminação cênica e gestão simultânea de mídia. Segurança total na transmissão para que a mensagem chegasse com qualidade de televisão a todos os espectadores.",
      gallery: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1520697830682-8f111075677b?q=80&w=800&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=800&auto=format&fit=crop"
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
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
          className="flex flex-col md:flex-row h-[600px] w-full gap-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              onMouseEnter={() => setActiveItem(project.id)}
              onClick={() => setSelectedProject(project)}
              animate={{ 
                flex: activeItem === project.id ? 5 : 1,
                opacity: activeItem === project.id ? 1 : 0.4
              }}
              // A MÁGICA ZERO-BOUNCE: Mola super rápida e sem delay!
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className={`relative h-full rounded-2xl overflow-hidden cursor-pointer group bg-zinc-900 border-2 transition-colors duration-300 ${activeItem === project.id ? 'border-green-500/0 shadow-2xl shadow-green-900/20' : 'border-zinc-800/0'}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 whitespace-nowrap overflow-hidden">
                <motion.div 
                  initial={false}
                  animate={{ 
                    opacity: activeItem === project.id ? 1 : 0,
                    x: activeItem === project.id ? 0 : -20,
                    y: activeItem === project.id ? 0 : 10
                  }}
                  transition={{ duration: 0.3, delay: activeItem === project.id ? 0.1 : 0 }}
                >
                  <span className="text-[#4ade80] text-sm font-bold uppercase tracking-widest block mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/20 transition-colors group-hover:pr-4">
                    Ver Projeto Completo <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a] overflow-y-auto"
          >
            <div className="relative h-[60vh] w-full">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
              
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 bg-black/50 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10 z-50 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10 pb-32">
              <span className="text-[#4ade80] font-bold uppercase tracking-widest text-sm mb-4 block">
                {selectedProject.category}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                {selectedProject.title}
              </h2>
              
              <div className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 p-8 md:p-12 rounded-3xl mb-16">
                <h3 className="text-xl text-white font-bold mb-4">O Desafio</h3>
                <p className="text-zinc-300 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedProject.gallery.map((img, index) => (
                  <div key={index} className="aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                    <img src={img} alt={`Galeria ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
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
    </section>
  );
}