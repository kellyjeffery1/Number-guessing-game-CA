let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

console.log(generateTarget());

const compareGuesses = (humanGuess, computerGuess, secretTargetNum) => {
    const humanDiff = Math.abs(humanGuess - secretTargetNum);
    const computerDiff = Math.abs(computerGuess - secretTargetNum);
    if (humanDiff <= computerDiff) {
        return true;
    } else {
        return false;
    };
};

console.log(compareGuesses(3, 6, 4));

const updateScore = (winner) => {
    if ('human' === winner) {
        return humanScore++;
    } else if ('computer' === winner) {
        return computerScore++;
    };
};

console.log(updateScore('human'));
console.log(updateScore('computer'));

const advancedRound = () => {
    return currentRoundNumber++;
};

console.log(advancedRound());