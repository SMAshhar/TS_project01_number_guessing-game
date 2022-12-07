/* This function will first select a random numbetween 0 and 999 and start a loop,
 The user has to guess it. If the number is bigger, the program will inquire the user
 and will start the loop again.

 If the user gets it smaller, the program will inquire the user of that as well and will
 start over the loop.

 If the user guessed it successfully, it will inquire a congradulations message and will
 break the loop.

*/
import inquirer from "inquirer";
async function numberGuess() {
    var randomNumber = Math.floor(Math.random() * (1000));
    var attempts = 0;
    while (true) {
        let guess = await inquirer.prompt({
            name: "Guess",
            type: "number",
            message: "Please enter your guess between 0 and 999 : "
        });
        if (guess.Guess > randomNumber) {
            console.log("Your number is bigger, try something smaller : ");
        }
        else if (guess.Guess < randomNumber) {
            console.log("Your number is smaller, try something bigger : ");
        }
        else if (guess.Guess === randomNumber) {
            console.log("Congradulations, you have guessed the right number : ");
            break;
        }
        else {
            console.log("Please enter a number : ");
        }
        attempts++;
    }
    console.log(`Your attempts to correctly guess were : ${attempts}`);
}
async function questioning() {
    while (true) {
        var play = await inquirer.prompt({
            name: "again",
            type: "input",
            message: "Wanna play a number guessing game?(Y/N) : "
        });
        if (typeof play.again === "string") {
            if (play.again === "y" || play.again === "Y") {
                await numberGuess();
            }
            else if (play.again === "n" || play.again === "N") {
                console.log("Alrighty then... see you next time.");
                break;
            }
            else {
                console.log("Dude common... I said 'y' or 'n'. Lets try it again");
            }
        }
    }
}
questioning();
export { questioning };
