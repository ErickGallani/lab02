package br.unicamp.bookstore.steps;

import static com.github.tomakehurst.wiremock.client.WireMock.*;
import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.wireMockConfig;

import java.io.FileReader;

import org.json.JSONObject;
import org.junit.AfterClass;
import org.skyscreamer.jsonassert.JSONParser;

import com.github.tomakehurst.wiremock.WireMockServer;
import com.github.tomakehurst.wiremock.http.Fault;

import br.unicamp.bookstore.Endereco;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BuscarEnderecoSteps {
	private Endereco end;
	private static WireMockServer wireMockServer;
	private String cep;

	@Given("^que um CEP valido foi informado$")
	public void que_um_CEP_valido_foi_informado() throws Throwable {
		this.cep = "13806670";
	}

	/**
	 * @throws Throwable
	 */
	@When("^enviar o numero de CEP para os Correios$")
	public void enviar_o_numero_de_CEP_para_os_Correios() throws Throwable {

		stubFor(get(urlEqualTo("/viacep/ws/" + this.cep + "/json/"))
				.willReturn(aResponse().withHeader("Content-Type", "application/json; charset=utf-8").withBody(
						"{\"cep\": \"13806-670\",\"logradouro\": \"Rua Francisco Antônio Gonçalves\",\"complemento\": \"\",\"bairro\": \"Jardim Primavera\",\"localidade\": \"Mogi Mirim\",\"uf\": \"SP\",\"unidade\": \"\",\"ibge\": \"3530805\",\"gia\": \"4560\"}")));

		/*
		 * this.end = new Endereco();
		 * end.setLogradouro(obj.getString("logradouro"));
		 * end.setBairro(obj.getString("bairro"));
		 * end.setCep(obj.getString("cep"));
		 * end.setComplemento(obj.getString("complemento"));
		 * end.setGia(obj.getString("gia")); end.setIbge(obj.getString("ibge"));
		 * end.setLocalidade(obj.getString("localidade"));
		 * end.setUf(obj.getString("uf"));
		 * end.setUnidade(obj.getString("unidade"));
		 */
	}

	@Then("^o sistema deve exibir o endereco$")
	public void o_sistema_deve_exibir_o_endereco() throws Throwable {
		// Deve ser exibido o endereço
	}

	@Given("^que foi informado um CEP invalido$")
	public void que_foi_informado_um_CEP_invalido() throws Throwable {
		this.cep = "138066700";
	}

	@When("^enviar o CEP invalido$")
	public void enviar_o_CEP_invalido() throws Throwable {

		stubFor(get(urlEqualTo("/viacep/ws/" + this.cep + "/json/")).willReturn(aResponse().withStatus(400)
				.withHeader("Content-Type", "application/json; charset=utf-8").withBody("{\"erro\":\"true\"}")));
	}

	@Then("^deve ser exibido uma mensagem de erro$")
	public void deve_ser_exibido_uma_mensagem_de_erro(String arg1) throws Throwable {
		// Necessário mostrar uma mensagem de erro
	}

	@Given("^que foi informado um CEP valido, porem servico indisponivel$")
	public void que_foi_informado_um_CEP_valido_porem_servico_indisponivel() throws Throwable {
		this.cep = "13806670";
	}

	@When("^enviar o numero de CEP$")
	public void enviar_o_numero_de_CEP() throws Throwable {

		stubFor(get(urlEqualTo("/viacep/ws/" + this.cep + "/json/"))
				.willReturn(aResponse().withHeader("Content-Type", "application/json; charset=utf-8").withStatus(200)
						.withFault(Fault.EMPTY_RESPONSE)));
	}

	@Then("^deve ser exibida a mensagem de indisponibilidade:$")
	public void deve_ser_exibida_a_mensagem_de_indisponibilidade(String arg1) throws Throwable {
		// Necessário mostrar uma mensagem de erro
	}

	@Given("^que foi informado um CEP valido, porem servico lento$")
	public void que_foi_informado_um_CEP_valido_porem_servico_lento() throws Throwable {
		this.cep = "13806670";
	}

	@When("^enviar o numero de CEP servico lento$")
	public void enviar_o_numero_de_CEP_servico_lento() {
		stubFor(get(urlEqualTo("/delayed")).willReturn(aResponse().withStatus(200).withFixedDelay(2000)));
	}

	@Then("^deve ser exibido uma mensagem de erro servico lento$")
	public void deve_ser_exibido_uma_mensagem_de_erro_servico_lento(String arg1) {
		// Necessário mostrar uma mensagem de erro
	}

}