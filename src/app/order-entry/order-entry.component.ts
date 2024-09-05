import { Component } from '@angular/core';
import { PizzaSize, Topping, Offer } from '../pizza.model';


@Component({
  selector: 'app-order-entry',
  templateUrl: './order-entry.component.html',
  styleUrls: ['./order-entry.component.css']
})
export class OrderEntryComponent {
  // List of pizza sizes with their prices
  sizes: { [key: string]: number } = {
    small: 5,
    medium: 7,
    large: 8,
    extraLarge: 9
  };

  // List of vegetarian toppings with their prices
  vegToppings: { [key: string]: number } = {
    tomatoes: 1.00,
    onions: 0.50,
    bellPepper: 1.00,
    mushrooms: 1.20,
    pineapple: 0.75
  };

  // List of non-vegetarian toppings with their prices
  nonVegToppings: { [key: string]: number } = {
    sausage: 1.00,
    pepperoni: 2.00,
    barbecueChicken: 3.00
  };

  // Currently selected pizza size
  selectedSize: string = '';

  // List of selected vegetarian toppings
  selectedVegToppings: string[] = [];

  // List of selected non-vegetarian toppings
  selectedNonVegToppings: string[] = [];

  // Total price of the pizza order
  total: number = 0;

  // Current promotional offer
  offer: string = '';

  // Handles changes in selected vegetarian toppings
  onVegToppingChange(event: any) {
    const topping = event.target.value;

    // Add topping if checked, or remove if unchecked
    if (event.target.checked) {
      this.selectedVegToppings.push(topping);
      console.log(`Added vegetarian topping: ${topping}`);
    } else {
      this.selectedVegToppings = this.selectedVegToppings.filter(item => item !== topping);
      console.log(`Removed vegetarian topping: ${topping}`);
    }

    // Recalculate total price after topping change
    this.calculateTotal();
  }

  // Handles changes in selected non-vegetarian toppings
  onNonVegToppingChange(event: any) {
    const topping = event.target.value;

    // Add topping if checked, or remove if unchecked
    if (event.target.checked) {
      this.selectedNonVegToppings.push(topping);
      console.log(`Added non-vegetarian topping: ${topping}`);
    } else {
      this.selectedNonVegToppings = this.selectedNonVegToppings.filter(item => item !== topping);
      console.log(`Removed non-vegetarian topping: ${topping}`);
    }

    // Recalculate total price after topping change
    this.calculateTotal();
  }

  // Calculates the total price based on size, toppings, and offers
  calculateTotal() {
    // Get the price for the selected size
    let basePrice = this.sizes[this.selectedSize] || 0;
    let toppingCost = 0;

    // Add up the cost of selected vegetarian toppings
    for (const topping of this.selectedVegToppings) {
      toppingCost += this.vegToppings[topping] || 0;
    }

    // Add up the cost of selected non-vegetarian toppings
    for (const topping of this.selectedNonVegToppings) {
      toppingCost += this.nonVegToppings[topping] || 0;
    }

    // Calculate the total price
    this.total = basePrice + toppingCost;
    console.log(`Base Price: ${basePrice}, Topping Cost: ${toppingCost}, Total: ${this.total}`);

    // Apply special offers to the total price if applicable
    if (this.offer === 'Offer1' && this.selectedSize === 'medium' && this.selectedVegToppings.length === 2) {
      this.total = 5;
      console.log('Offer1 applied. New Total: 5');
    } else if (this.offer === 'Offer2' && this.selectedSize === 'medium' && this.selectedVegToppings.length >= 4) {
      this.total = 9;
      console.log('Offer2 applied. New Total: 9');
    } else if (this.offer === 'Offer3' && this.selectedSize === 'large' && this.selectedVegToppings.length >= 4) {
      let discount = 0.5;
      this.total = (basePrice + toppingCost) * (1 - discount);
      console.log('Offer3 applied. Discount: 50%, New Total:', this.total);
    }
  }

}

