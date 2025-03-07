//CLASS & OBJECT
// A class in JavaScript is a blueprint for creating objects. It encapsulates data (properties) and methods (functions) that operate on that data.
// An object is an instance of a class.
// The class keyword is used to define a class.
// The constructor is a special method for initializing properties.
// The new keyword is used to create an object from a class.
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    // Method
    makeSound() {
        console.log(`${this.name} makes a ${this.sound} sound`);
    }
}

// Object creation
const dog = new Animal("Dog", "bark");
dog.makeSound(); // Output: Dog makes a bark sound 

//Encapsulation 
// Encapsulation is about bundling data (properties) and methods that operate on that data within a class, 
// while restricting direct access to some properties using closures or private fields (# syntax in JavaScript).

// In this example, the #balance field is private, 
// so it can only be accessed through public methods (deposit and getBalance). 
// Direct access like account.#balance will throw an error.
class BankAccount {
    #balance; // Private property (not directly accessible from outside)

    constructor(initialBalance) {
        this.#balance = initialBalance; // Initialize private property
    }

    // Public method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}, New Balance: $${this.#balance}`);
        }
    }

    // Public method to check balance
    getBalance() {
        return this.#balance; // Access private property via a public method
    }
}
const account = new BankAccount(100);
account.deposit(50);         // Output: Deposited: $50, New Balance: $150
console.log(account.getBalance()); // Output: 150

// Abstraction
// Abstraction is the concept of hiding the internal implementation 
// and showing only the necessary details to the user.
class CoffeeMachine {
    // Internal method (considered private by convention, using _ prefix)
    _boilWater() {
        console.log("Boiling water...");
    }

    // Public method to make coffee
    makeCoffee(type) {
        this._boilWater();  // Abstraction: user doesn't need to know about this
        console.log(`Making ${type} coffee...`);
    }
}

const machine = new CoffeeMachine();
machine.makeCoffee("espresso"); // Output: Boiling water... Making espresso coffee...


//INHERITANCE
// Inheritance is a key concept in Object-Oriented Programming (OOP). 
// It allows a class (called the child class or subclass) to inherit properties 
// and methods from another class (called the parent class or superclass). 
// This promotes code reuse and organization.
class Vehicle {
    constructor(type) {
        this.type = type;
    }

    drive() {
        console.log(`Driving a ${this.type}`);
    }
}

class Car extends Vehicle {
    constructor(brand) {
        super("Car");
        this.brand = brand;
    }

    drive() {
        console.log(`Driving a ${this.brand} car`);
    }
}

const tesla = new Car("Tesla");
tesla.drive(); // Output: Driving a Tesla car

//POLYMORPHISM
// Same method behaves differently based on the object calling it
// polymorphism enables the use of a single method name to represent different implementations in child classes.
// mainly achieved through method overriding in class inheritance.
class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

const genericAnimal = new Animal();
const petDog = new Dog();

genericAnimal.speak(); // Output: Animal speaks
petDog.speak();        // Output: Dog barks