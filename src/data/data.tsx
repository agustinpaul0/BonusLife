import { 
  Zap, 
  ShieldCheck, 
  Truck, 
} from 'lucide-react';
import type { Feature, Product } from "../types/types";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Creatina Monohidratada",
    benefit: "Potencia Explosiva",
    description: "Maximiza tu fuerza y rendimiento en cada repetición.",
    price: "$25.000",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Whey Protein Isolate",
    benefit: "Recuperación Muscular",
    description: "Proteína pura para reparar tejidos post-entrenamiento.",
    price: "$45.000",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Citrato de Magnesio",
    benefit: "Equilibrio y Descanso",
    description: "Mejora el sueño y reduce la fatiga muscular crónica.",
    price: "$18.000",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Pre-Workout Energy",
    benefit: "Energía Sostenida",
    description: "El impulso necesario para romper tus propios récords.",
    price: "$32.000",
    image: "https://images.unsplash.com/photo-1623874106686-5be2b325c8f1?auto=format&fit=crop&q=80&w=800"
  }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Calidad Premium",
    description: "Ingredientes seleccionados rigurosamente para máxima pureza.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Envíos Rápidos",
    description: "Recibe tus suplementos en tiempo récord en todo el país.",
    icon: <Truck className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Resultados Reales",
    description: "Fórmulas avaladas por ciencia y atletas de alto rendimiento.",
    icon: <Zap className="w-6 h-6" />
  }
];