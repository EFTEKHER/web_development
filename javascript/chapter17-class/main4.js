// class pizza {
//     constructor(pizzaSize) {
    
//       this._size = pizzaSize;
//       this._crust = "orginal";
//     }
//   get pizzaCrust(){
//       return this._crust;
  
//   }
//   set pizzaCrust(pizzaCrust)
//   {
//       this._crust=pizzaCrust;
//   }
   
//   }

//Factory functions

function pizzaFactory(pizzasize)
{
    const crust="orginal";
    const size=pizzasize;

    return{
        bake:()=> console.log(`Baking ${size} ${crust}  crust pizza`)
    }
}

const myPizza =pizzaFactory("Small");
myPizza.bake();