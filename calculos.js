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
    var taxaRentabilidadeMensal = (1 + (taxaRentabilidade / 100)) ** (1 / 12) - 1;
    console.log("taxaRentabilidadeMensal: " + taxaRentabilidadeMensal.toFixed(6));

    //TAXA INFLAÇÃO (ANUAL/MENSAL):
    var taxaInflacao = 5;
    var taxaInflacaoMensal = (1 + (taxaInflacao / 100)) ** (1 / 12) - 1;
    console.log("taxaInflacaoMensal: " + taxaInflacaoMensal.toFixed(6));

    //TAXA RENTABILIDADE REAL:
    var taxaRealMensal = (1 + taxaRentabilidadeMensal) / (1 + taxaInflacaoMensal) - 1;
    console.log("taxaRealMensal: " + taxaRealMensal.toFixed(6));

    //RENTABILIDADE REAL:
    //VF = P * (((1 + taxaRealMensal) ** n - 1) / taxaRealMensal);
    var ValorMensal = 500;
    var periodoInvestimento = 12;
    var resultValorFuturo = ValorMensal * (((1 + taxaRentabilidadeMensal) ** periodoInvestimento - 1) / taxaRentabilidadeMensal);
    console.log("valorFuturo: " + resultValorFuturo.toFixed(2));

    //VALOR INVESTIDO:
    var resultValorInvestido = ValorMensal * periodoInvestimento;
    console.log("resultValorInvestido: " + resultValorInvestido.toFixed(2));

    //VALOR EM JUROS (MENSAL / ANUAL):
    //Mensal:
    

    //Anual:
    var resultValorJuros = resultValorFuturo - resultValorInvestido;
    console.log("resultValorJuros: " + resultValorJuros.toFixed(2));

    //IMPOSTO DE RENDA:
    var taxaIR = 0.20; //20%
    var resultValorIR = resultValorJuros * taxaIR;
    console.log("IR: " + resultValorIR.toFixed(2));

    //VARLOR TOTAL LÍQUIDO:
    var resultValorLiquido = resultValorFuturo - resultValorIR;
    console.log("resultValorLiquido: " + resultValorLiquido.toFixed(2));

    //VALOR PRESENTE DA RENDA PERPÉTUA:

}

