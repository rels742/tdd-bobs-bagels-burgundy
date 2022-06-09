const menu = require("./menu.js");
const smallBasket = 5;
const mediumBasket = 10;
const largeBasket = 15;

class Basket {
  constructor(capacity = smallBasket) {
    this.basket = [];
    this.basketSize = capacity;
  }
  getBasket() {
    return this.basket;
  }

  addItem(itemName, itemQuantity) {
    const fullMenu = menu.GetMenu();
    for (const items in fullMenu) {
      if (items === itemName) {
        this.basket.push({
          item: itemName,
          quantity: itemQuantity,
          price: fullMenu[items],
        });
      }
    }
    return this.basket;
  }

  removeItem(itemName) {
    for (let i = 0; i < this.basket.length; i++)
      if (this.basket[i].item === itemName) {
        this.basket.splice(i, 1);
        return this.basket;
      } else if (this.basket[i].item !== itemName)
        return "This item is not in the basket.";
  }

  basketCapacity() {
    const totalCapacity = this.basket.reduce((total, item) => {
      return (total += item.quantity);
    }, 0);
    if (totalCapacity > this.basketSize) {
      return "Basket full, Please choose a bigger basket.";
    }
  }

  priceChecker(itemName) {
    const fullMenu = menu.GetMenu();
    for (const items in fullMenu)
      if (itemName === items) {
        return fullMenu[items];
      }
  }

  basketTotal() {
    let totalPrice = 0;
    for (let i = 0; i < this.basket.length; i++) {
      const items = this.basket[i].quantity * this.basket[i].price;
      totalPrice += items;
    }

    return "£" + totalPrice;
  }
}

module.exports = Basket;
