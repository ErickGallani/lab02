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
formatter.step({
  "line": 10,
  "name": "o Sistema exibe o Status de Entrega do Pedido ao Usuario",
  "keyword": "And "
});
formatter.match({
  "location": "ConsultarStatusEntrega.usuario_esta_logado_no_sistema()"
});
formatter.result({
  "duration": 249285313,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat br.unicamp.bookstore.steps.ConsultarStatusEntrega.usuario_esta_logado_no_sistema(ConsultarStatusEntrega.java:18)\r\n\tat ✽.Given usuario esta logado no sistema(features/ConsultStatusEntrega.feature:4)\r\n",
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
formatter.match({
  "location": "ConsultarStatusEntrega.o_Sistema_exibe_o_Status_de_Entrega_do_Pedido_ao_Usuario()"
});
formatter.result({
  "status": "skipped"
});
});