const key = "46877a85a6511586357a92753126e96d"

//Função para pegar os dados de retorno da API e trocar as informações dos elementos da tela
///innerHTML é o texto dentro da tag
function DadosNaTela(dados) {
    document.querySelector('.cidade').innerHTML         = "Tempo em " + dados.name
    document.querySelector('.temp').innerHTML           = Math.floor(dados.main.temp)+"ºC"
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML        = "Umidade: "+dados.main.humidity+"%"
    document.querySelector('.img-previsao').src         = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 
}

//Espera a resposta do servidor e retorna os dados da API
async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())    

    DadosNaTela(dados)
}


//Pega o nome da cidade e passa para a função que ira fazer a requisição da API 
function clickBotao() {
    const cidade = document.querySelector('.input-cidade').value

    buscarCidade(cidade)
}