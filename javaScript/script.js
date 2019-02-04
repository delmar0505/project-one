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
  };
// start button on click will push() onto deck top/bottom with random heroes 

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
];
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
let otherTeam = 1;
let heroGiving;
let heroReceiving;
let attacker = $(".attack");
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
    heroGiving = warBoard[turn][Math.floor(Math.random() * warBoard[turn].length)]; 
    
    //warboard[0][2] would be who ==neptun
}

///Add an event listner on click that says whetther or not that player is attacking or healing...
// I also need to know who's turn it is. 
fight()
function attack(){
    if(turn === 0){
        otherTeam = 1
    } else {
        otherTeam = 0 
    }
    heroReceiving = warBoard[otherTeam][Math.floor(Math.random() * warBoard[turn].length)]; 
    console.log(heroGiving, ' attacks ',heroReceiving)
    
}


attacker.on("click", attack)
// attacker.onclick = fight();






