//VARIAVEIS GLOBAIS DO PROJETO
//Dados de entrada
var btCalcular = document.getElementById("botao-calcular");

function botaoCalcular(){
    var valorInicial = document.getElementById("valor-inicial").value;
    var valorMensal = document.getElementById("valor-mensal").value;
    var taxaRentabilidade = document.getElementById("taxa-rentabilidade").value;
    var tempoRentabilidade = document.getElementById("tempo-rentabilidade").value;
    var taxaInflacao = document.getElementById("taxa-inflacao").value;
    var tempoInflacao = document.getElementById("tempo-inflacao").value;
    var periodoInvestimento = document.getElementById("periodo-investimento").value;
    var tempoInvestimento = document.getElementById("tempo-investimento").value;
    //console.log(valorInicial + "-" + valorMensal + "-" + TaxaRentabilidade + "-" + TempoRentabilidade + "-" + TaxaInflacao + "-" + TempoInflacao + "-" + TaxaInvestimento + "-" + TempoInvestimento);

    //CÁLCULO VALOR FUTURO:  
    //valorFuturo = valorMensal * (((1 + taxaRentabilidade) ** tempoRentabilidade - 1) / taxaRentabilidade) * (1 + taxaRentabilidade);
    valorFuturo = 500 * (((1 + 0.12) ** 12 - 1) / 12) * (1 + 12);
    console.log(valorFuturo.toFixed(2));
}

