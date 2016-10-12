Feature: Consultar Status entrega

	Scenario: Usuario consulta o status de entrega do seu pedido
		Given usuario esta logado no sistema
		And usuario possui codigo de rastreamento associado ao produto
	
		When usuario fornece codigo de rastreamento associado ao produto ao sistema
	
		Then sistema deve solicitar ao Correio o status da entrega