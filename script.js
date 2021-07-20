let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock(){
    let now = new Date(); //classe usada p manipulação de data
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${hour}:${minute}:${second}`;

}

setInterval(updateClock, 1000) //de 1 em 1seg ele irá executar essa func