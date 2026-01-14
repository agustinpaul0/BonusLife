import { ArrowRight, Star, Zap } from "lucide-react";
import { FadeInSection } from "./FadeInSection";
import { Button } from "../Button";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-linear-to-br from-gray-50 via-white to-emerald-50/30">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <FadeInSection>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 text-emerald-700 text-sm font-bold">
              <Star className="w-4 h-4 fill-current" />
              Nutrición Deportiva Premium
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1]">
              Transforma tu <br />
              <span className="bg-linear-to-r from-emerald-500 via-green-600 to-emerald-700 bg-clip-text text-transparent">
                Rendimiento
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-md leading-relaxed font-medium">
              Alcanza tu máximo potencial con suplementos diseñados para atletas exigentes. Creatina, proteína y energía pura para tu día a día.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary">
                Comprar Ahora <ArrowRight size={20} strokeWidth={2.5} />
              </Button>
              <Button variant="outline">
                Conocer Más
              </Button>
            </div>
            
            <div className="pt-8 flex items-center gap-4 text-sm text-gray-600 font-semibold">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-400 to-green-500 border-2 border-white shadow-md" />
                ))}
              </div>
              <p>+1000 atletas confían en nosotros</p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000" 
                alt="Atleta entrenando" 
                className="w-full h-125 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4">
              <div className="w-14 h-14 bg-linear-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                <Zap fill="currentColor" size={28} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wide">Energía</p>
                <p className="font-black text-gray-900 text-lg">100% Garantizada</p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};