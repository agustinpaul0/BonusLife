import { FEATURES } from "../../data/data";
import { FadeInSection } from "./FadeInSection";

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-linear-to-br from-gray-50 to-emerald-50/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500 to-green-600 rounded-3xl rotate-3 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=800"
                alt="Gym Lifestyle"
                className="relative rounded-3xl shadow-2xl shadow-emerald-500/20 w-full object-cover h-125"
              />
            </div>
          </FadeInSection>
          
          <div className="space-y-8">
            <FadeInSection delay={200}>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                ¿Por qué elegir <span className="bg-linear-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">Bonus Life</span>?
              </h2>
              <p className="text-lg text-gray-600 mt-4 font-medium leading-relaxed">
                No vendemos milagros, vendemos ciencia aplicada al deporte. Nuestro compromiso es tu evolución constante.
              </p>
            </FadeInSection>

            <div className="space-y-6 mt-8">
              {FEATURES.map((feature, idx) => (
                <FadeInSection key={feature.id} delay={300 + (idx * 100)}>
                  <div className="flex gap-5 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="shrink-0 w-14 h-14 bg-linear-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 text-lg mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed font-medium">{feature.description}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
