export interface Product {
  id: number;
  name: string;
  benefit: string;
  description: string;
  image: string;
  price: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}