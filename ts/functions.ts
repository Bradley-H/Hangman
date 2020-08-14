function displayWord() {
  word.innerHTML = `${selectedWord
    .split("")
    .map(
      (letter) =>
        `<span class="letter"> ${
          correctLetters.includes(letter) ? letter : ""
        }</span>`
    )
    .join("")}
    `;
  let innerWord = word.innerText.replace(/\n/g, "");
  if (innerWord === selectedWord) {
    finalMessage.innerText = "Good work! You won";
    popup.style.display = "flex";
  }
}

function showNotification() {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 1500);
}

function updateWrongLetters() {
  // SHOW THE WRONG LETTERS//
  wrong.innerHTML = `${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
  ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;
  // SHOW FIGURE PARTS //
  figure.forEach((part, i) => {
    const errors = wrongLetters.length;

    i < errors ? (part.style.display = "block") : (part.style.display = "none");
  });

  // CHECK IF LOST //
  if (wrongLetters.length === figure.length) {
    finalMessage.innerHTML = "Sadly, you lost :(";
    popup.style.display = "flex";
  }
}

displayWord();
