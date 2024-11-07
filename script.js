const colors = ['punane', 'sinine', 'roheline', 'kollane', 'must', 'valge', 'lilla', 'pruun', 'hall', 'beež', 'oranž'];
let selectedColor = colors[Math.floor(Math.random() * colors.length)];
let attempts = 0;
const feedbackMessage = document.getElementById('feedbackMessage');
const attemptsMessage = document.getElementById('attemptsMessage');
const resetButton = document.getElementById('resetButton');

function handleColorClick(color) {
    attempts += 1;
    console.log("värvid", color, selectedColor)
    if (color === selectedColor) {
        feedbackMessage.textContent = `Õige! Arvasid värvi ära!`;
        attemptsMessage.textContent = `Sinu katsete arv: ${attempts}`;
        resetButton.style.display = 'inline-block';
    } else {
        feedbackMessage.textContent = `Vale värv, proovi uuesti!`;
        attemptsMessage.textContent = `Katsete arv: ${attempts}`;
    }
}
document.getElementById('punane').addEventListener('click', () => handleColorClick('punane'));
document.getElementById('sinine').addEventListener('click', () => handleColorClick('sinine'));
document.getElementById('roheline').addEventListener('click', () => handleColorClick('roheline'));
document.getElementById('kollane').addEventListener('click', () => handleColorClick('kollane'));
document.getElementById('must').addEventListener('click', () => handleColorClick('must'));
document.getElementById('valge').addEventListener('click', () => handleColorClick('valge'));
document.getElementById('lilla').addEventListener('click', () => handleColorClick('lilla'));
document.getElementById('pruun').addEventListener('click', () => handleColorClick('pruun'));
document.getElementById('hall').addEventListener('click', () => handleColorClick('hall'));
document.getElementById('beež').addEventListener('click', () => handleColorClick('beež'));
document.getElementById('oranž').addEventListener('click', () => handleColorClick('oranž'));

resetButton.addEventListener('click', function () {
    selectedColor = colors[Math.floor(Math.random() * colors.length)];
    attempts = 0;
    feedbackMessage.textContent = '';
    attemptsMessage.textContent = '';

});


