//VARIAVEIS GLOBAIS DO PROJETO
//Dados de entrada
var btCalcular = document.getElementById("botao-calcular");

function botaoCalcular(){
    var valorInicial = parseFloat(document.getElementById("valor-inicial").value) || 0;
    var valorMensal = parseFloat(document.getElementById("valor-mensal").value) || 0;
    var taxaRentabilidade = parseFloat(document.getElementById("taxa-rentabilidade").value) || 0;
    const tempoRentabilidade = document.getElementById('tempo-rentabilidade').value;
    var taxaInflacao = parseFloat(document.getElementById("taxa-inflacao").value) || 0;
    var periodoInvestimento = parseInt(document.getElementById("periodo-investimento").value) || 0;
    var tempoInvestimento = document.getElementById("tempo-investimento").value || 0;
    var rendaValorAnual = parseFloat(document.getElementById("renda-valor-anual").value) || 0;
    var rendaValorMensal = parseFloat(document.getElementById("renda-valor-mensal").value || 0);
    var valorIR = parseFloat(document.getElementById("valor-ir").value || 0);
    var valorFuturoComIR = parseFloat(document.getElementById("valor-futuro-com-ir").value || 0);

    //=============================================================================
    //TAXA RENTABILIDADE (ANUAL/MENSAL):
    if (tempoRentabilidade === "Anual"){
		// Calcula a taxa de rentabilidade mensal:
		var taxaRentabilidadeMensal = (1 + (taxaRentabilidade / 100)) ** (1 / 12) - 1;
		console.log("taxaRentabilidadeMensal: " + (taxaRentabilidadeMensal * 100).toFixed(6) + "%");
		// Converte a taxa de rentabilidade mensal para taxa anual:
        var taxaRentabilidadeAnual = (1 + taxaRentabilidadeMensal) ** 12 - 1;
		console.log("taxaRentabilidadeAnual: " + (taxaRentabilidadeAnual * 100).toFixed(6) + "%");
		
    }else if(tempoRentabilidade === "Mensal"){
        // Calcula a taxa de rentabilidade mensal:
		var taxaRentabilidadeMensal = (1 + (taxaRentabilidade / 100)) ** (1 / 12) - 1;
		console.log("taxaRentabilidadeMensal: " + taxaRentabilidadeMensal.toFixed(6));
    }
	
    //=============================================================================
    //TAXA INFLAÇÃO (ANUAL):
	// Calcula a taxa de inflação mensal
	var taxaInflacaoMensal = (1 + (taxaInflacao / 100)) ** (1 / 12) - 1;
	console.log("taxaInflacaoMensal: " + (taxaInflacaoMensal * 100).toFixed(6) + "%");

    //=============================================================================
    //TAXA RENTABILIDADE REAL(MENSAL) - RENTABILIDADE LIQUIDA DE INFLAÇÃO:
    //A taxa de rentabilidade real de inflação representa o ganho real de um investimento após descontar a inflação. 
    //Em outras palavras, mostra quanto seu investimento realmente cresceu em termos de poder de compra.
    var taxaRealMensal = (1 + taxaRentabilidadeMensal) / (1 + taxaInflacaoMensal) - 1;
    console.log("taxaRealMensal: " + (taxaRealMensal * 100).toFixed(4));
    document.getElementById("rentabilidade-mensal").value = (taxaRealMensal * 100).toFixed(4);

    //TAXA RENTABILIDADE REAL(ANUAL) - RENTABILIDADE LIQUIDA DE INFLAÇÃO:
    var taxaRealAnual = (1 + taxaRealMensal) ** 12 - 1;
    console.log("taxaRealAnual: " + (taxaRealAnual * 100).toFixed(4));
    document.getElementById("rentabilidade-anual").value = (taxaRealAnual * 100).toFixed(4);

    //=============================================================================
    //RENTABILIDADE FUTURA TOTAL:
	if (tempoInvestimento === "Anos"){
		var periodoInvestimento = periodoInvestimento * 12;	
		console.log(">>>>>periodoInvestimentoAnual: " + periodoInvestimento);	
	}else if (tempoInvestimento === "Meses"){
		var periodoInvestimento = periodoInvestimento;
		console.log(">>>>>periodoInvestimentoMensal: " + periodoInvestimento);	
	}
    console.log("valorInicial: " + valorInicial);
    console.log("valorMensal: " + valorMensal);
    console.log("=====periodoInvestimento: " + periodoInvestimento);	
    //Rentabilidade Valor Inicial:
    var VF_inicial = valorInicial * (1 + taxaRentabilidadeMensal) ** periodoInvestimento;
    console.log("VF_inicial: " + VF_inicial);
    //Rentabilidade Valor Mensal:
    var VF_mensal = valorMensal * (((1 + taxaRentabilidadeMensal) ** periodoInvestimento - 1) / taxaRentabilidadeMensal);
    console.log("VF_mensal: " + VF_mensal);
    //Valor total futuro:
    var resultValorFuturo = VF_inicial + VF_mensal;    
    console.log("resultValorFuturo: " + resultValorFuturo.toFixed(2));
    document.getElementById("valor-futuro").value = resultValorFuturo.toFixed(2);

    //VALOR INVESTIDO:
    var resultValorInvestido = valorInicial + (valorMensal * periodoInvestimento);
    console.log("resultValorInvestido: " + resultValorInvestido.toFixed(2));
    document.getElementById("valor-presente").value = resultValorInvestido.toFixed(2);

    //VALOR EM JUROS (MENSAL / ANUAL):
    //Anual:
    var resultValorJurosAnual = resultValorFuturo - resultValorInvestido;
    console.log("resultValorJurosAnual: " + resultValorJurosAnual.toFixed(2));
    document.getElementById("renda-valor-anual").value = resultValorJurosAnual.toFixed(2);
    //Mensal:
    var resultValorJurosMensal = resultValorFuturo * taxaRentabilidadeMensal;
    console.log("resultValorJurosMensal: " + resultValorJurosMensal.toFixed(2));
    document.getElementById("renda-valor-mensal").value = resultValorJurosMensal.toFixed(2);

    //IMPOSTO DE RENDA:
    var taxaIR = 0.20; //20%
    var resultValorIR = resultValorJurosAnual * taxaIR;
    console.log("IR: " + resultValorIR.toFixed(2));
    document.getElementById("valor-ir").value = resultValorIR.toFixed(2);

    //VALOR TOTAL LÍQUIDO:
    var resultValorLiquido = resultValorFuturo - resultValorIR;
    console.log("resultValorLiquido: " + resultValorLiquido.toFixed(2));
    document.getElementById("valor-futuro-com-ir").value = resultValorLiquido.toFixed(2);

	
}