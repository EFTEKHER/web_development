class pizza {
    constructor(pizzaType,pizzaSize) {
      this.type=pizzaType;
      this.size = pizzaSize;
      this.crust = "orginal";
      this.toppings=[];
    }
  getCrust(){
      return this.crust;
  
  }
  setCrust(pizzaCrust)
  {
      this.crust=pizzaCrust;
  }
    bake() {
      console.log(`Baking ${this.size} ${this.crust} ${this.type} crust pizza`);
    }

    getToppings(){
        return this.toppings;

    }
    setToppings(topping){
        this.toppings.push(topping);
    }

  }
  
  
  const myPizza=new pizza("pepperoni","small");
  myPizza.setCrust("thin");
  myPizza.bake()
  console.log(myPizza.type);
  console.log(myPizza.getCrust());

  myPizza.setToppings("suasages");
  myPizza.setToppings("olives");
  console.log(myPizza.getToppings());