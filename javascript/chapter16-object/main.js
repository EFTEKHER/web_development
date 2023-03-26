//objects

//key -value pairs in curly brackets

const myObj={name:"Efte"};
console.log(myObj);
console.log(myObj.name);

const anotherObject={
    alive:true,
    answer:42,
    hobbies:["Eat","sleep","code"], 
    beverage:{
        morning:"coffee",
        afternoon:"Iced Tea",
    },
    action:function(){
        return `Time for ${this.beverage.morning}`;
    }
}

console.log(anotherObject.hobbies[1]);

console.log(anotherObject.beverage.morning);

console.log(anotherObject);

console.log(anotherObject.action());


const vehicle={
    wheels:4, 
    engine:function(){
        return "Vrrooom!";
    }
}

const truck=Object.create(vehicle);
truck.doors=2;

console.log(truck);

console.log(truck.wheels);

console.log(truck.engine());


const car=Object.create(vehicle);
car.doors=4;

car.engine=function()
{
    return "Whooooosh!";
}

console.log(car.engine());

console.log(car.wheels);


const tesla=Object.create(car);

console.log(tesla.wheels);

console.log(tesla.engine());

tesla.engine=function()
{
    return "shhhh...";

}

console.log(tesla.engine());