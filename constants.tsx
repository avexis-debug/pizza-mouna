
import { MenuCategory, Testimonial } from './types';

export const COLORS = {
  primary: '#FF5E3A', // Orange-rouge
  secondary: '#1A3C34', // Vert Sombre
  background: '#FAF9F6', // Off-white
};

export const CONTACT_INFO = {
  address: "Chaussée de Chimay 12, à Beaumont",
  phone1: "071 32 78 74",
  phone2: "0484 20 20 42",
  facebook: "Pizzeria la Mouna"
};

export const PIZZA_MENU: MenuCategory = {
  title: 'Les Pizzas',
  image: '/Pizza.jpg',
  items: [
    { name: 'Margarita', description: 'Tomate, mozzarella', price: '10,00 €', popular: true },
    { name: 'Prosciuto', description: 'Tomate, mozzarella, jambon', price: '11,00 €' },
    { name: 'Bianca', description: 'Tomate fraîche, mozzarella, roquette, ail', price: '11,00 €' },
    { name: 'Rimini', description: 'Tomate, mozzarella, jambon, champignon', price: '11,00 €' },
    { name: 'Piemontaise', description: 'Tomate, mozzarella, jambon, oignon', price: '11,00 €' },
    { name: 'Veneziana', description: 'Tomate, mozzarella, champignon', price: '11,00 €' },
    { name: 'Napolitaine', description: 'Tomate, mozzarella, olives, câpres, anchois', price: '11,00 €' },
    { name: 'Diavolo', description: 'Tomate, mozzarella, jambon, anchois', price: '12,00 €', popular: true },
    { name: 'Salami', description: 'Tomate, mozzarella, salami piquant', price: '11,00 €' },
    { name: 'Thon', description: 'Tomate, mozzarella, thon, oignons', price: '12,00 €' },
    { name: '4 Saisons', description: 'Tomate, mozzarella, jambon, artichauts, champignons, olives', price: '12,00 €', popular: true },
    { name: 'Sicilienne', description: 'Tomate, mozzarella, poivrons, olives, câpres, anchois', price: '12,00 €' },
    { name: 'Végétarienne', description: 'Tomate, mozzarella, artichauts, olives, champignons, poivrons', price: '12,00 €' },
    { name: 'Hawai', description: 'Tomate, mozzarella, jambon, ananas', price: '12,00 €' },
    { name: 'Lardiere', description: 'Tomate, mozzarella, lardons, oignons', price: '12,00 €' },
    { name: '4 Fromages', description: 'Tomate, mozzarella, taleggio, parmesan, gorgonzola', price: '12,00 €', popular: true },
    { name: 'Merguez', description: 'Tomate, mozzarella, merguez, oignons', price: '12,00 €' },
    { name: 'Maison', description: 'Tomate, mozzarella, aubergine, scampis', price: '14,00 €', popular: true },
    { name: 'Gyros', description: 'Tomate, mozzarella, poulet mariné', price: '14,00 €', popular: true },
    { name: 'Miami', description: 'Tomate, mozzarella, aubergine, salami, œuf, parmesan', price: '14,00 €' },
    { name: 'Spéciale', description: 'Crème, mozzarella, feta, poulet, lardons', price: '14,00 €' },
    { name: 'Ritta', description: 'Crème, mozzarella, tomate fraîche, aubergines, parmesan', price: '14,00 €' },
    { name: 'Savoyarde', description: 'Base crème, lardon, pomme de terre, fromage raclette', price: '15,00 €', popular: true },
    { name: 'Barbecue', description: 'Tomate, mozzarella, viande hachée, merguez, sauce barbecue', price: '14,00 €' },
    { name: '6 Fromages', description: 'Tomate, mozzarella, gorgonzola, taleggio, parmesan, chèvre, raclette', price: '15,00 €' },
    { name: 'Pita', description: 'Crème, mozzarella, oignons, viande pita, sauce pita, feta', price: '15,00 €' },
    { name: 'Océane', description: 'Tomate, mozzarella, scampi, fruits de mer, anchois, ail', price: '15,00 €' },
    { name: 'Raclette', description: 'Tomate, mozzarella, merguez, bœuf haché, salami, jambon', price: '15,00 €' },
    { name: 'Royale', description: 'Tomate, mozzarella, merguez, bœuf haché, salami, jambon', price: '15,00 €' },
    { name: 'Parme', description: 'Tomate, mozzarella, champignons, jambon de parme, roquette, parmesan', price: '15,00 €' },
    { name: 'Roi Soleil', description: 'Tomate, mozzarella, saumon, tomate fraîche, chèvre, parmesan', price: '16,00 €' },
    { name: 'Felece', description: 'Base crème, scampis, saumon, tomate fraîche, gorgonzola', price: '16,00 €' },
    { name: 'Cannibale', description: 'Tomate, mozzarella, jambon, salami, lardons, merguez, haché de bœuf', price: '17,00 €' },
    { name: 'Burrata', description: 'Tomate, mozzarella, burrata, roquette, parmesan, ail', price: '18,00 €', popular: true },
    { name: 'Jadot', description: 'Tomate, Mozarella, Salami, Jambon, Lardons, Haché, Merguez, Burrata, Roquette, Ail', price: '20,00 €' },
    { name: 'Rim', description: 'Tomate, Mozarella, Salami, Parma, Merguez, Gorgonzola', price: '15,00 €' },
  ]
};

export const ENTREE_MENU: MenuCategory = {
  title: 'Les Entrées',
  image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop',
  items: [
    { name: "Scampi à l'ail", description: "", price: "9,00 €" },
    { name: "Scampi Diavola", description: "", price: "9,00 €" },
    { name: "Croquettes de Mozzarella", description: "", price: "9,00 €" },
    { name: "Scampi Gorgonzola", description: "", price: "9,00 €" },
  ]
};

export const PASTA_MENU: MenuCategory = {
  title: 'Les Pastas',
  image: '/Pates.jpg',
  items: [
    { name: 'Napoli', description: '', price: '10,00 €' },
    { name: 'Arrabiatta', description: '', price: '10,00 €' },
    { name: "A l'Ail", description: '', price: '10,00 €' },
    { name: 'Thon', description: '', price: '10,00 €' },
    { name: 'Casa', description: '', price: '11,00 €' },
    { name: 'Jambon Crème', description: '', price: '11,00 €' },
    { name: 'Carbonara', description: '', price: '11,00 €' },
    { name: 'Tortellini Jambon Crème', description: '', price: '12,00 €' },
    { name: 'Bolognaise', description: '', price: '11,00 €' },
    { name: 'Molisana', description: '', price: '12,00 €' },
    { name: '4 Fromages', description: '', price: '12,00 €' },
    { name: 'Fruits de Mer', description: '', price: '13,00 €' },
    { name: 'Chicken', description: '', price: '12,00 €' },
    { name: 'Saumon', description: '', price: '13,00 €' },
    { name: 'Scampi', description: '', price: '13,00 €' },
  ]
};

export const PREPARED_MENU: MenuCategory = {
  title: 'Les Plats Préparés',
  image: '/Pates.jpg',
  items: [
    { name: 'Cannelloni à la Viande', description: '', price: '12,00 €' },
    { name: 'Lasagne Bolognaise', description: '', price: '12,00 €' },
    { name: 'Ravioli Ricotta Epinards', description: '', price: '12,00 €' },
    { name: 'Trio de Pâtes', description: '', price: '14,00 €' },
    { name: 'Festival de Pâtes', description: '', price: '16,00 €' },
  ]
};

export const MEAT_MENU: MenuCategory = {
  title: 'Les Viandes',
  image: '/Viande.jpg',
  items: [
    { name: 'Escalope Milanaise', description: '', price: '16,00 €' },
    { name: 'Escalope Archiduc', description: '', price: '16,00 €' },
    { name: 'Escalope Bolognaise', description: '', price: '17,00 €' },
    { name: 'Escalope Parmigiana', description: '', price: '17,00 €' },
    { name: 'Escalope Parme', description: '', price: '17,00 €' },
    { name: 'Escalope 4 Fromages', description: '', price: '17,00 €' },
  ]
};

export const DRINK_MENU: MenuCategory = {
  title: 'Les Boissons',
  image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop',
  items: [
    { name: 'Fanta, Coca, Ice Tea, Sprite, Tropico', description: '', price: '2,00 €' },
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Jean D.',
    role: 'Client Local',
    quote: "La meilleure pizza au feu de bois de la région ! Le service de livraison est rapide et les produits sont toujours frais.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  }
];

export const GALLERY_IMAGES = [
  '/Pizza.jpg',
  '/Pates.jpg',
  '/Viande.jpg',
  '/Pizza.jpg',
];
