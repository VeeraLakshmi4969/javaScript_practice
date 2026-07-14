class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    makeSound()
    {
        console.log("Generic animal sound");
    }
    describe(){
        console.log(`${this.name},${this.age}`)
    }
}

const lion = new Animal("Leo",12)
lion.describe()
lion.makeSound()




class Math{
    static square(x){
        return x*x;
    }
    static cube(x){
        return this.square(x)*x;
        }
}
console.log(Math.square(9));
console.log(Math.cube(5));