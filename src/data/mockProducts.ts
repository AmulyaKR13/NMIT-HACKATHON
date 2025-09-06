export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  isWishlisted?: boolean;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Bamboo Water Bottle',
    description: 'Sustainable bamboo water bottle with stainless steel interior. Perfect for eco-conscious hydration.',
    price: 24.99,
    category: 'Drinkware',
    rating: 4.8,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    title: 'Organic Cotton Tote Bag',
    description: 'Handwoven organic cotton tote bag. Durable, stylish, and perfect for grocery shopping.',
    price: 18.50,
    category: 'Bags',
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    title: 'Solar Power Bank',
    description: 'Portable solar power bank with 20000mAh capacity. Charge your devices sustainably.',
    price: 45.99,
    category: 'Electronics',
    rating: 4.7,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    title: 'Beeswax Food Wraps',
    description: 'Reusable beeswax food wraps set. Replace plastic wrap with this natural alternative.',
    price: 16.75,
    category: 'Kitchen',
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop'
  },
  {
    id: '5',
    title: 'Recycled Notebook Set',
    description: 'Beautiful notebooks made from 100% recycled paper. Perfect for journaling and note-taking.',
    price: 12.99,
    category: 'Stationery',
    rating: 4.5,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=300&fit=crop'
  },
  {
    id: '6',
    title: 'Bamboo Cutlery Set',
    description: 'Portable bamboo cutlery set with carrying case. Say goodbye to single-use plastic utensils.',
    price: 22.00,
    category: 'Kitchen',
    rating: 4.8,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
  },
  {
    id: '7',
    title: 'Organic Hemp Backpack',
    description: 'Durable hemp backpack with laptop compartment. Sustainable travel companion.',
    price: 65.00,
    category: 'Bags',
    rating: 4.6,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop'
  },
  {
    id: '8',
    title: 'Eco-Friendly Cleaning Kit',
    description: 'Complete cleaning kit with biodegradable products and reusable containers.',
    price: 35.50,
    category: 'Home',
    rating: 4.7,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop'
  }
];

export const categories = [
  'All Categories',
  'Kitchen',
  'Bags', 
  'Electronics',
  'Drinkware',
  'Stationery',
  'Home'
];