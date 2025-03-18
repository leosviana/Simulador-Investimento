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

    //TAXA RENTABILIDADE (ANUAL/MENSAL):
    var taxaRentabilidade = 12;
    var taxaRentabilidadeMensal = (1 + (taxaRentabilidade / 100)) / 12;
    console.log("taxaRentabilidadeMensal: " + taxaRentabilidadeMensal.toFixed(6));

    //TAXA INFLAÇÃO (ANUAL/MENSAL):
    var taxaInflacao = 5;
    var taxaInflacaoMensal = (1 + (taxaInflacao / 100)) ** (1 / 12) - 1;
    //valorFuturo = 500 * (((1 + 0.12) ** 12 - 1) / 12) * (1 + 12);
    console.log("taxaInflacaoMensal: " + taxaInflacaoMensal.toFixed(6));

    //TAXA RENTABILIDADE REAL:
    var taxaRealMensal = (1 + taxaRentabilidadeMensal) / (1 + taxaInflacaoMensal) - 1;
    console.log("taxaRealMensal: " + taxaRealMensal.toFixed(6));

    //RENTABILIDADE REAL:
    //VF = P * (((1 + taxaRealMensal) ** n - 1) / taxaRealMensal);
    var ValorMensal = 500;
    var numeroMeses = 12;
    var valorFuturo = ValorMensal * (((1 + taxaRentabilidadeMensal) ** numeroMeses - 1) / taxaRentabilidadeMensal);
    console.log("valorFuturo: " + valorFuturo.toFixed(2));


    //CÁLCULO VALOR FUTURO:  
    //valorFuturo = valorMensal * (((1 + taxaRentabilidade) ** tempoRentabilidade - 1) / taxaRentabilidade) * (1 + taxaRentabilidade);

}

