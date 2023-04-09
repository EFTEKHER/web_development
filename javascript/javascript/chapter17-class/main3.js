class pizza {
    constructor(pizzaSize) {
    
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
   
  }
  
  
  class SpecialityPizza extends pizza{
    constructor(pizzaSize)
    {
        super(pizzaSize);
        this.type="That works";
    }
    slice()
    {
        console.log(`our ${this.type} ${this.size} pizza has 8 slices`);
    }
  }

  const mySpeciality=new SpecialityPizza("medium");
  mySpeciality.slice();