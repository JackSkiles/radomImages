
const button = document.getElementById("dog");

const body = document.getElementById("bod");

const cont = document.getElementById("picCont");

function buttonPress() {
    button.innerHTML = "Generating doggo.."
    $.get('https://dog.ceo/api/breeds/image/random')
    .then(function (data) {
        const img = document.createElement('img');
        img.setAttribute = ('src', data.message);
        cont.appendChild(img);
    })
    //     console.error(data);
    //     console.log(data);
    //     console.info(data);
    // })
    // .catch(function(error) {
        //     console.error(error);
        // })
}

button.addEventListener('click', buttonPress);