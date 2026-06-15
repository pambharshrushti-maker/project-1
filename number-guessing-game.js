let playAgain = true;

while (playAgain) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let maxAttempts = 10;
    let guessedCorrectly = false;

    alert("Guess the Number Between 1 and 100");

    while (attempts < maxAttempts) {
        let userInput = prompt(`Attempt ${attempts + 1}/${maxAttempts}\nEnter your guess:`);

        // Check for invalid input
        if (userInput === null) {
            alert("Please enter a number.");
            continue;
        }

        let guess = Number(userInput);

        if (isNaN(guess)) {
            alert("Invalid input! Please enter a valid number.");
            continue;
        }

        if (guess < 1 || guess > 100) {
            alert("Please enter a number between 1 and 100.");
            continue;
        }

        attempts++;

        if (guess > randomNumber) {
            alert("Too High!");
        } 
        else if (guess < randomNumber) {
            alert("Too Low!");
        } 
        else {
            alert(`🎉 Congratulations! You Win!\nYou guessed the number in ${attempts} attempts.`);
            guessedCorrectly = true;
            break;
        }
    }

    if (!guessedCorrectly) {
        alert(`❌ Game Over!\nThe correct number was ${randomNumber}`);
    }

    let choice = prompt("Do you want to play again? (Yes/No)");

    if (
        choice === null ||
        choice.toLowerCase() !== "yes"
    ) {
        playAgain = false;
        alert("Thank You for Playing!");
    }
}