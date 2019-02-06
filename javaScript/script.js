let fighters = []
let topDeck = []
let bottomDeck = []
//arr imgs
let topCards = $(".top-image");
let bottomCards = $(".bottom-image");

let attacker = $(".attack");
let healer = $(".heal");
let start = $("#startGame");
start.toggleClass(".attack")
// ...............................................
let showTopName = $(".nameTop");
let showTopHp = $(".hpTop");
let showTopStr = $(".strTop");
let showTopInt = $(".intTop");

let showBottomName = $(".nameBottom");
let showBottomHp = $(".hpBottom");
let showBottomStr = $(".strBottom");
let showBottomInt = $(".intBottom");
// ...............................................
let showTopHpJupiter = $(".hpTopJupiter");
let showTopHpMercury = $(".hpTopMercury");
let showTopHpPluto = $(".hpTopPluto");

let showBottomHpVenus = $(".hpBottomVenus");
let showBottomHpMars = $(".hpBottomMars");
let showBottomHpNeptune = $(".hpBottomNeptune");
// ..............................................
// let vs1 = $(".p1");
// vs1.html('p1: ' + prompt("player 1 enter name")); 
// let vs2 = $(".p2");
// vs2.html(prompt("player 2 enter name") + ' :p2'); 

// let randomAttk = ranNum(40, 120)
// function ranNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   };
// start button on click will push() onto deck top/bottom with random heroes 
// let warHero = [
//     {name: 'jupiter',
//      health: 800,
//      strength: 85,
//      mana: 75,
//      team: 1
//     },
//     {name: 'Mercury',
//      health: 500,
//      strength: 120,
//      mana: 80,
//      team: 1
//     },
//     {name: 'Pluto',
//      health: 700,
//      strength: 95,
//      mana: 50,
//      team: 1
//     },
//     {name: 'venus',
//      health: 700,
//      strength: 95,
//      mana: 50,
//      team: 2
//     },
//     {name: 'mars',
//      health: 500,
//      strength: 120,
//      mana: 80,
//      team: 2
//     },
//     {name: 'neptune',
//      health: 800,
//      strength: 85,
//      mana: 75,
//      team: 2
//     }
// ];

  

let turn = 0;
let otherTeam = 0;
let heroGiving;
let heroReceiving;
class Hero{
    constructor(name, health, strength, mana, team){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.mana = mana;
        this.team = team;
    };
    receiveDamage(damage) {
        // this.health -= damage;
        heroReceiving.health -= damage
        };
    receiveHealth(healing) {
        this.health += healing;
        };  
};
let warBoard = [
    [ 
    new Hero ('Jupiter', 800, 885, 75, 1),
    new Hero ('Mercury', 500, 8120, 80, 1),
    new Hero ('Pluto', 700, 95, 850 ,1),
    
    ],
    [
    new Hero ('Venus', 700, 95, 850, 2),
    new Hero ('Mars', 500, 120, 880, 2),
    new Hero ('Neptune', 800, 85, 975, 2)
    ]
];
function fight(){
    /*turn++;
    if(turn >= 2){
        turn = 0;
    };*/ 
    turn = 1 - turn;
     heroGiving = warBoard[turn][Math.floor(Math.random() * warBoard[turn].length)];
    $('.top-image, .bottom-image').removeClass('attacker receiver receiverhp');
};

function attack(){
    if(turn === 0){
        otherTeam = 1
    } else {
        otherTeam = 0 
    }
    heroReceiving = warBoard[otherTeam][Math.floor(Math.random() * warBoard[otherTeam].length)]; 
    console.log(heroGiving, ' attacks ',heroReceiving);

    if(!heroReceiving){
        return
    }
    heroReceiving.receiveDamage(heroGiving.strength)


    // heroGiving.defeated(heroReceiving.health);





    $('.top-image, .bottom-image').removeClass('attacker receiver receiverhp');
    $('.' + heroGiving.name).addClass('attacker');
    $('.' + heroReceiving.name).addClass('receiver');
    
    showTopName.html(heroGiving.name);
    showTopHp.html("health: " + heroGiving.health);
    showTopStr.html("strenght: " + heroGiving.strength);
    showTopInt.html("mana: " + heroGiving.mana);
    showBottomName.html(heroReceiving.name);
    showBottomHp.html(heroReceiving.health + " :health");
    showBottomStr.html(heroReceiving.strength + " :strenght");
    showBottomInt.html(heroReceiving.mana + " :mana");  


    for(let i =0; i<warBoard.length; i++){
        for(let j=0; j<warBoard[i].length; j++){
            console.log(warBoard[i][j].name)
            $(".hpTop"+warBoard[i][j].name).html('HP:' +warBoard[i][j].health)
            $(".hpBottom"+warBoard[i][j].name).html('HP:' +warBoard[i][j].health)

        }
    }
    defeated(heroReceiving.health)

    // showTopHpJupiter.html("HP: " + warBoard[0][0].health);
    // showTopHpMercury.html("HP: " + warBoard[0][1].health);
    // showTopHpPluto.html("HP: " + warBoard[0][2].health); 
    // showBottomHpVenus.html("HP: " + warBoard[1][0].health);
    // showBottomHpMars.html("HP: " + warBoard[1][1].health);
    // showBottomHpNeptune.html("HP: " + warBoard[1][2].health);
};


function defeated(life){
    // if(warBoard[turn].health == 0){
    //     warBoard[turn].splice(1)
    // };
    console.log(heroReceiving, turn)
    // if(heroReceiving.health === 0 || heroReceiving.health < 0){
    //     warBoard[turn].splice(1)}
    if(life === 0 || life < 0){
        warBoard[1 - turn].forEach(function(enemy, i){
            console.log(enemy.name, i)
            if(enemy.name === heroReceiving.name){
                warBoard[1-turn].splice(i,1)
                if(warBoard[1-turn].length === 0){
                    alert('game over')
                }
            }

        })

    };
};


function heal(){
    if(turn === 1){
        otherTeam = 1
    } else {
        otherTeam = 0 
    }
    heroReceiving = warBoard[otherTeam][Math.floor(Math.random() * warBoard[turn].length)]; 
    console.log(heroGiving, ' heals ', heroReceiving);


    heroReceiving.receiveHealth(heroGiving.mana)

    $('.top-image, .bottom-image').removeClass('attacker receiver receiverhp');
    $('.' + heroGiving.name).addClass('attacker');
    $('.' + heroReceiving.name).addClass('receiverhp');
    showTopName.html(heroGiving.name);
    showTopHp.html("health: " + heroGiving.health);
    showTopStr.html("strenght: " + heroGiving.strength);
    showTopInt.html("mana: " + heroGiving.mana);

    //show stats
    showBottomName.html(heroReceiving.name);
    showBottomHp.html(heroReceiving.health + " :health");
    showBottomStr.html(heroReceiving.strength + " :strenght");
    showBottomInt.html(heroReceiving.mana + " :mana");

    showTopHpJupiter.html("HP: " + warBoard[0][0].health);
    showTopHpMercury.html("HP: " + warBoard[0][1].health);
    showTopHpPluto.html("HP: " + warBoard[0][2].health); 
    showBottomHpVenus.html("HP: " + warBoard[1][0].health);
    showBottomHpMars.html("HP: " + warBoard[1][1].health);
    showBottomHpNeptune.html("HP: " + warBoard[1][2].health);
    
};


attacker.on("click", attack)
healer.on("click", heal)
start.on("click", fight)
// start.onkeydown("keydown", fight);






