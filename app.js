//Entrega d'exercici: Classes & Arrow Functions. Nivell 1, 2 i 3.


//NIVELL 1

//Task 1

let sum = (x, y) => console.log(x+y);

sum(3,4);


//Task 2

let createObject = x => { return { position: x } }; 

let newObject = createObject('one');

console.log(newObject);


//Task 3

class Persona {
    constructor(nom) {
    this.nom = nom;
}
    decirNombre() {
        console.log(`${this.nom}`);
    }
}

let alumna = new Persona('Maria');
alumna.decirNombre();


//Task 4

//Option 1: using constructor function

function Animal (mood) {
    this.mood = mood;
}

let bird = new Animal('angry');
let pig = new Animal('happy');
let cat = new Animal('grumpy');

console.log(cat);

//Option 2: using Class 

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
}

let car = new Vehicle('Suzuki');
let motorbike = new Vehicle('Honda');
let van = new Vehicle('Toyota');

console.log(car);
