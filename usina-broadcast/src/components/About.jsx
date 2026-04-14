import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="sobre" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Muito além do <span className="text-[#4ade80]">REC.</span>
          </h2>
          
          <div className="text-lg text-[#f5f5f5]/80 space-y-6 font-medium leading-relaxed">
            <p>
              O cliente não contrata apenas câmeras, ele contrata a segurança de que nada vai dar errado na hora H. E é exatamente essa a nossa entrega.
            </p>
            <p>
              Nós forjamos nossa experiência onde a margem de erro é zero. Sabemos exatamente a complexidade de montar e operar um estúdio de podcast oficial no meio do caos de feiras gigantes de negócios, garantindo áudio e vídeo impecáveis para os convidados em tempo real.
            </p>
            <p>
              Ao mesmo tempo, dominamos a logística extrema. De travessias náuticas complexas no litoral paulista até grandes expedições em Alter do Chão, nossa equipe garante a cobertura cinematográfica, seja no ambiente corporativo ou no meio do off-road. Se o desafio é grande, a Usina resolve.
            </p>
          </div>

          <div className="pt-4">
            <div className="flex gap-10 border-t border-white/10 pt-8">
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">Zero</h4>
                <p className="text-sm text-[#f5f5f5]/60 uppercase tracking-wider">Margem de Erro</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">100%</h4>
                <p className="text-sm text-[#f5f5f5]/60 uppercase tracking-wider">Prontidão</p>
              </div>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-white/10">
            <ul className="flex flex-col gap-4 pt-6 text-[#f5f5f5] font-medium text-lg">
              <li className="flex items-center gap-3">
                <span className="text-[#4ade80] text-xl">✓</span> Captação Cinematográfica
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#4ade80] text-xl">✓</span> Gestão Inteligente de Mídia
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#4ade80] text-xl">✓</span> Cortes Estratégicos para Redes
              </li>
            </ul>
          </div>
        </motion.div>
        

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="grid grid-cols-2 gap-4 h-[600px]"
        >
          <div className="flex flex-col gap-4 h-full pt-10">
            <div className="bg-zinc-900 rounded-2xl w-full h-3/5 overflow-hidden border border-white/5">
              <img 
                src="/foto-bastidores-1.jpg" 
                alt="Equipe Usina em ação" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="bg-zinc-900 rounded-2xl w-full h-2/5 overflow-hidden border border-white/5">
              <img 
                src="/foto-equipamento.jpg" 
                alt="Equipamentos de alta performance" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-4 h-full pb-10">
            <div className="bg-zinc-900 rounded-2xl w-full h-2/5 overflow-hidden border border-white/5">
              <img 
                src="/foto-estudio.jpg" 
                alt="Estúdio de Podcast" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="bg-zinc-900 rounded-2xl w-full h-3/5 overflow-hidden border border-white/5">
              <img 
                src="/foto-bastidores-2.jpg" 
                alt="Cobertura externa de eventos" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}