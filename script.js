

function startGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('guess').value = '';
    document.getElementById('guess').disabled = false;
    document.getElementById('restart').style.display = 'none';
}

document.getElementById('submit').addEventListener('click', function() {
    const guessInput = document.getElementById('guess');
    const guess = Number(guessInput.value);
    attempts++;

    const messageElement = document.getElementById('message');
    const attemptsElement = document.getElementById('attempts');

    if (guess < 1 || guess > 100 || isNaN(guess)) {
        messageElement.textContent = "Palun sisesta number vahemikus 1-100.";
        messageElement.className = '';
    
    } else if (guess < numberToGuess) {
        messageElement.textContent = "Liiga madal! Proovi uuesti.";
        messageElement.className = 'too-low';
     } 
    
     else if (guess > numberToGuess) {
        messageElement.textContent = "Liiga kõrge! Proovi uuesti.";
        messageElement.className = 'too-high';
    } 
    
    else {
        messageElement.textContent = `Palju õnne! Sa arvasid numbri ära ${numberToGuess} ${attempts} katsega.`;
        messageElement.className = 'correct';
        guessInput.disabled = true;
        document.getElementById('restart').style.display = 'block';
    }

    attemptsElement.textContent = `Katsete arv: ${attempts}`;
    guessInput.value = '';
});

document.getElementById('restart').addEventListener('click', startGame);


startGame();

