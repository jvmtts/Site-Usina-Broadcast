import logoUsina from '../assets/UsinaBroadcastLogo.png';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="/" className="block group">
            <img 
              src={logoUsina} 
              alt="Logo Usina Broadcast" 
              className="h-16 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </a>
        </div>

        <nav>
          <ul className="flex items-center gap-10 text-[13px] font-medium text-zinc-300 uppercase tracking-wider">
            <li>
              <a href="#home" className="group relative py-2 transition hover:text-white">
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#sobre" className="group relative py-2 transition hover:text-white">
                Sobre Nós
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="group relative py-2 transition hover:text-white">
                Trabalhos
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#servicos" className="group relative py-2 transition hover:text-white flex items-center gap-1.5">
                Serviços 
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#contato" className="group relative py-2 transition hover:text-white">
                Contato
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}