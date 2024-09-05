// src/app/pizza.model.ts
export interface PizzaSize {
    size: string;  // e.g., 'Small', 'Medium', 'Large', 'Extra Large'
    price: number; // Price of the pizza size
  }
  
  export interface Topping {
    name: string;  // e.g., 'Tomatoes', 'Onions', 'Pepperoni'
    price: number; // Price of the topping
  }
  
  export interface Offer {
    name: string;         // Name of the offer
    description: string;  // Description of the offer
    price: number;        // Price of the offer
  }
  