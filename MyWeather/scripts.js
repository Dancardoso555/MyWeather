


const key ="417e8d845966bcd239d81d3942cc9824"

function colocardadosnatela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML =  Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img_previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}


async function busca(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade }&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    
    colocardadosnatela(dados)


}


function pesquisaBotao(){
    const cidade = document.querySelector(".input-cidade").value

    busca(cidade)
}