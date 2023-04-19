const main1 = document.querySelector(".main1")
const main2 = document.querySelector(".main2")
const cookieTry = document.querySelector("#cookie")
const cookieReset = document.querySelector("#btnReset")
const cookieText = document.querySelector("fieldset")
let randomNumber = Math.round(Math.random() * 10);
const cookiePhrases = ["Espere pelo mais sábio dos conselhos: o tempo.","Todas as coisas são difíceis antes de se tornarem fáceis.","Se você se sente só é porque construiu muros ao invés de pontes.","Deixe de lado as preocupações e seja feliz.","A maior barreira para o sucesso é o medo do fracasso.","A inspiração vem dos outros. A motivação vem de dentro de nós.","Realize o óbvio, pense no improvável e conquiste o impossível.","Não importa o tamanho da montanha, ela não pode tapar o sol.","A vida trará coisas boas se tiver paciência."]


cookieTry.addEventListener('click', main2Display)
cookieReset.addEventListener('click', main1Display)
document.addEventListener('keydown', function(e){
    if(e.key == 'Enter' && main1.classList.contains('none')) {
        handleResetClick()
    }
})

function main1Display() {
    document.querySelector(".main1").style.display = "flex"
    document.querySelector(".main2").style.display = "none"
}

function main2Display() {
    document.querySelector(".main2").style.display = "flex"
    document.querySelector(".main1").style.display = "none"
    cookieText.innerText = cookiePhrases[getRandomInt(cookiePhrases.length - 1)];
}

function getRandomInt(max) {
    return Math.round(Math.random() * max);
}  
