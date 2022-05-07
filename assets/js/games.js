var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


function fight() {
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Do you want to FIGHT or SKIP this batle?");
    if (promptFight === "fight" || promptFight == 'FIGHT') {

        //Subtract the players attack value from the enemy's health and use that difference to update the current health of the enemy
        enemyHealth = enemyHealth - playerAttack;

        // console log a message to indicate that the player attack has been completed
        console.log(playerName + " has attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health left.")

        //check to see if enemy's health haas reach 0
        if (enemyHealth <= 0) {
            window.alert(enemyName + "has died. ")
        }
    
        //Subtract the enemy's attack value from the player's health and use that difference to update the current health of the player
        playerHealth = playerHealth - enemyAttack;

        // console log a message to indicate that the player attack has been completed
        console.log(enemyName + " has attacked " + playerName + "." + playerName + " now has " + playerHealth + " health left.")

        //check to see if player has died
        if (playerHealth <= 0) {
            window.alert(playerName + "has died.")
        }
    }
    else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight")

        var confirmSkip = window.confirm("Are you sure you want to skip?");
        if(confirmSkip) {
            window.alert(playerName + "has decided to skip this battle.")
            //subtract 2 moneies from total
            playerMoney -= 2;
            window.alert(playerName + " has $" + playerMoney + " left.")
        }
        else {
            fight();
        }
        
    }
    else {
        window.alert("You need to choose a valid option.")
    }
}

fight();