import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-10 bg-black/50"></div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow z-10"></div>

      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="" type="video/mp4" />
      </video>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Elevando o nível do seu <span className="text-[#4ade80]">audiovisual.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-[#f5f5f5]/80 mb-10 max-w-2xl font-medium"
        >
          Produtora especializada em transmissões ao vivo, gravação de podcasts e cobertura de eventos com qualidade de cinema.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#4ade80] text-[#0a0a0a] font-bold rounded-full hover:bg-[#3bcf71] transition-all hover:scale-105 shadow-lg shadow-green-500/20 flex items-center justify-center"
          >
            Solicitar Orçamento
          </a>
          <a 
            href="#servicos" 
            className="px-10 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center"
          >
            Conhecer Serviços
          </a>
        </motion.div>
      </div>
    </section>
  );
}