"use strict";
var words = [
    "applications",
    "programmer",
    "anime",
    "wizard",
    "master",
];
var selectedWord = words[Math.floor(Math.random() * words.length)];
var correctLetters = [];
var wrongLetters = [];
var playAgainBTN = document.getElementById("play-again");
var word = document.getElementById("word");
var wrong = document.getElementById("wrong-letters");
var popup = document.getElementById("popup-container");
var notification = (document.getElementById("notification-container"));
var finalMessage = (document.getElementById("final-message"));
var figure = document.querySelectorAll(".figure-part");
window.addEventListener("keydown", function (e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        var letter = e.key;
        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            }
            else {
                showNotification();
            }
        }
        else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                updateWrongLetters();
            }
            else {
                showNotification();
            }
        }
    }
});
playAgainBTN.addEventListener("click", function () {
    correctLetters = [];
    wrongLetters = [];
    selectedWord = words[Math.floor(Math.random() * words.length)];
    displayWord();
    updateWrongLetters();
    popup.style.display = "none";
});
function displayWord() {
    word.innerHTML = selectedWord
        .split("")
        .map(function (letter) {
        return "<span class=\"letter\"> " + (correctLetters.includes(letter) ? letter : "") + "</span>";
    })
        .join("") + "\n    ";
    var innerWord = word.innerText.replace(/\n/g, "");
    if (innerWord === selectedWord) {
        finalMessage.innerText = "Good work! You won";
        popup.style.display = "flex";
    }
}
function showNotification() {
    notification.classList.add("show");
    setTimeout(function () {
        notification.classList.remove("show");
    }, 1500);
}
function updateWrongLetters() {
    wrong.innerHTML = (wrongLetters.length > 0 ? "<p>Wrong</p>" : "") + "\n  " + wrongLetters.map(function (letter) { return "<span>" + letter + "</span>"; }) + "\n  ";
    figure.forEach(function (part, i) {
        var errors = wrongLetters.length;
        i < errors ? (part.style.display = "block") : (part.style.display = "none");
    });
    if (wrongLetters.length === figure.length) {
        finalMessage.innerHTML = "Sadly, you lost :(";
        popup.style.display = "flex";
    }
}
displayWord();
