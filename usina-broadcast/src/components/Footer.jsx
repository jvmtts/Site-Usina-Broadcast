import logoUsina from '../assets/UsinaBroadcastLogo.png';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <div className="opacity-80 hover:opacity-100 transition-opacity">
          <img 
            src={logoUsina} 
            alt="Logo Usina Broadcast" 
            className="h-12 w-auto object-contain" 
          />
        </div>
        
        <nav>
          <ul className="flex gap-6 text-zinc-500 text-sm">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#sobre" className="hover:text-white transition">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-white transition">Serviços</a></li>
            <li><a href="#contato" className="hover:text-white transition">Contato</a></li>
          </ul>
        </nav>

        <div className="text-zinc-600 text-[10px] tracking-widest uppercase">
          © 2026 Usina Broadcast. Elevando o nível do seu audiovisual.
        </div>
      </div>
    </footer>
  );
}