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
});
});