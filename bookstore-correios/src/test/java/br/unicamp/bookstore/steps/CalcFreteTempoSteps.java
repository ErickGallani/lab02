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

	@Given("^que solicito ao sistema para calcular o frete e o tempo de entrega$")
	public void que_solicito_ao_sistema_para_calcular_o_frete_e_o_tempo_de_entrega() throws Throwable {

	}

	@When("^o sistema envia os dados do produto produto o tipoDeEntrega e CEP$")
	public void o_sistema_envia_os_dados_do_produto_produto_o_tipoDeEntrega_e_CEP() throws Throwable {

	}

	@Then("^o sistema recebe o valor_do_frete e tempo_de_entrega$")
	public void o_sistema_recebe_o_valor_do_frete_e_tempo_de_entrega() throws Throwable {

	}

	@Then("^os valores sao salvos no sistema$")
	public void os_valores_sao_salvos_no_sistema() throws Throwable {

	}

	@Given("^um produto valido$")
	public void um_produto_valido() throws Throwable {

	}

	@When("^o cliente solicita ao sistema calucar o valor do frete e informa um CEP invalido$")
	public void o_cliente_solicita_ao_sistema_calucar_o_valor_do_frete_e_informa_um_CEP_invalido() throws Throwable {

	}

	@Then("^o sistema apresenta um erro com a mensagem$")
	public void o_sistema_apresenta_um_erro_com_a_mensagem(String arg1) throws Throwable {

	}

	@Given("^um produto e CEP valido$")
	public void um_produto_e_CEP_valido() throws Throwable {

	}

	@When("^o cliente solicita ao sistema calucar o valor do frete e informa um CEP valido$")
	public void o_cliente_solicita_ao_sistema_calucar_o_valor_do_frete_e_informa_um_CEP_valido() throws Throwable {

	}

	@When("^o cliente solicita ao sistema que calcule o tempo do frete$")
	public void o_cliente_solicita_ao_sistema_que_calcule_o_tempo_do_frete() throws Throwable {

	}

	@Then("^o sistema retorna com o tempo invalido$")
	public void o_sistema_retorna_com_o_tempo_invalido(String arg1) throws Throwable {

	}

	@Given("^um produto medidas invalidas e CEP valido$")
	public void um_produto_medidas_invalidas_e_CEP_valido() throws Throwable {

	}
}