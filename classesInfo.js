class Dog{
    constructor(name,breed){
        this.name = name;
        this.bread = this.bread;
    }
    bark(){
        console.log(`${this.name} says woof`)
    }
}
const dog = new Dog('buddy','golern retriever');
dog.bark();

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
