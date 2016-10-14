$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CalcFreteTempo.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# encoding: UTF-8"
    }
  ],
  "line": 2,
  "name": "Calcular frete e tempo de entrega previsto",
  "description": "",
  "id": "calcular-frete-e-tempo-de-entrega-previsto",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Eu como usuario desejo simular o calculo do frete que sera cobrado pela do entrega do pedido e o tempo de entrega previsto",
  "description": "",
  "id": "calcular-frete-e-tempo-de-entrega-previsto;eu-como-usuario-desejo-simular-o-calculo-do-frete-que-sera-cobrado-pela-do-entrega-do-pedido-e-o-tempo-de-entrega-previsto",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "que solicito ao sistema para calcular o frete e o tempo de entrega",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "o sistema envia os dados do produto produto o tipoDeEntrega e CEP",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "o sistema recebe o valor_do_frete e tempo_de_entrega",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "os valores sao salvos no sistema",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "CalcFreteTempoSteps.o_sistema_envia_os_dados_do_produto_produto_o_tipoDeEntrega_e_CEP()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalcFreteTempoSteps.o_sistema_recebe_o_valor_do_frete_e_tempo_de_entrega()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 10,
  "name": "CEP invalido",
  "description": "",
  "id": "calcular-frete-e-tempo-de-entrega-previsto;cep-invalido",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "um produto valido",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "o cliente solicita ao sistema calucar o valor do frete e informa um CEP invalido",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "o sistema apresenta um erro com a mensagem",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 14,
    "value": "\tO sistema solicita a correcao dos dados.\t\t"
  }
});
formatter.match({
  "location": "CalcFreteTempoSteps.um_produto_valido()"
});
formatter.result({
  "duration": 347233040,
  "status": "passed"
});
formatter.match({
  "location": "CalcFreteTempoSteps.o_cliente_solicita_ao_sistema_calucar_o_valor_do_frete_e_informa_um_CEP_invalido()"
});
formatter.result({
  "duration": 45320,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 18,
  "name": "Sistema de servi�o do correios retornou erro na validacao do CEP",
  "description": "",
  "id": "calcular-frete-e-tempo-de-entrega-previsto;sistema-de-servi�o-do-correios-retornou-erro-na-validacao-do-cep",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "um produto e CEP valido",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "o cliente solicita ao sistema calucar o valor do frete e informa um CEP valido",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "o sistema apresenta um erro com a mensagem",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 22,
    "value": "\tSe o erro estiver no servi�o dos correios:\r\n\t\tO sistema informa o erro."
  }
});
formatter.match({
  "location": "CalcFreteTempoSteps.um_produto_e_CEP_valido()"
});
formatter.result({
  "duration": 122400,
  "status": "passed"
});
formatter.match({
  "location": "CalcFreteTempoSteps.o_cliente_solicita_ao_sistema_calucar_o_valor_do_frete_e_informa_um_CEP_valido()"
});
formatter.result({
  "duration": 50400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 27,
  "name": "Erro no tempo de entrega",
  "description": "",
  "id": "calcular-frete-e-tempo-de-entrega-previsto;erro-no-tempo-de-entrega",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "um produto e CEP valido",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "o cliente solicita ao sistema que calcule o tempo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "o sistema retorna com o tempo invalido",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 31,
    "value": "\tO sistema informa o erro."
  }
});
formatter.match({
  "location": "CalcFreteTempoSteps.um_produto_e_CEP_valido()"
});
formatter.result({
  "duration": 131440,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 34,
  "name": "Erro no calculo do valor do frete e tempo de entrega",
  "description": "",
  "id": "calcular-frete-e-tempo-de-entrega-previsto;erro-no-calculo-do-valor-do-frete-e-tempo-de-entrega",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "um produto medidas invalidas e CEP valido",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "o cliente solicita ao sistema que calcule o tempo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "o sistema apresenta um erro com a mensagem",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 38,
    "value": "\tO sistema informa o erro."
  }
});
formatter.match({
  "location": "CalcFreteTempoSteps.um_produto_medidas_invalidas_e_CEP_valido()"
});
formatter.result({
  "duration": 132640,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});