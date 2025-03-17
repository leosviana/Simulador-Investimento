//VARIAVEIS GLOBAIS DO PROJETO
//Dados de entrada
//var valorInicial; //Valor Inicial
var btCalcular = document.getElementById("botao-calcular");


function botaoCalcular(){
    var valorInicial = document.getElementById("valor-inicial").value;
    var valorMensal = document.getElementById("valor-mensal").value;
    var TaxaRentabilidade = document.getElementById("taxa-rentabilidade").value;
    var TempoRentabilidade = document.getElementById("tempo-rentabilidade").value;
    var TaxaInflacao = document.getElementById("taxa-inflacao").value;
    var TempoInflacao = document.getElementById("tempo-inflacao").value;
    console.log(valorInicial);
    console.log(valorMensal);
    console.log(TaxaRentabilidade);
    console.log(TempoRentabilidade);
    console.log(TaxaInflacao);
    console.log(TempoInflacao);
}

