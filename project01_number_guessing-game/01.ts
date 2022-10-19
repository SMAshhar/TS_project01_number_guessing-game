/* This function will first select a random numbetween 0 and 999 and start a loop, 
 The user has to guess it. If the number is bigger, the program will alert the user 
 and will start the loop again.

 If the user gets it smaller, th program will alert the user of that as well and will
 start over the loop.

 If the user guessed it successfully, it will alert a congradulations message and will 
 break the loop.

*/

function numberGuess(): any {
    var randomNumber = Math.floor(Math.random() * (1000));
    var attempts = 0;

    while (true) {
        var guessNumber = Number(prompt("Please enter your guess between 0 and 999 : "));

        if (guessNumber > randomNumber) {
            alert("Your number is bigger, try something smaller : ");
        } else if (guessNumber < randomNumber) {
            alert("Your number is smaller, try something bigger : ");
        } else if (guessNumber === randomNumber) {
            alert("Congradulations, you have guessed the right number : ");
            break
        } else {
            alert("Please enter a number : ");
        }
        attempts++;
    }
    alert(`Your attempts to correctly guess were : ${attempts}`)
}

function questioning() : any {
    while (true) {
        var play: string|null = prompt("Wanna play a number guessing game?(Y/N) : ")
        if (typeof play === "string") {
            if (play.toLowerCase() === "y") {
                numberGuess();
            } else if (play.toLowerCase() === "n") {
                alert("Alrighty then... see you next time.");
                break;
            } else {
                alert("Dude common... I said 'y' or 'n'. Lets try it again");
            }
        }

    }
}
questioning()

export { questioning }