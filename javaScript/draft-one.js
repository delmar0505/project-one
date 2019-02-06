// let fighters = []
// let topDeck = []
// let bottomDeck = []
// //arr imgs
// let topCards = document.querySelector(".top-image");
// let bottomCards = document.querySelector(".bottom-image");
// // let heroA = document.querySelector(".heroA");
// // let heroB = document.querySelector(".heroB");
// // let heroC = document.querySelector(".heroC");

// // let heroX = document.querySelector(".heroX");
// // let heroY = document.querySelector(".heroY");
// // let heroZ = document.querySelector(".heroZ");
// let heroA = $(".heroA");
// let heroB = $(".heroB");
// let heroC = $(".heroC");

// let heroX = $(".heroX");
// let heroY = $(".heroY");
// let heroZ = $(".heroZ");

// let start = document.querySelector("#startGame");


// let randomAttk = getRndInteger(40, 120)
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }

// // .......................................................................
// /*class Heroes{
//     constructor(name, health, strength){
//         this.name = name;
//         this.health = health;
//         this.strength = strength;
//     };

//     receiveDamage(damage) {
//         this.health -= damage;
//         };
    
//     receiveHealth(healing) {
//         this.health += healing;
//         };
    
// };
// class Soldier extends Heroes{
//     constructor(name, health, strength){
//         super(name, health, strength);
//     } 
    
// };
// class Support extends Heroes{
//     constructor(name, health, strength, mana){
//         super(name, health, strength);
//         this.mana = mana;
//     }
//     receiveHealth(health) {
//         super.receiveHealth(health).bind(this)
//     };
// };

// let hercules = new Heroes("hercules", 550, 120)
// let venus = new Support("venus", 450, 65)
// */


// // start button on click will push() onto deck top/bottom with random heroes 

// // mercury = hermes
// // venus = aphrodite
// // moon = artemis
// // mars  = ares
// // jupiter = zeus
// // saturn = cronus
// // uranus = uranos
// // neptune = posidon
// // pluto = hades

// let greekHeroes = [
//     {name: 'hercules',
//      health: 550,
//      strength: 120,
//      mana: undefined
//     },
//     {name: 'venus',
//      health: 450,
//      strength: 65,
//      mana: 70
//     }
// ]


// class Hero{
//     constructor(name, health, strength, team){
//         this.name = name;
//         this.health = health;
//         this.strength = strength;
//         this.team = team;
//     };
//     receiveDamage(damage) {
//         this.health -= damage;
//         };
//     receiveHealth(healing) {
//         this.health += healing;
//         };  
// };
// let turn = 0;
// let heroGiving;
// let heroReceiving;
// let attacker = document.querySelector(".attack");
// let healer = document.querySelector(".heal");
// let warBoard = [
//     [ 
//     new Hero ('hercules', 500, 300, 1),
//     new Hero ('mercury', 500, 300, 1),
//     new Hero ('pluto', 500, 300, 1)
//     ],
//     [
//     new Hero ('venus', 500, 300, 2),
//     new Hero ('mars', 500, 300, 2),
//     new Hero ('neptune', 500, 300, 2)
//     ]
// ];
// function fight(){
//     console.log(warBoard[turn], ' turn!')
//     turn++;
//     if(turn >= 2){
//         turn = 0;
//     } 
//     heroGiving = warBoard[turn][Math.floor(Math.random() * warBoard[turn].length)]; //warboard[1][2] would be who ==neptun

// }

// ///Add an event listner on click that says whetther or not that player is attacking or healing... I also need to know who's turn it is.
// function move(){
    
// }
// attacker.addEventListener("click", fight())
// // attacker.onclick = fight();





// .........................................................second DRAFT.......................................


// let fighters = []
// let topDeck = []
// let bottomDeck = []
// //arr imgs
// let topCards = $(".top-image");
// let bottomCards = $(".bottom-image");

// let attacker = $(".attack");
// let healer = $(".heal");
// let start = $("#startGame");
// start.toggleClass(".attack")
// // ...............................................
// let showTopName = $(".nameTop");
// let showTopHp = $(".hpTop");
// let showTopStr = $(".strTop");
// let showTopInt = $(".intTop");

// let showBottomName = $(".nameBottom");
// let showBottomHp = $(".hpBottom");
// let showBottomStr = $(".strBottom");
// let showBottomInt = $(".intBottom");
// // ...............................................
// let showTopHpJupiter = $(".hpTopJupiter");
// let showTopHpMercury = $(".hpTopMercury");
// let showTopHpPluto = $(".hpTopPluto");

// let showBottomHpVenus = $(".hpBottomVenus");
// let showBottomHpMars = $(".hpBottomMars");
// let showBottomHpNeptune = $(".hpBottomNeptune");
// // ..............................................
// let vs1 = $(".p1");
// vs1.html('p1: ' + prompt("player 1 enter name")); 
// let vs2 = $(".p2");
// vs2.html(prompt("player 2 enter name") + ' :p2'); 

// // let randomAttk = ranNum(40, 120)
// // function ranNum(min, max) {
// //     return Math.floor(Math.random() * (max - min + 1) ) + min;
// //   };
// // start button on click will push() onto deck top/bottom with random heroes 
// // let warHero = [
// //     {name: 'jupiter',
// //      health: 800,
// //      strength: 85,
// //      mana: 75,
// //      team: 1
// //     },
// //     {name: 'Mercury',
// //      health: 500,
// //      strength: 120,
// //      mana: 80,
// //      team: 1
// //     },
// //     {name: 'Pluto',
// //      health: 700,
// //      strength: 95,
// //      mana: 50,
// //      team: 1
// //     },
// //     {name: 'venus',
// //      health: 700,
// //      strength: 95,
// //      mana: 50,
// //      team: 2
// //     },
// //     {name: 'mars',
// //      health: 500,
// //      strength: 120,
// //      mana: 80,
// //      team: 2
// //     },
// //     {name: 'neptune',
// //      health: 800,
// //      strength: 85,
// //      mana: 75,
// //      team: 2
// //     }
// // ];

  

// let turn = 0;
// let otherTeam = 0;
// let heroGiving;
// let heroReceiving;
// class Hero{
//     constructor(name, health, strength, mana, team){
//         this.name = name;
//         this.health = health;
//         this.strength = strength;
//         this.mana = mana;
//         this.team = team;
//     };
//     receiveDamage(damage) {
//         // this.health -= damage;
//         heroReceiving.health -= damage
//         };
//     receiveHealth(healing) {
//         this.health += healing;
//         };  
// };
// // let turn = 0;
// // let otherTeam = 0;
// // let heroGiving;
// // let heroReceiving;
// let warBoard = [
//     [ 
//     new Hero ('jupiter', 800, 85, 75, 1),
//     new Hero ('Mercury', 500, 120, 80, 1),
//     new Hero ('Pluto', 700, 95, 50 ,1),
    
//     ],
//     [
//     new Hero ('venus', 700, 95, 50, 2),
//     new Hero ('mars', 500, 120, 80, 2),
//     new Hero ('neptune', 800, 85, 75, 2)
//     ]
// ];
// function fight(){
//     turn++;
//     if(turn >= 2){
//         turn = 0;
//     }; 
//      heroGiving = warBoard[turn][Math.floor(Math.random() * warBoard[turn].length)];
//     $('.top-image, .bottom-image').removeClass('attacker receiver receiverhp');
// };
// // fight();
// ///Add an event listner on click that says whetther or not that player is attacking or healing...
// // I also need to know who's turn it is. 

// function attack(){
//     if(turn === 0){
//         otherTeam = 1
//     } else {
//         otherTeam = 0 
//     }
//     heroReceiving = warBoard[otherTeam][Math.floor(Math.random() * warBoard[turn].length)]; 
//     console.log(heroGiving, ' attacks ',heroReceiving);

//     heroReceiving.receiveDamage(heroGiving.strength)


//     $('.top-image, .bottom-image').removeClass('attacker receiver receiverhp');
//     $('.' + heroGiving.name).addClass('attacker');
//     $('.' + heroReceiving.name).addClass('receiver');
    
//     showTopName.html(heroGiving.name);
//     showTopHp.html("health: " + heroGiving.health);
//     showTopStr.html("strenght: " + heroGiving.strength);
//     showTopInt.html("mana: " + heroGiving.mana);
//     showBottomName.html(heroReceiving.name);
//     showBottomHp.html(heroReceiving.health + " :health");
//     showBottomStr.html(heroReceiving.strength + " :strenght");
//     showBottomInt.html(heroReceiving.mana + " :mana");  

//     showTopHpJupiter.html("HP: " + warBoard[0][0].health);
//     showTopHpMercury.html("HP: " + warBoard[0][1].health);
//     showTopHpPluto.html("HP: " + warBoard[0][2].health); 
//     showBottomHpVenus.html("HP: " + warBoard[1][0].health);
//     showBottomHpMars.html("HP: " + warBoard[1][1].health);
//     showBottomHpNeptune.html("HP: " + warBoard[1][2].health);
// };
// function heal(){
//     if(turn === 1){
//         otherTeam = 1
//     } else {
//         otherTeam = 0 
//     }
//     heroReceiving = warBoard[otherTeam][Math.floor(Math.random() * warBoard[turn].length)]; 
//     console.log(heroGiving, ' heals ', heroReceiving);


//     heroReceiving.receiveHealth(heroGiving.mana)

//     $('.top-image, .bottom-image').removeClass('attacker receiver receiverhp');
//     $('.' + heroGiving.name).addClass('attacker');
//     $('.' + heroReceiving.name).addClass('receiverhp');
//     showTopName.html(heroGiving.name);
//     showTopHp.html("health: " + heroGiving.health);
//     showTopStr.html("strenght: " + heroGiving.strength);
//     showTopInt.html("mana: " + heroGiving.mana);

//     //show stats
//     showBottomName.html(heroReceiving.name);
//     showBottomHp.html(heroReceiving.health + " :health");
//     showBottomStr.html(heroReceiving.strength + " :strenght");
//     showBottomInt.html(heroReceiving.mana + " :mana");

//     showTopHpJupiter.html("HP: " + warBoard[0][0].health);
//     showTopHpMercury.html("HP: " + warBoard[0][1].health);
//     showTopHpPluto.html("HP: " + warBoard[0][2].health); 
//     showBottomHpVenus.html("HP: " + warBoard[1][0].health);
//     showBottomHpMars.html("HP: " + warBoard[1][1].health);
//     showBottomHpNeptune.html("HP: " + warBoard[1][2].health);
    
// };


// attacker.on("click", attack)
// healer.on("click", heal)
// start.on("click", fight)
// // start.onkeydown("keydown", fight);















