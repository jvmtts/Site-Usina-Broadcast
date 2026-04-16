import { motion } from 'framer-motion';

export default function Contact() {
  const numeroChefe = "5511964467000";
  const mensagemWpp = "Olá! Acessei o site da Usina Broadcast e gostaria de conversar sobre um projeto.";
  const linkWhatsapp = `https://wa.me/${numeroChefe}?text=${encodeURIComponent(mensagemWpp)}`;

  const contacts = [
    {
      name: 'WhatsApp',
      description: 'Atendimento comercial rápido',
      link: linkWhatsapp,
      color: 'hover:border-green-500 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]',
      icon: (
        <svg className="w-8 h-8 mb-4 text-zinc-300 group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      )
    },
    {
      name: 'E-mail',
      description: 'Propostas e briefings detalhados',
      link: 'mailto:contato@usinabroadcast.com',
      color: 'hover:border-zinc-300 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]',
      icon: (
        <svg className="w-8 h-8 mb-4 text-zinc-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      description: 'Acompanhe nossos bastidores',
      link: 'https://instagram.com/usinabroadcast',
      color: 'hover:border-pink-500 hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]',
      icon: (
        <svg className="w-8 h-8 mb-4 text-zinc-300 group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contato" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#4ade80] text-sm font-bold uppercase tracking-widest block mb-4">
            Vamos Conversar
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            O próximo nível do seu <br className="hidden md:block"/> audiovisual começa <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">aqui.</span>
          </h2>
          <p className="text-lg text-zinc-400 font-medium max-w-xl mx-auto">
            Sem burocracia. Escolha o canal de sua preferência e fale diretamente com quem resolve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 200 }}
              className={`group flex flex-col items-center justify-center p-10 rounded-3xl bg-zinc-900/50 backdrop-blur-sm border-2 border-zinc-800/50 transition-all duration-500 cursor-pointer ${contact.color}`}
            >
              {contact.icon}
              <h3 className="font-display text-xl font-bold text-white mb-2">{contact.name}</h3>
              <p className="text-sm text-zinc-500 text-center font-medium">{contact.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}