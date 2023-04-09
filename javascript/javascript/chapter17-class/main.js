class pizza {
  constructor(pizzaType,pizzaSize) {
    this.type=pizzaType;
    this.size = pizzaSize;
    this.crust = "orginal";
  }
get pizzaCrust(){
    return this.crust;

}
set pizzaCrust(pizzaCrust)
{
    this.crust=pizzaCrust;
}
  bake() {
    console.log(`Baking ${this.size} ${this.crust} ${this.type} crust pizza`);
  }
}


const myPizza=new pizza("pepperoni","small");
myPizza.bake();
myPizza.pizzaCrust="thin";
myPizza.bake();

console.log(myPizza.type);