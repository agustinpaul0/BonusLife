import { Instagram } from "lucide-react";
import { FadeInSection } from "./FadeInSection";
import { Button } from "../Button";

export const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-linear-to-br from-emerald-600 via-green-600 to-emerald-700 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeInSection>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Tu mejor versión <br className="hidden sm:block" />empieza hoy.
          </h2>
          <p className="text-emerald-50 text-xl mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Únete a la comunidad Bonus Life y recibe asesoramiento personalizado sobre qué suplementos son ideales para tu objetivo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="white" onClick={() => window.open('https://instagram.com/bonus.lifes_', '_blank')}>
              <Instagram className="w-5 h-5" strokeWidth={2.5} />
              Seguir en Instagram
            </Button>
            <a href="#products" className="px-8 py-4 rounded-xl font-bold border-2 border-white text-white hover:bg-white/10 transition-all text-base hover:scale-105 active:scale-95 shadow-lg">
              Ver Productos
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};