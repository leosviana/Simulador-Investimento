//VARIAVEIS GLOBAIS DO PROJETO
//Dados de entrada
var btCalcular = document.getElementById("botao-calcular");

function botaoCalcular(){
    var valorInicial = parseFloat(document.getElementById("valor-inicial").value) || 0;
    var valorMensal = parseFloat(document.getElementById("valor-mensal").value) || 0;
    var taxaRentabilidade = parseFloat(document.getElementById("taxa-rentabilidade").value) || 0;
    var tempoRentabilidade = parseInt(document.getElementById("tempo-rentabilidade").value) || 0;
    var taxaInflacao = parseFloat(document.getElementById("taxa-inflacao").value) || 0;
    var tempoInflacao = parseInt(document.getElementById("tempo-inflacao").value) || 0;
    var periodoInvestimento = parseFloat(document.getElementById("periodo-investimento").value) || 0;
    var tempoInvestimento = parseInt(document.getElementById("tempo-investimento").value) || 0;
    
    //TAXA RENTABILIDADE (ANUAL/MENSAL):
    //var taxaRentabilidade = 12;
    var taxaRentabilidadeMensal = (1 + (taxaRentabilidade / 100)) ** (1 / 12) - 1;
    console.log("taxaRentabilidadeMensal: " + taxaRentabilidadeMensal.toFixed(6));

    //TAXA INFLAÇÃO (ANUAL/MENSAL):
    //var taxaInflacao = 5;
    var taxaInflacaoMensal = (1 + (taxaInflacao / 100)) ** (1 / 12) - 1;
    console.log("taxaInflacaoMensal: " + taxaInflacaoMensal.toFixed(6));

    //TAXA RENTABILIDADE REAL:
    var taxaRealMensal = (1 + taxaRentabilidadeMensal) / (1 + taxaInflacaoMensal) - 1;
    console.log("taxaRealMensal: " + taxaRealMensal.toFixed(6));

    //RENTABILIDADE FUTURA TOTAL:
    //var valorInicial = 500;
    //var valorMensal = 500;
    //var periodoInvestimento = 12;
    console.log("valorInicial: " + valorInicial);
    console.log("valorMensal: " + valorMensal);
    console.log("periodoInvestimento: " + periodoInvestimento);
    //Rentabilidade Valor Inicial:
    var VF_inicial = valorInicial * (1 + taxaRentabilidadeMensal) ** periodoInvestimento;
    console.log("VF_inicial: " + VF_inicial);
    //Rentabilidade Valor Mensal:
    var VF_mensal = valorMensal * (((1 + taxaRentabilidadeMensal) ** periodoInvestimento - 1) / taxaRentabilidadeMensal);
    console.log("VF_mensal: " + VF_mensal);
    //Valor total futuro:
    var resultValorFuturo = VF_inicial + VF_mensal;    
    console.log("resultValorFuturo: " + resultValorFuturo.toFixed(2));
  //  document.getElementById("valor-futuro").value = resultValorFuturo.toFixed(2);

    //VALOR INVESTIDO:
    var resultValorInvestido = valorInicial + (valorMensal * periodoInvestimento);
    console.log("resultValorInvestido: " + resultValorInvestido.toFixed(2));
  //  document.getElementById("valor-presente").value = resultValorInvestido.toFixed(2);

    //VALOR EM JUROS (MENSAL / ANUAL):
    //Anual:
    var resultValorJurosAnual = resultValorFuturo - resultValorInvestido;
    console.log("resultValorJurosAnual: " + resultValorJurosAnual.toFixed(2));
   // document.getElementById("rentabilidade-anual").value = resultValorJurosAnual.toFixed(2);

    //Mensal:
    var resultValorJurosMensal = resultValorFuturo * taxaRentabilidadeMensal;
    console.log("resultValorJurosMensal: " + resultValorJurosMensal.toFixed(2));
   // document.getElementById("rentabilidade-mensal").value = resultValorJurosMensal.toFixed(2);

    //IMPOSTO DE RENDA:
    var taxaIR = 0.20; //20%
    var resultValorIR = resultValorJurosAnual * taxaIR;
    console.log("IR: " + resultValorIR.toFixed(2));

    //VALOR TOTAL LÍQUIDO:
    var resultValorLiquido = resultValorFuturo - resultValorIR;
    console.log("resultValorLiquido: " + resultValorLiquido.toFixed(2));
}