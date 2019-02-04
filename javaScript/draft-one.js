let fighters = []
let topDeck = []
let bottomDeck = []
//arr imgs
let topCards = document.querySelector(".top-image");
let bottomCards = document.querySelector(".bottom-image");
let heroA = document.querySelector(".heroA");
let heroB = document.querySelector(".heroB");
let heroC = document.querySelector(".heroC");

let heroX = document.querySelector(".heroX");
let heroY = document.querySelector(".heroY");
let heroZ = document.querySelector(".heroZ");

let start = document.querySelector("#startGame");


let randomAttk = getRndInteger(40, 120)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// .......................................................................
/*class Heroes{
    constructor(name, health, strength){
        this.name = name;
        this.health = health;
        this.strength = strength;
    };

    receiveDamage(damage) {
        this.health -= damage;
        };
    
    receiveHealth(healing) {
        this.health += healing;
        };
    
};
class Soldier extends Heroes{
    constructor(name, health, strength){
        super(name, health, strength);
    } 
    
};
class Support extends Heroes{
    constructor(name, health, strength, mana){
        super(name, health, strength);
        this.mana = mana;
    }
    receiveHealth(health) {
        super.receiveHealth(health).bind(this)
    };
};

let hercules = new Heroes("hercules", 550, 120)
let venus = new Support("venus", 450, 65)
*/


// start button on click will push() onto deck top/bottom with random heroes 

// mercury = hermes
// venus = aphrodite
// moon = artemis
// mars  = ares
// jupiter = zeus
// saturn = cronus
// uranus = uranos
// neptune = posidon
// pluto = hades

let greekHeroes = [
    {name: 'hercules',
     health: 550,
     strength: 120,
     mana: undefined
    },
    {name: 'venus',
     health: 450,
     strength: 65,
     mana: 70
    }
]


class Hero{
    constructor(name, health, strength, team){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.team = team;
    };
    receiveDamage(damage) {
        this.health -= damage;
        };
    receiveHealth(healing) {
        this.health += healing;
        };  
};
let turn = 0;
let heroGiving;
let heroReceiving;
let attacker = document.querySelector(".attack");
let healer = document.querySelector(".heal");
let warBoard = [
    [ 
    new Hero ('hercules', 500, 300, 1),
    new Hero ('mercury', 500, 300, 1),
    new Hero ('pluto', 500, 300, 1)
    ],
    [
    new Hero ('venus', 500, 300, 2),
    new Hero ('mars', 500, 300, 2),
    new Hero ('neptune', 500, 300, 2)
    ]
];
function fight(){
    console.log(warBoard[turn], ' turn!')
    turn++;
    if(turn >= 2){
        turn = 0;
    } 
    heroGiving = warBoard[turn][Math.floor(Math.random() * warBoard[turn].length)]; //warboard[1][2] would be who ==neptun

}

///Add an event listner on click that says whetther or not that player is attacking or healing... I also need to know who's turn it is.
function move(){
    
}
attacker.addEventListener("click", fight())
// attacker.onclick = fight();






