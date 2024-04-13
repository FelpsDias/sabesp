let enviar = document.querySelector('.butEnv');
let resposta = document.querySelector('.resposta');

enviar.addEventListener('click', function(e) {
    // Capturando os valores dos campos de entrada
    let leituraAtual = parseFloat(document.querySelector('.leAt').value);
    let leituraTace = parseFloat(document.querySelector('.leTace').value);
    let diaAtual = parseFloat(document.querySelector('.diaAtual').value);
    let diaConta = parseFloat(document.querySelector('.diaTace').value);

    // Calculando o consumo entre leituras e dias entre leituras
    let consumoEntreLeituras = leituraAtual - leituraTace;
    let diasEntreLeituras = diaAtual - diaConta;

    // Calculando o consumo diário e o resultado mensal
    let consumoDiario = consumoEntreLeituras / diasEntreLeituras;
    let consumoResultado = consumoDiario * 30;
  if(!leituraAtual){
    resposta.innerHTML = '';
  }else {resposta.innerHTML = `Resultado do consumo projetado ${consumoResultado} `;
  }
});
