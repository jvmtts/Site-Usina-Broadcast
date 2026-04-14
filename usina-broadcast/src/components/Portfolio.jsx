import { motion } from 'framer-motion';

export default function Portfolio() {
  const images = [
    "/portfolio-1.jpg",
    "/portfolio-2.jpg",
    "/portfolio-3.jpg",
    "/portfolio-4.jpg",
    "/portfolio-5.jpg"
  ];

  return (
    <section id="portfolio" className="py-32 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            O fluxo da <span className="text-[#4ade80]">Excelência</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto font-medium">
            Você nos contrata. Nós cuidamos do resto. Da captação bruta no set até o corte final otimizado para viralizar nas suas redes sociais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-zinc-800 bg-[#0a0a0a] p-8 rounded-2xl"
          >
            <div className="text-[#4ade80] text-2xl font-bold mb-4">01.</div>
            <h3 className="text-xl text-white font-bold mb-3">Gravação Master</h3>
            <p className="text-zinc-400 leading-relaxed">Captação em 4K com multicâmeras e áudio de estúdio, garantindo a matéria-prima perfeita para o seu projeto.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-zinc-800 bg-[#0a0a0a] p-8 rounded-2xl"
          >
            <div className="text-[#4ade80] text-2xl font-bold mb-4">02.</div>
            <h3 className="text-xl text-white font-bold mb-3">Gestão de Mídia</h3>
            <p className="text-zinc-400 leading-relaxed">Organização, backup seguro e decupagem inteligente de todo o material bruto imediatamente após o evento.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border border-zinc-800 bg-[#0a0a0a] p-8 rounded-2xl"
          >
            <div className="text-[#4ade80] text-2xl font-bold mb-4">03.</div>
            <h3 className="text-xl text-white font-bold mb-3">Cortes e Entrega</h3>
            <p className="text-zinc-400 leading-relaxed">Edição dinâmica, color grading e entrega de cortes já formatados para reter a atenção no Instagram, TikTok e YouTube.</p>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full pl-6 md:pl-[calc((100vw-80rem)/2)]"
      >
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pr-6 [&::-webkit-scrollbar]:hidden">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[400px] rounded-2xl overflow-hidden border border-zinc-800"
            >
              <img 
                src={img} 
                alt={`Trabalho Concluído ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}