import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "../../data/data";
import { FadeInSection } from "./FadeInSection";

export const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">Nuestros Esenciales</h2>
          <p className="text-lg text-gray-600 font-medium">Todo lo que necesitas para llevar tu entrenamiento al siguiente nivel, sin rellenos innecesarios.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <FadeInSection key={product.id} delay={index * 100}>
              <div className="group bg-linear-to-br from-gray-50 to-white rounded-3xl p-6 shadow-md hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 border border-gray-200 hover:border-emerald-500/30 h-full flex flex-col">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square mb-5">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-3 py-2 rounded-xl text-sm font-black text-gray-900 shadow-lg">
                    {product.price}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-emerald-600 text-xs font-black uppercase tracking-wider mb-2">{product.benefit}</p>
                  <h3 className="text-xl font-black text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed font-medium">{product.description}</p>
                </div>
                <button className="w-full py-3 rounded-xl bg-linear-to-r from-gray-100 to-gray-50 text-gray-900 font-bold hover:from-emerald-500 hover:to-green-600 hover:text-white transition-all flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow-lg hover:shadow-emerald-500/30">
                  Ver Detalles <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
                </button>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};
