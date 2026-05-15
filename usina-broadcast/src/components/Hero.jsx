import { motion } from 'framer-motion';
import bgVideo from '../assets/video-fundo.mp4';
import heroPoster from '../assets/hero.png';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto"
        poster={heroPoster}
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload noplaybackrate nofullscreen"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 transition-opacity duration-1000"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/60 to-[#0a0a0a]"></div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full z-10 pointer-events-none"></div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg"
        >
          Nós materializamos a <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">sua história.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="text-lg md:text-xl text-zinc-300 mb-12 max-w-2xl font-medium leading-relaxed drop-shadow-md"
        >
          Do extremo do off-road à precisão dos palcos corporativos. Entregamos cinematografia, transmissões ao vivo e excelência visual.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <a 
            href="#portfolio" 
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#4ade80] text-black font-bold text-sm md:text-base uppercase tracking-widest rounded-full hover:bg-[#3bcf71] transition-all duration-300 hover:scale-105 shadow-[0_0_30px_-5px_rgba(74,222,128,0.3)]"
          >
            <span>Explorar Produções</span>
            <span className="transform transition-transform duration-300 group-hover:translate-y-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}