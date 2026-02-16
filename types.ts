
export interface Template {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export enum NavLink {
  HOME = 'home',
  SERVICES = 'services',
  TEMPLATES = 'templates',
  PRICING = 'pricing',
  CONTACT = 'contact'
}
