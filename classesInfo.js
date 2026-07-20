// Function -> Uses the 'function' keyword because it is a standalone function.
function greet() {
    console.log("Hello");
}

// Method -> Belongs to an object, so the 'function' keyword is not required.
const person = {
    greet() {
        console.log("Hello");
    }
};

// The above method is shorthand for:
const person2 = {
    greet: function () {
        console.log("Hello");
    }
};

// Class methods also do not use the 'function' keyword.
class Student {
    greet() {
        console.log("Hello");
    }
}

// Summary:
// function -> Required for standalone functions.
// method -> No 'function' keyword needed (object/class functions).
// A method is simply a function that belongs to an object or class.
// ---------------------------------------------------------------------------

class Dog{
    constructor(name,breed){
        this.name = name;
        this.bread = bread;
    }
    bark(){
        console.log(`${this.name} says woof`)
    }
}
const dog = new Dog('buddy','golern retriever');
dog.bark();

// -------------------------------------------------------------------------------------

class Animal{
    constructor(name){
        this.name = name
    }
    makeSound(){
        console.log(`${this.name} make sound`)
    }
}
pet = new Animal("Browny");
pet.makeSound()

class Cat extends Animal{
    constructor(name, breed){
        super(name)
        this.breed = breed;
        }
    pee(){
        console.log(`${this.name} pee`)
    }
}

const myCat = new Cat('whiskers','siamese');
myCat.makeSound()
myCat.pee()
