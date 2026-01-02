// Shop types
export interface Shop {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode?: string | null;
  latitude: number;
  longitude: number;
  phone?: string | null;
  website?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  averageRating: number;
  totalRatings: number;
}

export interface ShopDetail extends Shop {
  drinks: DrinkWithRatings[];
  ratings: ShopRatingWithUser[];
}

// Drink types
export interface Drink {
  id: string;
  shopId: string;
  name: string;
  description?: string | null;
  price?: number | null;
  category?: string | null;
  imageUrl?: string | null;
}

export interface DrinkWithRatings extends Drink {
  averageRating: number;
  totalRatings: number;
  toppings: DrinkTopping[];
}

// Topping types
export interface Topping {
  id: string;
  name: string;
  description?: string | null;
}

export interface DrinkTopping {
  drinkId: string;
  toppingId: string;
  topping: Topping;
}

// Rating types
export interface ShopRating {
  id: string;
  userId: string;
  shopId: string;
  rating: number;
  review?: string | null;
  serviceRating?: number | null;
  ambianceRating?: number | null;
  valueRating?: number | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface ShopRatingWithUser extends ShopRating {
  user: {
    name: string | null;
    image: string | null;
  };
}

export interface DrinkRating {
  id: string;
  userId: string;
  drinkId: string;
  rating: number;
  review?: string | null;
  sweetnessLevel?: number | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

// User types
export interface User {
  id: string;
  email: string;
  name?: string | null;
  image?: string | null;
}