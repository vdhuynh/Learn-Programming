// Define the function here

function getMessage(number) {
    if (number < 0) {
        return "Invalid number";
    }
    if (number === 0) {
        return "You don't have any items in your shopping list";
    }
    if (number === 1) {
        return "You have one item in your shopping list";
    }
    if (number > 1) {
        return "You have more than 1 item in your shopping list";
    }
}



// -------------
// code for project - do not change
// -------------
let itemsCount = document.querySelector("#items-count");

function renderMessage() {
    let value = Number.parseInt(itemsCount.value, 10)
    let message = getMessage(value)
    document.querySelector("#message").textContent = message
}

document.querySelector("#add-item").addEventListener("click", function() {
    itemsCount.value = Number.parseInt(itemsCount.value, 10) + 1;
    renderMessage();
});

document.querySelector("#sub-item").addEventListener("click", function () {
    itemsCount.value = Number.parseInt(itemsCount.value, 10) - 1;
    renderMessage();
});

// the first time the page loads
if (typeof getMessage !== "undefined") {
    renderMessage();
}
