//VARIAVEIS GLOBAIS DO PROJETO
//Dados de entrada
var btCalcular = document.getElementById("botao-calcular");

function botaoCalcular(){
    var valorInicial = document.getElementById("valor-inicial").value;
    var valorMensal = document.getElementById("valor-mensal").value;
    var TaxaRentabilidade = document.getElementById("taxa-rentabilidade").value;
    var TempoRentabilidade = document.getElementById("tempo-rentabilidade").value;
    var TaxaInflacao = document.getElementById("taxa-inflacao").value;
    var TempoInflacao = document.getElementById("tempo-inflacao").value;
    var TaxaInvestimento = document.getElementById("taxa-investimento").value;
    var TempoInvestimento = document.getElementById("tempo-investimento").value;
    console.log(valorInicial + "-" + valorMensal + "-" + TaxaRentabilidade + "-" + TempoRentabilidade + "-" + TaxaInflacao + "-" + TempoInflacao "-" + TaxaInvestimento + "-" + TempoInvestimento);
}

