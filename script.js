const element = document.getElementById("ending-word");

const words = [
    "The Beninggining",
    "The Beningining",
    "The Benigining",
    "The Begining",
    "The Beginning"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {

    const current = words[wordIndex];

    if (!deleting) {

        element.textContent = current.substring(0, charIndex);

        charIndex++;

        if (charIndex > current.length) {

            deleting = true;

            // Pause after finishing the word
            setTimeout(type, 1200);
            return;
        }

    } else {

        element.textContent = current.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

            charIndex = 0;
        }

    }

    setTimeout(type, deleting ? 40 : 80);
}

type();