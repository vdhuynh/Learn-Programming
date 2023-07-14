// Define the 3 functions here

function getNumberOfChars(name) {
    return name.length;
}

function getLower(name) {
    return name.toLowerCase();
}

function getUpper(name) {
    return name.toUpperCase();
}



// -------------
// code for project - do not change
// -------------
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");

let name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
    answer1.textContent = getNumberOfChars(name.value);
    answer2.textContent = getLower(name.value);
    answer3.textContent = getUpper(name.value);
});
