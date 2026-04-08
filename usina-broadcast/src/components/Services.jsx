import { motion } from 'framer-motion';
import { Video, Mic, Camera } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Transmissões ao Vivo",
      description: "Estabilidade técnica e qualidade de imagem impecável para sua live, seja no YouTube, Instagram ou plataformas privadas.",
      icon: <Video size={32} className="text-[#4ade80]" />
    },
    {
      title: "Gravação de Podcasts",
      description: "Estúdios preparados com iluminação profissional, múltiplas câmeras e captação de áudio de alta fidelidade.",
      icon: <Mic size={32} className="text-[#4ade80]" />
    },
    {
      title: "Cobertura de Eventos",
      description: "Do início ao fim, registramos a energia do seu evento corporativo, feira ou expedição com dinamismo e agilidade.",
      icon: <Camera size={32} className="text-[#4ade80]" />
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-[#0a0a0a] text-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Nossos <span className="text-[#4ade80]">Serviços</span>
          </h2>
          <p className="text-lg text-[#f5f5f5]/70 max-w-2xl mx-auto">
            Soluções audiovisuais completas para elevar a comunicação da sua marca ao nível máximo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              whileHover={{ y: -10, borderColor: "rgba(74, 222, 128, 0.4)" }}
              className="bg-[#1a1a1a] p-8 rounded-xl border border-white/5 transition-colors duration-300"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-lg inline-block">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-[#f5f5f5]/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}