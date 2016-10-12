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