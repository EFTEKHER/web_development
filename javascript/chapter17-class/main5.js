class Pizza {
  crust = "orginal";
  #sauce = "traditional";
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  getCrust() {
    return this.crust;
  }
  hereYouGo() {
    console.log(
      `Here's  your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`
    );
  }
}

const myPizza= new Pizza("large");

myPizza.hereYouGo();