const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["weird", "cool", "interesting", "hard", "easy", "challenging", "problematic", "fun", "life", "awesome", "fast", "efficient"];
const typingDelay = 200;
const erasingDelay = 100;
const newLetterDelay = 2000;

let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    if (words.length) {
        setTimeout(typeText, newLetterDelay);
    }
});

function typeText() {
    if (charIndex < words[index].length) {
        typedText.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingDelay);
    } else {
        setTimeout(erase, newLetterDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        index++;
        if (index >= words.length) {
            index = 0;
        }
        setTimeout(typeText, typingDelay + 1000);
    }
}

setInterval(() => {
    cursor.classList.toggle("active");
}, 500);
