import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      
      <div className="absolute inset-0 z-10 bg-black/60"></div>
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

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
        >
          Nós materializamos a <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">sua história.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl font-medium leading-relaxed"
        >
          Do extremo do off-road à precisão dos palcos corporativos. Entregamos cinematografia, transmissões ao vivo e excelência visual.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <a 
            href="#portfolio" 
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#4ade80] text-[#0a0a0a] font-bold text-lg rounded-full hover:bg-[#3bcf71] transition-all duration-300 hover:scale-105 shadow-[0_0_40px_-10px_rgba(74,222,128,0.4)]"
          >
            <span>Explorar Produções</span>
            <span className="transform transition-transform duration-300 group-hover:translate-y-1 text-xl">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}