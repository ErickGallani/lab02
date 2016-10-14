$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/ConsultStatusEntrega.feature");
formatter.feature({
  "line": 1,
  "name": "Consultar Status entrega",
  "description": "",
  "id": "consultar-status-entrega",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Usuario consulta o status de entrega do seu pedido",
  "description": "",
  "id": "consultar-status-entrega;usuario-consulta-o-status-de-entrega-do-seu-pedido",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "usuario esta logado no sistema",
  "keyword": "Given "
});
formatter.step({
<<<<<<< HEAD
  "line": 6,
  "name": "o sistema envia os dados do produto \"produto\" And \"tipoDeEntrega\" And \u0027CEP\u0027",
  "rows": [
    {
      "cells": [
        "produto",
        "largura",
        "altura",
        "comprimento"
      ],
      "line": 8
    },
    {
      "cells": [
        "1",
        "20",
        "1.5",
        "4.0"
      ],
      "line": 9
    },
    {
      "cells": [
        "2",
        "30",
        "2.5",
        "5.0"
      ],
      "line": 10
    },
    {
      "cells": [
        "3",
        "40",
        "3.5",
        "6.0"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "o sistema recebe o \u0027valor_do_frete\u0027 e \u0027tempo_de_entrega\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "os valores sao salvos no sistema",
  "keyword": "And "
});
formatter.match({
  "location": "CalcFreteTempoSteps.que_solicito_ao_sistema_para_calcular_o_frete_e_o_tempo_de_entrega()"
});
formatter.result({
  "duration": 262000040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "produto",
      "offset": 37
    },
    {
      "val": "tipoDeEntrega",
      "offset": 51
    }
  ],
  "location": "CalcFreteTempoSteps.o_sistema_envia_os_dados_do_produto_And_And_CEP(String,String,DataTable)"
});
formatter.result({
  "duration": 7948680,
  "status": "passed"
});
formatter.match({
  "location": "CalcFreteTempoSteps.o_sistema_recebe_o_valor_do_frete_e_tempo_de_entrega()"
});
formatter.result({
  "duration": 46200,
  "status": "passed"
});
formatter.match({
  "location": "CalcFreteTempoSteps.os_valores_sao_salvos_no_sistema()"
});
formatter.result({
  "duration": 44040,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "CEP invalido",
  "description": "",
  "id": "calcular-frete-e-tempo-de-entrega-previsto;cep-invalido",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "um \"produto\" valido",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "o cliente solicita ao sistema calucar o valor do frete e informa um \"CEP\" invalido",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "o sistema apresenta um erro com a mensagem",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 19,
    "value": "\tO sistema solicita a correcao dos dados.\t\t"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "produto",
      "offset": 4
    }
  ],
  "location": "CalcFreteTempoSteps.um_valido(String)"
});
formatter.result({
  "duration": 214200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CEP",
      "offset": 69
    }
  ],
  "location": "CalcFreteTempoSteps.o_cliente_solicita_ao_sistema_calucar_o_valor_do_frete_e_informa_um_invalido(String)"
});
formatter.result({
  "duration": 176280,
  "status": "passed"
});
formatter.match({
  "location": "CalcFreteTempoSteps.o_sistema_apresenta_um_erro_com_a_mensagem(String)"
});
formatter.result({
  "duration": 150440,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Sistema de servi�o do correios retornou erro na validacao do CEP",
  "description": "",
  "id": "calcular-frete-e-tempo-de-entrega-previsto;sistema-de-servi�o-do-correios-retornou-erro-na-validacao-do-cep",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "um \"produto\" e \"CEP\" valido",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "o cliente solicita ao sistema calucar o valor do frete e informa um \"CEP\" valido",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "o sistema apresenta um erro com a mensagem",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 27,
    "value": "\tSe o erro estiver no servi�o dos correios:\r\n\t\tO sistema informa o erro."
  }
});
formatter.match({
  "arguments": [
    {
      "val": "produto",
      "offset": 4
    },
    {
      "val": "CEP",
      "offset": 16
    }
  ],
  "location": "CalcFreteTempoSteps.um_e_valido(String,String)"
});
formatter.result({
  "duration": 244800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CEP",
      "offset": 69
    }
  ],
  "location": "CalcFreteTempoSteps.o_cliente_solicita_ao_sistema_calucar_o_valor_do_frete_e_informa_um_valido(String)"
});
formatter.result({
  "duration": 106760,
  "status": "passed"
});
formatter.match({
  "location": "CalcFreteTempoSteps.o_sistema_apresenta_um_erro_com_a_mensagem(String)"
});
formatter.result({
  "duration": 97960,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Erro no tempo de entrega",
  "description": "",
  "id": "calcular-frete-e-tempo-de-entrega-previsto;erro-no-tempo-de-entrega",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "um \"produto\" e \"CEP\" valido",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "o cliente solicita ao sistema que calcule o tempo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "o sistema retorna com o tempo invalido",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 36,
    "value": "\tO sistema informa o erro."
  }
});
formatter.match({
  "arguments": [
    {
      "val": "produto",
      "offset": 4
    },
    {
      "val": "CEP",
      "offset": 16
    }
  ],
  "location": "CalcFreteTempoSteps.um_e_valido(String,String)"
});
formatter.result({
  "duration": 223960,
  "status": "passed"
});
formatter.match({
  "location": "CalcFreteTempoSteps.o_cliente_solicita_ao_sistema_que_calcule_o_tempo_do_frete()"
});
formatter.result({
  "duration": 48960,
  "status": "passed"
});
formatter.match({
  "location": "CalcFreteTempoSteps.o_sistema_retorna_com_o_tempo_invalido(String)"
});
formatter.result({
  "duration": 113560,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Erro no calculo do valor do frete e tempo de entrega",
  "description": "",
  "id": "calcular-frete-e-tempo-de-entrega-previsto;erro-no-calculo-do-valor-do-frete-e-tempo-de-entrega",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "um \"produto\" medidas invalidas e \"CEP\" valido",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "o cliente solicita ao sistema que calcule o tempo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "o sistema apresenta um erro com a mensagem",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 43,
    "value": "\tO sistema informa o erro."
  }
});
formatter.match({
  "arguments": [
    {
      "val": "produto",
      "offset": 4
    },
    {
      "val": "CEP",
      "offset": 34
    }
  ],
  "location": "CalcFreteTempoSteps.um_medidas_invalidas_e_valido(String,String)"
});
formatter.result({
  "duration": 219240,
  "status": "passed"
});
formatter.match({
  "location": "CalcFreteTempoSteps.o_cliente_solicita_ao_sistema_que_calcule_o_tempo_do_frete()"
});
formatter.result({
  "duration": 43720,
  "status": "passed"
});
formatter.match({
  "location": "CalcFreteTempoSteps.o_sistema_apresenta_um_erro_com_a_mensagem(String)"
});
formatter.result({
  "duration": 98680,
  "status": "passed"
=======
  "line": 5,
  "name": "usuario possui codigo de rastreamento associado ao produto",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "usuario fornece codigo de rastreamento associado ao produto ao sistema",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "sistema deve solicitar ao Correio o status da entrega",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarStatusEntrega.usuario_esta_logado_no_sistema()"
});
formatter.result({
  "duration": 204548059,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat br.unicamp.bookstore.steps.ConsultarStatusEntrega.usuario_esta_logado_no_sistema(ConsultarStatusEntrega.java:12)\r\n\tat ✽.Given usuario esta logado no sistema(features/ConsultStatusEntrega.feature:4)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "ConsultarStatusEntrega.usuario_possui_codigo_de_rastreamento_associado_ao_produto()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ConsultarStatusEntrega.usuario_fornece_codigo_de_rastreamento_associado_ao_produto_ao_sistema()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ConsultarStatusEntrega.sistema_deve_solicitar_ao_Correio_o_status_da_entrega()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Sistema ordena dos Correios o Status de Entrega do Pedido",
  "description": "",
  "id": "consultar-status-entrega;sistema-ordena-dos-correios-o-status-de-entrega-do-pedido",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "usuario esta logado no sistema",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "usuario fornece o status de entrega do seu pedido",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "o Sistema fornece aos Correios o Codigo de Rastreamento associado ao Produto",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "os Correios fornece ao Sistema o Status de entrega do pedido",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "o Sistema exibe o Status de Entrega do Pedido ao Usuario",
  "keyword": "And "
});
formatter.match({
  "location": "ConsultarStatusEntrega.usuario_esta_logado_no_sistema()"
});
formatter.result({
  "duration": 265988,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat br.unicamp.bookstore.steps.ConsultarStatusEntrega.usuario_esta_logado_no_sistema(ConsultarStatusEntrega.java:12)\r\n\tat ✽.Given usuario esta logado no sistema(features/ConsultStatusEntrega.feature:14)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "ConsultarStatusEntrega.usuario_fornece_o_status_de_entrega_do_seu_pedido()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ConsultarStatusEntrega.o_Sistema_fornece_aos_Correios_o_Codigo_de_Rastreamento_associado_ao_Produto()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ConsultarStatusEntrega.os_Correios_fornece_ao_Sistema_o_Status_de_entrega_do_pedido()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ConsultarStatusEntrega.o_Sistema_exibe_o_Status_de_Entrega_do_Pedido_ao_Usuario()"
});
formatter.result({
  "status": "skipped"
>>>>>>> master
});
});