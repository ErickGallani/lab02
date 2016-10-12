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
        "\u003cproduto\u003e",
        "largura",
        "altura",
        "comprimento"
      ],
      "line": 7
    },
    {
      "cells": [
        "itemA",
        "1",
        "20",
        "1.5",
        "4.0"
      ],
      "line": 8
    },
    {
      "cells": [
        "itemB",
        "2",
        "30",
        "2.5",
        "5.0"
      ],
      "line": 9
    },
    {
      "cells": [
        "itemC",
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
        "\u003ctipoEntrega\u003e"
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
});