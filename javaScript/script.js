let fighters = []
let topDeck = []
let bottomDeck = []
//arr imgs
let topCards = $(".top-image");
let bottomCards = $(".bottom-image");

let attacker = $(".attack");
let healer = $(".heal");
let start = $("#startGame");
// start.toggleClass(".attack");
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
// let vs1 = $(".p1");
// vs1.html('p1: ' + prompt("player 1 enter name")); 
// let vs2 = $(".p2");
// vs2.html(prompt("player 2 enter name") + ' :p2'); 

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
        heroReceiving.health -= damage
        };
    receiveHealth(healing) {
        this.health += healing;
        };  
};
let warBoard = [
    [ 
    new Hero ('Jupiter', 800, 85, 75, 1),
    new Hero ('Mercury', 500, 120, 80, 1),
    new Hero ('Pluto', 700, 95, 50 ,1),
    
    ],
    [
    new Hero ('Venus', 700, 95, 50, 2),
    new Hero ('Mars', 500, 120, 80, 2),
    new Hero ('Neptune', 800, 85, 75, 2)
    ]
];
function fight(){
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
    // no clue what this does
    // if(!heroReceiving){
    //     return
    // }
    heroReceiving.receiveDamage(heroGiving.strength)
    // heroGiving.defeated(heroReceiving.health);
    
    $('.top-image, .bottom-image').removeClass('attacker receiver receiverhp');
    $('.' + heroGiving.name).addClass('attacker');
    $('.' + heroReceiving.name).addClass('receiver');
    
    //shows the center info stats
    showTopName.html(heroGiving.name);
    showTopHp.html("health: " + heroGiving.health);
    showTopStr.html("strenght: " + heroGiving.strength);
    showTopInt.html("mana: " + heroGiving.mana);
    showBottomName.html(heroReceiving.name);
    showBottomHp.html(heroReceiving.health + " :health");
    showBottomStr.html(heroReceiving.strength + " :strenght");
    showBottomInt.html(heroReceiving.mana + " :mana"); 
    //switches turn on attack 
    
    // shows the hp of the individual player and modifies it
    for(let i =0; i<warBoard.length; i++){
        for(let j=0; j<warBoard[i].length; j++){
            $(".hpTop" + warBoard[i][j].name).html('HP:      ' +warBoard[i][j].health)
            $(".hpBottom" + warBoard[i][j].name).html('HP: ' +warBoard[i][j].health)
            // console.log(warBoard[i][j].name + warBoard[i][j].strength)
        };
    };
    defeated(heroReceiving.health)
    // setTimeout(()=>{fight()},1000)
    turn = 1 - turn;
     heroGiving = warBoard[turn][Math.floor(Math.random() * warBoard[turn].length)];
};

function defeated(life){
    console.log(heroReceiving, turn)
    // if(heroReceiving.health === 0 || heroReceiving.health < 0){
    //     warBoard[turn].splice(1)}
    if(life === 0 || life < 0){ //somone has been killed $(.heroReceiving.name)
        $('.' + heroReceiving.name).addClass('rip');
        warBoard[1 - turn].forEach(function(enemy, i){
            console.log(enemy.name, i)
            if(enemy.name === heroReceiving.name){
                warBoard[1-turn].splice(i,1)
                if(warBoard[1-turn].length === 0){
                    //alert('game over')
                    $('body').toggleClass('endGame')
                };
            };
        })
    };
};

function heal(){
    //targetting random ally
    if(turn === 1){
        otherTeam = 1
    } else {
        otherTeam = 0 
    }
    heroReceiving = warBoard[otherTeam][Math.floor(Math.random() * warBoard[turn].length)]; 
    console.log(heroGiving, ' heals ', heroReceiving);
    
    //healing action
    heroReceiving.receiveHealth(heroGiving.mana)
    //modifies the top image with attack/heal action
    $('.top-image, .bottom-image').removeClass('attacker receiver receiverhp');
    $('.' + heroGiving.name).addClass('attacker');
    $('.' + heroReceiving.name).addClass('receiverhp');
    //show stats in the middle
    showTopName.html(heroGiving.name);
    showTopHp.html("health: " + heroGiving.health);
    showTopStr.html("strenght: " + heroGiving.strength);
    showTopInt.html("mana: " + heroGiving.mana);
    showBottomName.html(heroReceiving.name);
    showBottomHp.html(heroReceiving.health + " :health");
    showBottomStr.html(heroReceiving.strength + " :strenght");
    showBottomInt.html(heroReceiving.mana + " :mana");
    //switches turn on attack
    turn = 1 - turn;
     heroGiving = warBoard[turn][Math.floor(Math.random() * warBoard[turn].length)];
    //show individual hp below characters
    for(let i =0; i<warBoard.length; i++){
        for(let j=0; j<warBoard[i].length; j++){
            $(".hpTop" + warBoard[i][j].name).html('HP:      ' +warBoard[i][j].health)
            $(".hpBottom" + warBoard[i][j].name).html('HP: ' +warBoard[i][j].health)
        };
    };
    // end
    
    // setTimeout(()=>{fight()},1000)

};


attacker.on("click", attack);
healer.on("click", heal);
start.on("click", ()=>{
    fight();
    $('#startGame').hide()
});

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        console.log('spacebar')
        // fight();
            fight();
            $('#startGame').hide()
        
    }else if(e.keyCode == 65){
        console.log('A')
        attack();
    }else if(e.keyCode == 68){
        console.log('D')
        heal();
    };
};
