Feature: Buscar endereco a partir do CEP informado 
	Como um usuario
  Eu quero poder obter o endereco referente a um CEP
 
Scenario: CEP valido
	Given que um CEP valido foi informado    
	When enviar o numero de CEP para os Correios
	Then o sistema deve exibir o endereco

Scenario: CEP invalido
	Given que foi informado um CEP invalido
	When enviar o CEP invalido
	Then deve ser exibido uma mensagem de erro 
	"""
	/ CEP informado e invalido
	"""
Scenario: Servico indisponivel
	Given que foi informado um CEP valido, porem servico indisponivel
	When enviar o numero de CEP
	Then deve ser exibida a mensagem de indisponibilidade: 
	"""
	/ Servico indisponivel
	"""
	
Scenario: Servico lento
	Given que foi informado um CEP valido, porem servico lento
	When enviar o numero de CEP servico lento
	Then deve ser exibido uma mensagem de erro servico lento
	"""
	/ Servico indisponivel
	"""