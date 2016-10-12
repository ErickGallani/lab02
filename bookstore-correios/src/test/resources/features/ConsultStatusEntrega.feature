Feature: Consultar Status entrega

	Scenario: Usuario consulta o status de entrega do seu pedido
		Given usuario esta logado no sistema
		And usuario possui codigo de rastreamento associado ao produto
	
		When usuario fornece codigo de rastreamento associado ao produto ao sistema
	
		Then sistema deve solicitar ao Correio o status da entrega
		

	Scenario: Sistema ordena dos Correios o Status de Entrega do Pedido
		
		Given usuario esta logado no sistema
		And usuario fornece o status de entrega do seu pedido
	
		When o Sistema fornece aos Correios o Codigo de Rastreamento associado ao Produto 
	
		Then os Correios fornece ao Sistema o Status de entrega do pedido
		And o Sistema exibe o Status de Entrega do Pedido ao Usuario