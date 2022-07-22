// Create a Ninja class  
// add an attribute: name  
// add an attribute: health - give a default value of 100 
// add a attribute: speed - give a default value of 3  
// add a attribute: strength - give a default value of 3  
// add a method: sayName() - This should log that Ninja's name to the console  
// add a method: showStats() - This should show the Ninja's name, strength, speed, and health.  
// add a method: drinkSake() - This should add +10 Health to the Ninja

class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`Ninja ${this.name} has joined the dojo`);
    }

    showStats() {
        console.log(`Stats - name: ${this.name}, health: ${this.health}, speed: ${this.speed}, strength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
    }
}


// example output
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();

// -> "Ninja Hyabusa has joined the dojo"
ninja1.showStats();

// -> Ninja Hyabusa stats:\nHealth: 100\nSpeed: 3\nStrength: 3


// might be on assessment idk
// create a class Sensei that inherits from the Ninja class
// add an attribute: wisdom - default to 10
// create a method: speakWisdom()
// copy the superSensei using spread

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom = 10) {
        super(name, health, speed, strength);

        this.wisdom = wisdom;
    }

    speakWisdom () {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
    attack(target) {
        if  (target instanceof Ninja) {
            if (target.strength = this.strength) {
                target.health -= 5
                this.health -= 5   
            } else if (target.strength > this.strength) {
                this.health -= 10   
            } else {
                target.health -=10 
            }
            target.showStats()
            this.showStats()  
        }

    }
}

// example output
const super_sensei = new Sensei("Master Splinter");
const poser_sensei = {...super_sensei};
// const poser_sensei = new Sensei("Master sprinter", 200, 3, 4);
super_sensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
super_sensei.showStats();
super_sensei.attack(poser_sensei)
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

// BONUS 
// create an attack function on the sensei class...EXTRA BONUS check if the object attacking is a type of ninja

// if(blazikenAtk > gengarAtk) {
//     gengarHp -= blazikenAtk
//     console.log(`Gengar's new HP is ${gengarHp}`)
// } else if (gengarAtk > blazikenAtk) {
//     blazikenHp -= gengarAtk
//     console.log(`Blaziken's new HP is ${blazikenHp}`)
// } else {
//     console.log("They both missed!")
