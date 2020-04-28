
const button = document.getElementById("dog");

const body = document.getElementById("bod");


function buttonPress() {
    button.innerHTML = "Generating doggo.."
    $.get('https://dog.ceo/api/breeds/image/random')
    .then(function (data) {
        const cont = document.getElementById("picCont");
        const img = document.createElement('img');
        img.setAttribute('src', data.message);
        cont.appendChild(img);
    })
}

button.addEventListener('click', buttonPress);