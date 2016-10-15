# encoding: UTF-8
Feature: Calcular frete e tempo de entrega previsto
	
	Scenario: Eu como usuario desejo simular o calculo do frete que sera cobrado pela do entrega do pedido e o tempo de entrega previsto
		Given que solicito ao sistema para calcular o frete e o tempo de entrega
		When o sistema envia os dados do produto produto o tipoDeEntrega e CEP				
		Then o sistema recebe o valor_do_frete e tempo_de_entrega
			And os valores sao salvos no sistema
			
Scenario: CEP invalido
	Given um produto valido	
	When o cliente solicita ao sistema calucar o valor do frete e informa um CEP invalido
	Then o sistema apresenta um erro com a mensagem

Scenario: Sistema de serviço do correios retornou erro na validacao do CEP
	Given um produto e CEP valido
	When o cliente solicita ao sistema calucar o valor do frete e informa um CEP valido
	Then o sistema apresenta o erro

Scenario: Erro no tempo de entrega
	Given um produto e CEP valido
	When o cliente solicita ao sistema que calcule o tempo do frete
	Then o sistema retorna com o tempo invalido

Scenario: Erro no calculo do valor do frete e tempo de entrega
	Given um produto medidas invalidas e CEP valido
	When o cliente solicita ao sistema que calcule o tempo do frete
	Then o sistema apresenta o erro 