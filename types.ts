
export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags?: string[];
  image?: string;
  popular?: boolean;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
  image?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}
