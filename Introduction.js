//Creating Objects

//METHOD 1: Bad Way !

const player = {
    name: "?",
    hp: 100,
    mp: 0,
    items:[],
};

const hanSolo1 = player;
const darthVader1 = player;

hanSolo1.name = "Han Solo";
hanSolo1.hp = 80;
hanSolo1.mp = 20;
hanSolo1.items = ["Blaster"];


// console.log(hanSolo1);
// console.log(darthVader1);

// "Objects" in JS are references

// METHOD 2: Better way but not best

const createPlayer =(name,hp,mp,items) => {
    return {
        name,
        hp,
        mp,
        items
    }
}

const hanSolo2 = createPlayer("Han Solo", 100, 10, ["Blasyter"]);
const darthVader2 = createPlayer("Darth Vader", 90,20,["Saber"]);

//changing value of han solo wont affect darth vader now.
hanSolo2.hp = 70;

console.log(hanSolo2);
console.log(darthVader2);

// But it's not the best.
// why ??


// METHOD 3: Best way - using Classes

class Player {
    //class constructor
    constructor(name,hp,mp,items)
    {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
    }

    //class method
    speak(phrase)
    {
        console.log(`${this.name} says: ${phrase}`)
    }
}

const hanSolo3 = new Player("Han Solo", 50, 20, ["blaster"]);
hanSolo3.speak("buhaha!")
console.log(hanSolo3);
console.log(Object.getOwnPropertyNames(hanSolo3));
console.log(Object.getOwnPropertyNames(hanSolo3.__proto__));
console.log({});

function AnotherPlayer() {

}

const darthVader3 = new AnotherPlayer("Darth Vader", 90,20,["saber"]);
console.log(darthVader3);
console.log(Object.getOwnPropertyNames(darthVader3));
console.log(Object.getOwnPropertyNames(darthVader3.__proto__));

