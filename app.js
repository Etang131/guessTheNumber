// Steps to build the game

// Set a random number
// check the number to see if it is above, below, or the same as the number
// display score when checking the button
// reset the game with button


// document.getElementById('message').textContent = 'Correct Number!';
// document.getElementById('number').textContent = 13;
// document.getElementById('score').textContent = 10;

// document.getElementById('guess').value = 10;

let secreatNumber = Math.trunc(Math.random() * 20) + 1;
//document.getElementById('number').textContent = secreatNumber;

let score = Number(document.getElementById('score').textContent);
let highscore = 0;


const displayMessage = function(message) {
    document.querySelector('#message').textContent = message;
}



// Start the game

document.getElementById('checkNumber').addEventListener('click', function(){
    const guess = Number(document.querySelector('#guess').value);
    console.log(guess, typeof(guess));
    
    // There is no guess
    if(!guess) {
       // document.getElementById('message').textContent = 'No number!';
        displayMessage('No number!');

        // Player wins the game
    } else if (guess === secreatNumber) {
       // document.getElementById('message').textContent = "You guessed the number!";
       displayMessage("You guessed the number!");
        document.querySelector('.container').style.backgroundColor = '#60b347'; 
        document.querySelector('#number').style.fontSize = '12rem';
        document.querySelector('.mysteryNumberSection').style.width = '250px';
        document.getElementById('number').textContent = secreatNumber;
        
        if(score > highscore) {
            highscore = score;
            document.getElementById('highScore').textContent = highscore;
        }
        
        
       // When guess is wrong 
    } else if(guess !== secreatNumber) {
        if (score > 1) {
            // document.getElementById('message').textContent = guess > secreatNumber ? "Guess is too High!" : "Guess is too low!";
            displayMessage(guess > secreatNumber ? "Guess is too High!" : "Guess is too low!");
            score = score - 1; 
        document.getElementById('score').textContent = score;
        } else {
            //document.getElementById('message').textContent = 'You lost the game!';
            displayMessage('You lost the game!');
            document.getElementById('score').textContent = 0;
        }
    }


// // Guess is too high
//     } else if (guess > secreatNumber) { 
//         if (score > 1) {
//             document.getElementById('message').textContent = "Guess is too High!";
//             score = score - 1; 
//         document.getElementById('score').textContent = score;
//         } else {
//             document.getElementById('message').textContent = 'You lost the game!';
//             document.getElementById('score').textContent = 0;
//         }

//         // Guess is too low
//     }  else if (guess < secreatNumber) {
//         if (score > 1) {
//         document.getElementById('message').textContent = "Guess is too low!";
//         score = score - 1;
//         document.getElementById('score').textContent = score;
//         } else {
//             document.getElementById('message').textContent = 'You lost the game!';
//             document.getElementById('score').textContent = 0;  
//         }
//     } 
});


// Play again
document.getElementById('reset').addEventListener('click', function(){
  score = 20;
  secreatNumber = Math.trunc(Math.random() * 20) + 1;
  //document.getElementById('message').textContent = "Start guesing...";
  displayMessage('start guesing...');
document.getElementById('score').textContent = score;
document.getElementById('number').textContent = '?';
document.querySelector('#guess').value = '';

  document.querySelector('.container').style.backgroundColor = 'black'; 
  document.querySelector('#number').style.fontSize = '6rem';
  document.querySelector('.mysteryNumberSection').style.width = '160px';

})
