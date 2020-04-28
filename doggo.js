
const button = document.getElementById("dog");

function buttonPress() {
    button.innerHTML = "Generating doggo.."
}

button.addEventListener('click', buttonPress);