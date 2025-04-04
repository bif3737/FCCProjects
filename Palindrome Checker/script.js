const inputHTML = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const displayResult = document.getElementById("result");

function checkEntry() {
    const input = inputHTML.value;
    const filteredString = input.replace(/[^a-zA-Z0-9]/g, '');
    const reverseInput = filteredString.split("").reverse().join(""); 
    if (input === "") {
        alert("Please input a value");
    } else if (filteredString.toLowerCase() === reverseInput.toLowerCase()) {
        displayResult.innerText = `\n ${input} is a palindrome`;
    } else {
        displayResult.innerText = `\n ${input} is not a palindrome`;
    }
}
checkButton.addEventListener("click", checkEntry);