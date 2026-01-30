export const navItems = [
  { name: "Women", href: "#" },
  { name: "Women", href: "#" },
  { name: "Women", href: "#" },
  { name: "Women", href: "#" },
  { name: "Women", href: "#" },
  { name: "Women", href: "#" },
];

export const rightNavItems = [
  { src: "/Heart.svg", alt: "Heart", href: "#" },
  { src: "/Cart.svg", alt: "Cart", href: "#" },
  { src: "/User.svg", alt: "Account", href: "#" },
];

export const FOOTER_TEXT = "© 2023 Javaria. All rights reserved.";

export interface Product {
  id: string;
  name: string;
  price: number;
  reviewCount: number;
  rating: number;
  isDiscounted: boolean;
  salePrice?: number;
  image: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface UserData {
  likedItems: string[]; // List of product IDs
  cartItems: { productId: string; quantity: number }[];
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "HAVIT HV-G92 Gamepad",
    price: 29.99,
    reviewCount: 120,
    rating: 4.5,
    isDiscounted: false,
    isNew: true,
    image: "/products/Shoe1.svg",
  },
  {
    id: "2",
    name: "Denim Jacket",
    price: 89.99,
    reviewCount: 85,
    rating: 4.8,
    isDiscounted: true,
    image: "/products/Shoe2.svg",
  },
  {
    id: "3",
    name: "Summer Floral Dress",
    price: 59.99,
    reviewCount: 200,
    rating: 4.2,
    isDiscounted: false,
    image: "/products/Shoe3.svg",
  },
  {
    id: "4",
    name: "Leather Boots",
    price: 120.0,
    reviewCount: 45,
    rating: 4.7,
    isDiscounted: true,
    image: "/products/Shoe4.svg",
  },
  {
    id: "5",
    name: "Running Shoes",
    price: 75.5,
    reviewCount: 310,
    rating: 4.6,
    isDiscounted: false,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "6",
    name: "Sunglasses",
    price: 15.0,
    reviewCount: 50,
    rating: 4.0,
    isDiscounted: false,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "7",
    name: "Winter Scarf",
    price: 25.0,
    reviewCount: 90,
    rating: 4.9,
    isDiscounted: true,
    image:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "8",
    name: "Backpack",
    price: 45.99,
    reviewCount: 150,
    rating: 4.4,
    isDiscounted: false,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];
