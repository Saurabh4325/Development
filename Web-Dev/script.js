let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor"); // Corrected the selector

let arr = [stone, paper, scissor];

stone.addEventListener("click", function () {
    let computerIndex = Math.floor(Math.random() * arr.length); // Generate a random index
    let computerChoice = arr[computerIndex]; // Get the computer's choice from the array

    if (stone === computerChoice) {
        alert("Match! Computer chose stone.");
    }  
    else {
        alert("No match!");
    }

});
paper.addEventListener("click", function () {
    let computerIndex = Math.floor(Math.random() * arr.length); // Generate a random index
    let computerChoice = arr[computerIndex]; // Get the computer's choice from the array

    if (paper === computerChoice) {
        alert("Match! Computer chose stone.");
    }  
    else {
        alert("No match!");
    }

});
scissor.addEventListener("click", function () {
    let computerIndex = Math.floor(Math.random() * arr.length); // Generate a random index
    let computerChoice = arr[computerIndex]; // Get the computer's choice from the array

    if (scissor === computerChoice) {
        alert("Match! Computer chose stone.");
    }  
    else {
        alert("No match!");
    }

});
