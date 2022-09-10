// Runescape game

var personOneMagicianLife = 100;
var personTurn = true;

var enemyOneLife = 100;
var enemyTurn = false;

var proceed = true;

while(proceed) {
    person()
    enemy()

    if(personOneMagicianLife <= 0) {
        console.log("Macigician dead. Enemy won")
        break;
    }

    if(enemyOneLife <= 0) {
        console.log("Enemy dead. Magician won")
        break
    }

        console. log("---")
        console.log("Magician life: " + personOneMagicianLife);
        console.log("Enemy life " + enemyOneLife);
        console.log();
}

function person() {
    var attack = Math.floor(Math.random() * 3);
    console.log(attack)
    if(attack == 0) {
        console.log("Person: fire attack #" + attack);
        enemyOneLife -= 30;
    } else if(attack == 1) {
        console.log("Person: water attack #" + attack);
        enemyOneLife -= 15
    } else {
        console.log("Person: air attack #" +attack);
        enemyOneLife -= 20;
    }
}




function enemy() {
    var attack = Math.floor(Math.random() * 3);
    console.log(attack)
    if(attack == 0) {
        console.log("Enemy: fire attack #" + attack);
        personOneMagicianLife -= 30;
    } else if(attack == 1) {
        console.log("Enemy: water attack #" + attack);
        personOneMagicianLife -= 15
    } else {
        console.log("Enemy: air attack #" +attack);
        personOneMagicianLife -= 20;
    }
}


