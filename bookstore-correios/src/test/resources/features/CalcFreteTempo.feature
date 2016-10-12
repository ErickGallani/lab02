Feature: Simular o calculo de valor que será cobrado pela do entrega do pedido

Scenario: Eu como usuario desejo simular o calculo de valor que será cobrado pela do entrega do pedido

Given o sistema solicita o calculo  do frete e o tempo de entrega
When o sistema envia os dados do <Produto> para os correios

	Examples: 
		| produto 	  | largura      | altura      | comprimento |
		| x	|1        |	0			 |  	0      |	 0
		| y	|2		  |	2			 |  	4  	   |     0
		| z	|3		  |	10			 |  	30 	   |
		
		
And envia o "tipo" de entrega para os correios
Then o sistema recebe o 'valor do frete' e salva no sistema 

