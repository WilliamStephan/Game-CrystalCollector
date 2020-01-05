console.log("app.js is linked - global vars & main app logic"); // global vars & main app logic

var gemsArr = new Array(0); // gem object array
var obj; // object placeholder for using object array
var usedValues = new Array(0); // ensures no duplicates randoms


class Game {
    constructor() {
        this.game = 0;
        this.score = 0;
        this.tries = 0;
        this.wins = 0;
        this.losses = 0;
    }
    
    newRound() {
        this.game = Math.floor(Math.random() * 101) + 19; // sets random value
        this.score = 0;
        this.tries = 0;
        usedValues.fill(""); // resets no-duplicate random gems  
        for (var i = 0; i < gemsArr.length; i++) { gemsArr[i].initGem() } // reset gem objects
    }

    updateScore(gemClickValue) {        
        this.score += gemClickValue;
        this.tries++;
        if (game.score === game.game) {
            this.wins++
            this.newRound();
            $("#winStat").text("YOU WIN!");
            setTimeout(function () {$("#winStat").text("YOUR STATS!");}, 2000);
        }
        if (game.score > game.game) {
            this.losses++
            this.newRound();
            $("#winStat").text("YOU LOSE!");
            setTimeout(function () {$("#winStat").text("YOUR STATS!");}, 2000);
        }
    }
}

class Gem {
    constructor(id) {
        this.gem = id;
        this.base;
        this.value;
        this.clickable;
        gemsArr.push(this) // stores objects in array 
    }

    clickGem() { 
        if (this.clickable) { 
            game.updateScore(this.base)
            $("#goalScore").text(game.game);
            $("#gameScore").text(game.score);
            $("#totalWin").text(game.wins);
            $("#totalLoss").text(game.losses); 
        } // increment by base value
    }
    
    initGem() {
        while (true) {
            this.base = Math.floor(Math.random() * 12) + 1; // sets random value
            if (usedValues.indexOf(this.base) === -1) {   // if random value has not been used it sets object values - else retry
                usedValues.push(this.base);
                this.value = 0;
                this.clickable = true;
                return this.base
            }
        }
    }
}

var game = new Game(); // creates game obj
$('.gem').each(function(){ new Gem(this.id);}); // dynamically creates gem objects for each .gem (HTML class) objects stored in array

game.newRound();
$("#goalScore").text(game.game);

document.body.onclick = keyClick;

function keyClick(e) { // looking for clicks  - wheel or on-screen keyboard
    e = window.event ? event.srcElement : e.target;
    if (e.classList.contains('gem')) {
        clicked = e.getAttribute('id');
        obj = gemsArr.find(x => x.gem === clicked) // assigns obj to gem object in array gemsArr 
        obj.clickGem() // executes clickGem method for clicked gem obj 
        console.log(obj)
        console.log(game);  
    }   
}