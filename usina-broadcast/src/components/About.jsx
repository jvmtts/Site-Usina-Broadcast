import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="sobre" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-500/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div>
            <span className="text-[#4ade80] text-sm font-bold uppercase tracking-widest block mb-3">
              Quem Somos
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Audiovisual levado <br/> ao <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Extremo.</span>
            </h2>
          </div>
          
          <div className="text-lg text-zinc-400 font-medium leading-relaxed border-l-2 border-[#4ade80]/30 pl-6">
            <p className="mb-4">
              A Usina Broadcast é especializada em capturar a adrenalina do setor náutico e off-road com a precisão técnica exigida pelo mercado corporativo.
            </p>
            <p>
              Do dinamismo de montar estúdios de podcast ao vivo na AUTOCOM até a complexidade logística de coberturas em expedições por Alter do Chão e travessias em Ilhabela, nós entregamos qualidade de cinema em qualquer terreno.
            </p>
          </div>

          <div className="flex gap-12 border-t border-zinc-800 pt-8 mt-2">
            <div>
              <h4 className="font-display text-4xl font-black text-white mb-1">Alta</h4>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em] font-bold">Performance</p>
            </div>
            <div>
              <h4 className="font-display text-4xl font-black text-white mb-1">Setup</h4>
              <p className="text-xs text-zinc-500 uppercase tracking-[0.2em] font-bold">Completo</p>
            </div>
          </div>

          <ul className="flex flex-col gap-4 pt-4 text-zinc-300 font-medium text-md">
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/10 text-[#4ade80] text-sm">✓</span> 
              Cinematografia Náutica e Off-Road
            </li>
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/10 text-[#4ade80] text-sm">✓</span> 
              Transmissões ao Vivo e Podcasts
            </li>
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/10 text-[#4ade80] text-sm">✓</span> 
              Cortes e Gestão de Mídia para Redes Sociais
            </li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="grid grid-cols-2 gap-4 h-[600px]"
        >

          <div className="flex flex-col gap-4 h-full pt-12">
            <div className="bg-zinc-900 rounded-3xl w-full h-3/5 overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=800&auto=format&fit=crop" 
                alt="Equipe Usina em ação" 
                className="w-full h-full object-cover hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
            <div className="bg-zinc-900 rounded-3xl w-full h-2/5 overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1527011045974-4569e5d48a8b?q=80&w=800&auto=format&fit=crop" 
                alt="Equipamentos de alta performance" 
                className="w-full h-full object-cover hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
          </div>
          
          {/* Coluna 2 */}
          <div className="flex flex-col gap-4 h-full pb-12">
            <div className="bg-zinc-900 rounded-3xl w-full h-2/5 overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=800&auto=format&fit=crop" 
                alt="Estúdio de Podcast" 
                className="w-full h-full object-cover hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
            <div className="bg-zinc-900 rounded-3xl w-full h-3/5 overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1533561797500-4bad4728594e?q=80&w=800&auto=format&fit=crop" 
                alt="Cobertura externa de eventos" 
                className="w-full h-full object-cover hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}