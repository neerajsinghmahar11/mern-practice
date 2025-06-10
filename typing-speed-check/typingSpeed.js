const typingText = document.querySelector(".typing-text p");
const input = document.querySelector(".wrapper .input-field");
const time = document.querySelector(".time span b");
const mistakes = document.querySelector(".mistake span");
const wpm = document.querySelector(".wpm span");
const cpm = document.querySelector(".cpm span");
const button = document.querySelector(".button");

//set value
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph() {
  const paragraph = [
    "The cat jumped swiftly onto the table, knocking over glasses.",
    "Rain poured heavily as thunder echoed through the silent night.",
    "Books lined every wall, creating a maze of paper stories.",
    "Children played soccer, shouting joyfully under the setting summer sun.",
    "She whispered secrets into the wind, hoping for answers.",
    "The ship sailed quietly, moonlight dancing on the calm water.",
    "Birds chirped loudly while the dog barked at passing squirrels.",
    "Time slipped away unnoticed, leaving behind echoes of forgotten dreams.",
    "He searched everywhere, but the keys remained lost forever.",
  ];

  const randomIndex = Math.floor(Math.random() * paragraph.length);
  typingText.innerHTML = "";

  for (const char of paragraph[randomIndex]) {
    console.log(char);
    typingText.innerHTML += `<span>${char}<span/>`;
  }

  typingText.querySelectorAll("span")[0].classList.add("active");
}

//handle user input
function initTyping() {
  const char = typingText.querySelectorAll("span");
  const typedChar = input.value.charAt(charIndex);

  if (charIndex < char.length && timeLeft > 0) {
    if (char[charIndex].innerText === typedChar) {
      char[charIndex].classList.add("correct");
      console.log("correct");
      console.log(typedChar);
      console.log(char[charIndex].innerText);
    } else {
        mistake++
      char[charIndex].classList.add("incorrect");
      console.log(char[charIndex].innerText);
      console.log(typedChar);
      console.log("incorrect");
    }
    charIndex++;
  }
}

input.addEventListener("input", initTyping);
loadParagraph();
