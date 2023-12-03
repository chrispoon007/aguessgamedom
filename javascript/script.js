document.addEventListener("DOMContentLoaded", function () {
    var startButton = document.getElementById('start');
    var resetButton = document.getElementById('reset');
    var guessForm = document.getElementById('guessForm');
    var output = document.getElementById('result');
    var randomNumber;
    var attempts;
    var maxAttempts;

    startButton.addEventListener('click', startGame);
    resetButton.addEventListener('click', resetGame);
    guessForm.addEventListener('submit', checkGuess);

    function startGame(e) {
        e.preventDefault();
        let textmaxnum = document.getElementById('inputmax');
        let textmaxnum1 = parseInt(textmaxnum.value);
        maxAttempts = parseInt(document.getElementById('inputAttempts').value);

        var regex = /^\d+$/;

        if (!regex.test(textmaxnum.value) || !regex.test(maxAttempts)) {
            document.getElementById('result').innerText = 'Please enter Positive Integers (Whole Numbers) for both fields';
            return;  
        }

        randomNumber = Math.floor(Math.random() * textmaxnum1);
        attempts = 0;
        document.getElementById('result').innerText = 'Game Started. Make a guess!';
        textmaxnum.setAttribute("disabled", true);
        document.getElementById('inputAttempts').setAttribute("disabled", true);
        startButton.setAttribute("disabled", true);

        resetButton.style.display = 'block';
        guessForm.style.display = 'block'
    }

    function resetGame(e) {
        e.preventDefault();
        let textmaxnum = document.getElementById('inputmax');
        textmaxnum.removeAttribute("disabled");
        document.getElementById('inputAttempts').removeAttribute("disabled");
        startButton.removeAttribute("disabled");
        document.getElementById('result').innerText = 'Click the Start Game button to begin';

        resetButton.style.display = 'none';
        guessForm.style.display = 'none';
    }

    function checkGuess(e) {
        e.preventDefault();
        let userGuess = parseInt(document.getElementById('userGuess').value);
        if (isNaN(userGuess)) {
            output.innerText = 'Please enter a number.';
        } else if (userGuess < 0 || userGuess > parseInt(document.getElementById('inputmax').value)) {
            output.innerText = 'Please enter a number within the range.';
        } else if (userGuess < randomNumber) {
            output.innerText = 'Too low!';
            attempts++;
        } else if (userGuess > randomNumber) {
            output.innerText = 'Too high!';
            attempts++;
        } else {
            output.innerText = 'Congratulations! You found the number!';
        }
        if (attempts < maxAttempts && userGuess != randomNumber) {
            output.innerText += ' You have ' + (maxAttempts - attempts) + ' attempts left.';
        } else if (attempts >= maxAttempts) {
            output.innerText += ' No more attempts left. Game Over. :( \nThe Number was ' + (randomNumber) + '!';
            guessForm.style.display = 'none';
        }
    }
    
});
