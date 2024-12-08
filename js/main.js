// creating an array of qoutes
var quotes = [
    "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” \n-- Ralph Waldo Emerson",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” \n -- Albert Einstein",
    "“Always forgive your enemies; nothing annoys them so much.” \n -- Oscar Wilde",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.” \n -- Mahatma Gandhi",
    "“A friend is someone who knows all about you and still loves you.” \n -- Elbert Hubbard",
    "“Be yourself; everyone else is already taken.” \n -- Oscar Wilde",
    "“You only live once, but if you do it right, once is enough.” \n -- Mae West",
    "“It's not what happens to you, but how you react to it that matters.” \n -- Epictetus",
    "“Be the change that you wish to see in the world.”-- Mahatma Gandh"
];

//  used to keep track of the index of the last displayed quote.
var prevIndex = -1;
// When the button is clicked, the function inside this block will run.
document.getElementById("new-quote").onclick = function () {
    // loop ensures that the same quote does not get shown again
    var randomIndex;
    do {
        randomIndex =Math.floor( Math.random() * quotes.length);
    } while (randomIndex === prevIndex);
    prevIndex = randomIndex;
    // the text content is updated to be equal to te randomindex generated
    document.getElementById("quote").textContent = quotes[randomIndex];
};
// Math.random() generates a random decimal number between 0 and 1 so we are generation a random between 0 and length of qoute i provided
//  When the button is clicked, a random index is selected.It compares that index with the previous index (-1) if the random index is the same as the previous index it keeps generating a new random index until it's diff.
// The previndex is then updated to the new random index to ensure that the new click is diff .