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

	@When("^o sistema envia os dados do produto produto o tipoDeEntrega e CEP$")
	public void o_sistema_envia_os_dados_do_produto_produto_o_tipoDeEntrega_e_CEP() {

	}

	@Then("^o sistema recebe o valor_do_frete e tempo_de_entrega$")
	public void o_sistema_recebe_o_valor_do_frete_e_tempo_de_entrega() {

	}

	@Given("^um produto valido$")
	public void um_produto_valido() {

	}

	@When("^o cliente solicita ao sistema calucar o valor do frete e informa um CEP invalido$")
	public void o_cliente_solicita_ao_sistema_calucar_o_valor_do_frete_e_informa_um_CEP_invalido() {

	}

	@Given("^um produto e CEP valido$")
	public void um_produto_e_CEP_valido() {

	}

	@When("^o cliente solicita ao sistema calucar o valor do frete e informa um CEP valido$")
	public void o_cliente_solicita_ao_sistema_calucar_o_valor_do_frete_e_informa_um_CEP_valido() {

	}

	@Given("^um produto medidas invalidas e CEP valido$")
	public void um_produto_medidas_invalidas_e_CEP_valido() {

	}

}