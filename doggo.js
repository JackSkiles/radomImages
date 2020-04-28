
const button = document.getElementById("dog");

const body = document.getElementById("bod");

const selector = document.getElementById("select");

// $.get('https://dog.ceo/api/breeds/list').then(function (data) {
//     for (let i = 0; i <= data.length; i++) {
//         const selector = document.getElementById("select");
//         const option1 = document.createElement("option");
//         option1.setAttribute('src', data[i]);
//         console.log(option1);
//         selector.appendChild(option1);
//     }
// })


function buttonPress() {
    button.innerHTML = "Generating doggo.."
    $.get('https://dog.ceo/api/breeds/image/random')
    .then(function (data) {
        const cont = document.getElementById("picCont");
        const img = document.createElement('img');
        img.setAttribute('src', data.message);
        cont.appendChild(img);
        button.innerHTML = "generate doggo";
    })
}


button.addEventListener('click', buttonPress);

window.addEventListener('DOMContentLoaded', function(){
    $.get('https://dog.ceo/api/breeds/list')
        .then(function(data) {
            const breeds = data.message;
            for (let i = 0; i <= breeds.length; i++) {
                const option1 = document.createElement("option");
                option1.setAttribute('value', breeds[i]);
                option1.textContent = breeds[i];
                console.log(option1);
                selector.appendChild(option1);
            }
        })
})