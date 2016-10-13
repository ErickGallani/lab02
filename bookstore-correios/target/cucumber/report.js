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
  "name": "o sistema envia os dados do produto \"\u003cproduto\u003e\"",
  "rows": [
    {
      "cells": [
        "produto",
        "largura",
        "altura",
        "comprimento"
      ],
      "line": 7
    },
    {
      "cells": [
        "1",
        "20",
        "1.5",
        "4.0"
      ],
      "line": 8
    },
    {
      "cells": [
        "2",
        "30",
        "2.5",
        "5.0"
      ],
      "line": 9
    },
    {
      "cells": [
        "3",
        "40",
        "3.5",
        "6.0"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "envia o tipo de entrega \"\u003ctipoEntrega\u003e\"",
  "rows": [
    {
      "cells": [
        "tipoEntrega"
      ],
      "line": 12
    },
    {
      "cells": [
        "PAC"
      ],
      "line": 13
    },
    {
      "cells": [
        "SEDEX"
      ],
      "line": 14
    },
    {
      "cells": [
        "SEDEX10"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "envia o endereco \u0027CEP\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "o sistema recebe o \u0027valor_do_frete\u0027 e \u0027tempo_de_entrega\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "os valores sao salvos no sistema",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "line": 20,
  "name": "CEP invalido",
  "description": "",
  "id": "calcular-frete-e-tempo-de-entrega-previsto;cep-invalido",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "um \"produto\" valido",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "o cliente solicita ao sistema calucar o valor do frete e informa um \"CEP\" invalido",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "o sistema apresenta um erro com a mensagem",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 24,
    "value": "\tO sistema solicita a correcao dos dados.\t\t"
  }
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "line": 28,
  "name": "Sistema de servi�o do correios retornou erro na validacao do CEP",
  "description": "",
  "id": "calcular-frete-e-tempo-de-entrega-previsto;sistema-de-servi�o-do-correios-retornou-erro-na-validacao-do-cep",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "um \"produto\" e \"CEP\" valido",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "o cliente solicita ao sistema calucar o valor do frete e informa um \"CEP\" valido",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "o sistema apresenta um erro com a mensagem",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 32,
    "value": "\tSe o erro estiver no servi�o dos correios:\r\n\t\tO sistema informa o erro."
  }
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "line": 37,
  "name": "Erro no tempo de entrega",
  "description": "",
  "id": "calcular-frete-e-tempo-de-entrega-previsto;erro-no-tempo-de-entrega",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "um \"produto\" e \"CEP\" valido",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "o cliente solicita ao sistema que calcule o tempo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "o sistema retorna com o tempo invalido",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 41,
    "value": "\tO sistema informa o erro."
  }
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "line": 44,
  "name": "Erro no calculo do valor do frete e tempo de entrega",
  "description": "",
  "id": "calcular-frete-e-tempo-de-entrega-previsto;erro-no-calculo-do-valor-do-frete-e-tempo-de-entrega",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "um \"produto\" medidas invalidas e \"CEP\" valido",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "o cliente solicita ao sistema que calcule o tempo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "o sistema apresenta um erro com a mensagem",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 48,
    "value": "\tO sistema informa o erro."
  }
});
formatter.match({});
formatter.result({
  "status": "undefined"
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