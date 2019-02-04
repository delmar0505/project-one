let fighters = []
let topDeck = []
let bottomDeck = []
//arr imgs
let topCards = $(".top-image");
let bottomCards = $(".bottom-image");
let heroA = $(".heroA");
let heroB = $(".heroB");
let heroC = $(".heroC");

let heroX = $(".heroX");
let heroY = $(".heroY");
let heroZ = $(".heroZ");

let start = $("#startGame");


let randomAttk = ranNum(40, 120)
function ranNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };
// start button on click will push() onto deck top/bottom with random heroes 

let warHero = [
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
    constructor(name, health, strength, mana, team){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.mana = mana;
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
let otherTeam = 0;
let heroGiving;
let heroReceiving;
let attacker = $(".attack");
let healer = $(".heal");
let warBoard = [
    [ 
    new Hero ('Hercules', 800, 85, 75, 1),
    new Hero ('Mercury', 500, 120, 80, 1),
    new Hero ('Pluto', 700, 95, 50 ,1)
    ],
    [
    new Hero ('venus', 700, 95, 50, 2),
    new Hero ('mars', 500, 120, 80, 2),
    new Hero ('neptune', 800, 85, 75, 2)
    ]
];
function fight(){
    // console.log(warBoard[turn], ' turn!')
    turn++;
    if(turn >= 2){
        turn = 0;
    } 
     heroGiving = warBoard[turn][Math.floor(Math.random() * warBoard[turn].length)];
    $('.top-image, .bottom-image').removeClass('attacker receiver');
};
fight();
///Add an event listner on click that says whetther or not that player is attacking or healing...
// I also need to know who's turn it is. 

function attack(){
    if(turn === 0){
        otherTeam = 1
    } else {
        otherTeam = 0 
    }
    heroReceiving = warBoard[otherTeam][Math.floor(Math.random() * warBoard[turn].length)]; 
    console.log(heroGiving, ' attacks ',heroReceiving);

    $('.' + heroGiving.name).addClass('attacker');
    $('.' + heroReceiving.name).addClass('receiver');
    //console.log($(this).parent())
}
function heal(){
    if(turn === 1){
        otherTeam = 1
    } else {
        otherTeam = 0 
    }
    heroReceiving = warBoard[otherTeam][Math.floor(Math.random() * warBoard[turn].length)]; 
    console.log(heroGiving, ' heals ', heroReceiving);

    $('.' + heroGiving.name).addClass('attacker');
    $('.' + heroReceiving.name).addClass('receiver');
};

attacker.on("click", attack)
healer.on("click", heal)
start.on("click", fight)






