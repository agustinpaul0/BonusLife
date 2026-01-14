import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Dumbbell, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-gray-200/50 py-3' : 'bg-white/80 backdrop-blur-sm py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 font-black text-2xl text-gray-900 tracking-tight">
          <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
            <Dumbbell size={22} strokeWidth={2.5} />
          </div>
          <span className="bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">BONUS</span>
          <span className="bg-linear-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">LIFE</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-700 font-semibold">
          <a href="#products" className="hover:text-emerald-600 transition-colors">Productos</a>
          <a href="#benefits" className="hover:text-emerald-600 transition-colors">Beneficios</a>
          <a href="#contact" className="hover:text-emerald-600 transition-colors">Contacto</a>
          <Button variant="primary" className="py-3! px-6! text-sm">
            Ver Catálogo
          </Button>
        </div>

        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 border-t border-gray-100">
          <a href="#products" className="text-gray-700 py-2 font-semibold" onClick={() => setIsOpen(false)}>Productos</a>
          <a href="#benefits" className="text-gray-700 py-2 font-semibold" onClick={() => setIsOpen(false)}>Beneficios</a>
          <a href="#contact" className="text-gray-700 py-2 font-semibold" onClick={() => setIsOpen(false)}>Contacto</a>
          <Button variant="primary" className="w-full">Ver Catálogo</Button>
        </div>
      )}
    </nav>
  );
};