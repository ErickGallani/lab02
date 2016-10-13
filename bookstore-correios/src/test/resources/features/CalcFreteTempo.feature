# encoding: UTF-8
Feature: Calcular frete e tempo de entrega previsto
	
	Scenario: Eu como usuario desejo simular o calculo do frete que sera cobrado pela do entrega do pedido e o tempo de entrega previsto
		Given que solicito ao sistema para calcular o frete e o tempo de entrega
		When o sistema envia os dados do produto "<produto>"	
				| <produto>	|	largura	|	altura	|	comprimento		|
				| itemA	|1	|	20		|	1.5		|		4.0			|
				| itemB	|2	|	30		|	2.5		|		5.0			|
				| itemC	|3	|	40		|	3.5		|		6.0			|
			And envia o tipo de entrega "<tipoEntrega>"
				| <tipoEntrega>	| 
				| 	PAC			|
				| 	SEDEX		|
				| 	SEDEX10		|
			And envia o endereco 'CEP'		
		Then o sistema recebe o 'valor_do_frete' e 'tempo_de_entrega' 
			And os valores sao salvos no sistema
