// PLAY AGAIN BUTTON //
const playAgainBTN = <HTMLButtonElement>document.getElementById("play-again")!;
// THE SELECTED WORD //
const word = <HTMLDivElement>document.getElementById("word")!;
// THE WRONG LETTERS //
const wrong = <HTMLDivElement>document.getElementById("wrong-letters")!;
// THE POPUP //
const popup = <HTMLDivElement>document.getElementById("popup-container")!;

// NOTIFICATIONS //
const notification = <HTMLDivElement>(
  document.getElementById("notification-container")!
);

// END GAME MESSAGE //
const finalMessage = <HTMLHeadingElement>(
  document.getElementById("final-message")!
);

// THE SVG MAN //
const figure = <unknown>document.querySelectorAll(".figure-part")!;
