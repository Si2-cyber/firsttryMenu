import { Category, MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Burgers
  {
    id: 'b1',
    name: 'Zinger',
    price: 180,
    category: Category.BURGER,
    image: 'https://picsum.photos/id/163/400/300',
    description: 'Crispy fried chicken fillet topped with spicy mayo and lettuce.'
  },
  {
    id: 'b2',
    name: 'Double Decker',
    price: 250,
    category: Category.BURGER,
    image: 'https://picsum.photos/id/292/400/300',
    description: 'Two juicy patties stacked high with double cheese and secret sauce.'
  },
  {
    id: 'b3',
    name: 'Mexican Chicken',
    price: 250,
    category: Category.BURGER,
    image: 'https://picsum.photos/id/835/400/300',
    description: 'Grilled chicken with jalapeños, salsa, and spicy nacho cheese.'
  },
  {
    id: 'b4',
    name: 'Grilled Beef',
    price: 350,
    category: Category.BURGER,
    image: 'https://picsum.photos/id/488/400/300',
    description: 'Premium flame-grilled beef patty with caramelized onions and BBQ sauce.'
  },

  // Pizza
  {
    id: 'p1',
    name: 'Pizza Paratha',
    price: 350,
    category: Category.PIZZA,
    image: 'https://picsum.photos/id/365/400/300',
    description: 'A fusion delight: Crispy paratha base topped with pizza cheese and veggies.'
  },
  {
    id: 'p2',
    name: 'Pizza Shawarma',
    price: 550,
    category: Category.PIZZA,
    image: 'https://picsum.photos/id/431/400/300',
    description: 'Loaded with savory shawarma chicken strips and garlic mayo drizzle.'
  },
  {
    id: 'p3',
    name: 'Pizza Burger',
    price: 750,
    category: Category.PIZZA,
    image: 'https://picsum.photos/id/824/400/300',
    description: 'The best of both worlds: Burger patty inside, pizza toppings outside.'
  },
  {
    id: 'p4',
    name: 'Pizza Sandwich',
    price: 950,
    category: Category.PIZZA,
    image: 'https://picsum.photos/id/1080/400/300',
    description: 'Layers of bread, cheese, pepperoni, and sauce baked to perfection.'
  },

  // Sandwich
  {
    id: 's1',
    name: 'BBQ Sandwich',
    price: 300,
    category: Category.SANDWICH,
    image: 'https://picsum.photos/id/493/400/300',
    description: 'Smoky BBQ chicken with fresh cucumbers and tomatoes.'
  },
  {
    id: 's2',
    name: 'Salsa Sandwich',
    price: 450,
    category: Category.SANDWICH,
    image: 'https://picsum.photos/id/999/400/300',
    description: 'Zesty salsa mix with grilled chicken and cheddar cheese.'
  },
  {
    id: 's3',
    name: 'Chicken Tikka',
    price: 500,
    category: Category.SANDWICH,
    image: 'https://picsum.photos/id/225/400/300',
    description: 'Spicy tikka chunks, onions, and mint chutney in toasted bread.'
  },
  {
    id: 's4',
    name: 'Chicken Fajita',
    price: 650,
    category: Category.SANDWICH,
    image: 'https://picsum.photos/id/491/400/300',
    description: 'Sizzling fajita spiced chicken with capsicum and onions.'
  },
];