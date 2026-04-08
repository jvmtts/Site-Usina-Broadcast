import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#0a0a0a] text-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Nossa <span className="text-[#4ade80]">Usina.</span>
            </h2>
            <p className="text-lg text-[#f5f5f5]/80 mb-6 leading-relaxed">
              Transformamos ideias em experiências audiovisuais de alto impacto. Somos uma produtora focada em entregar qualidade de cinema para o seu projeto, seja ele um podcast, uma transmissão ao vivo ou a cobertura de um grande evento.
            </p>
            <p className="text-lg text-[#f5f5f5]/80 leading-relaxed">
              Trabalhamos com equipamentos de ponta e uma equipe especializada para garantir que cada frame e cada segundo de áudio transmitam exatamente a energia da sua marca.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-full aspect-video bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/10 flex items-center justify-center"
          >
            <span className="text-white/30 font-medium tracking-widest uppercase">
              [ Imagem de Teste ]
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}