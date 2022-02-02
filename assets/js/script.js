  
/**
 * Animate Text on Home Page.
 * Animates Are you Ready for A  text on the hero home page, adapted to site
 * -credit https://codepen.io/bulldogpatch-the-sasster/pen/JjoyeGg.
 */ /*jshint esversion: 6 */
const text = document.querySelector(".heading-hero, heading-hero-line");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

// Random fact Generator.

// Define Varaibles and elements for fact generator.It will generate a new fact every time pressed.
let btn = document.getElementById("btn");
let output = document.getElementById("fact");
let facts =
    // Create an array an of random facts
    [
        'Tic Tac mints are named after the sound their container makes.',
        'The largest volcano in the solar system is three times taller than Mount Everest.',
        'The world record for the tallest stack of doughnuts totaled more than 3,000.',
        'The fastest gust of wind ever recorded on Earth was 253 miles per hour.',
        'The Canary Islands are named after dogs, not birds.',
        'Four babies are born every second.',
        'There are around 4 quadrillion quadrillion bacteria on Earth.',
        'There are 43 countries that still have a royal family.',
        'All giant pandas in zoos around the world are on loan from China.',
        'Bats are the only mammal that can actually fly.',
        'Like humans, koalas actually have unique individual fingerprints',
        'Australia is wider than the moon.',
        'Humans are the only animals on earth with chins.',
        'More than 480million people have played Monopoly.',
        'A bolt of lightning is five times hotter than the sun.',
        'Dogs hearing is 10 times better than a humans.',
        'There are more stars in space than there are grains of sand on a beach.',
        'A shark is the only known fish that can blink with both eyes',

    ];
// Add an event lister with a function when clicked that will generate randon fact.
btn.addEventListener('click', function () {
    let randomFacts = facts[Math.floor(Math.random() * facts.length)];
    output.innerHTML = randomFacts;
});