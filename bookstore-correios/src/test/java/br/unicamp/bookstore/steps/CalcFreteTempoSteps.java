package br.unicamp.bookstore.steps;

import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.stubFor;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;

import br.unicamp.bookstore.CalcFreteTempo;
import br.unicamp.bookstore.Produto;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CalcFreteTempoSteps {

	Produto produto;
	
	@Given("^que solicito ao sistema para calcular o frete e o tempo de entrega$")
	public void que_solicito_ao_sistema_para_calcular_o_frete_e_o_tempo_de_entrega()  {
		this.produto = new Produto(1, 30, 30, 30, 0, "");
		
		stubFor(get(urlEqualTo("/calculador/CalcPrecoPrazo.aspx?" +
							   "nCdEmpresa=09146920&sDsSenha=123456&sCepOrigem=70002900" + 
							   "&sCepDestino=71939360&nVlPeso=1&nCdFormato=1&nVlComprimento=30" +
							   "&nVlAltura=30&nVlLargura=30&sCdMaoPropria=n&nVlValorDeclarado=0" + 
							   "&sCdAvisoRecebimento=n&nCdServico=40010&nVlDiametro=0&StrRetorno=xml" + 
							   "&nIndicaCalculo=3"))
				.willReturn(aResponse().
						withHeader("Content-Type", "application/json; charset=utf-8").withBody(
						"<Servicos>" + 
								"<cServico>" +
									"<Codigo>40010</Codigo>" +
									"<Valor>13.20</Valor>" +
									"<PrazoEntrega>1</PrazoEntrega>" +
									"<ValorMaoPropria>0.00</ValorMaoPropria>" +
									"<ValorAvisoRecebimento>0.00</ValorAvisoRecebimento>" +
									"<ValorValorDeclarado>0.00</ValorValorDeclarado>" +
									"<EntregaDomiciliar>S</EntregaDomiciliar>" +
									"<EntregaSabado>S</EntregaSabado>" +
									"<Erro></Erro>" +
									"<MsgErro/>" +
								"</cServico>" +
					    "</Servicos>")));
	}

	@When("^o sistema envia os dados do produto produto o tipoDeEntrega e CEP$")
	public void o_sistema_envia_os_dados_do_produto_produto_o_tipoDeEntrega_e_CEP() {
		
	}

	@Then("^o sistema recebe o valor_do_frete e tempo_de_entrega$")
	public void o_sistema_recebe_o_valor_do_frete_e_tempo_de_entrega()  {

	}

	@Then("^os valores sao salvos no sistema$")
	public void os_valores_sao_salvos_no_sistema() {
	 
	}

	@Given("^um produto valido$")
	public void um_produto_valido()  {
	  
	}

	@When("^o cliente solicita ao sistema calucar o valor do frete e informa um CEP invalido$")
	public void o_cliente_solicita_ao_sistema_calucar_o_valor_do_frete_e_informa_um_CEP_invalido() {

	}

	@Then("^o sistema apresenta um erro com a mensagem$")
	public void o_sistema_apresenta_um_erro_com_a_mensagem()  {
	 
	}

	@Given("^um produto e CEP valido$")
	public void um_produto_e_CEP_valido() {
	
	}

	@When("^o cliente solicita ao sistema calucar o valor do frete e informa um CEP valido$")
	public void o_cliente_solicita_ao_sistema_calucar_o_valor_do_frete_e_informa_um_CEP_valido() {

	}

	@Then("^o sistema apresenta o erro$")
	public void o_sistema_apresenta_o_erro()  {
	
	}

	@When("^o cliente solicita ao sistema que calcule o tempo do frete$")
	public void o_cliente_solicita_ao_sistema_que_calcule_o_tempo_do_frete() {

	}

	@Then("^o sistema retorna com o tempo invalido$")
	public void o_sistema_retorna_com_o_tempo_invalido()  {
	 
	}

}