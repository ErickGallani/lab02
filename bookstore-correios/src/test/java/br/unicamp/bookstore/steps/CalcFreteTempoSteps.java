package br.unicamp.bookstore.steps;

import br.unicamp.bookstore.CalcFreteTempo;
import br.unicamp.bookstore.Produto;
import br.unicamp.bookstore.dao.DadosDeEntregaDAO;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CalcFreteTempoSteps {

	CalcFreteTempo calcFreteTempo;
	Produto p;
	DadosDeEntregaDAO dados;

	double valorFrete;
	Integer diasEntrega;

	@Given("^que solicito ao sistema para calcular o frete e o tempo de entrega$")
	public void que_solicito_ao_sistema_para_calcular_o_frete_e_o_tempo_de_entrega() {

	}

	@When("^o sistema envia os dados do produto \"([^\"]*)\"$")
	public void o_sistema_envia_os_dados_do_produto(String arg1, DataTable arg2) {

	}

	@When("^envia o tipo de entrega \"([^\"]*)\"$")
	public void envia_o_tipo_de_entrega(String arg1, DataTable arg2) {

	}

	@When("^envia o endereco 'CEP'$")
	public void envia_o_endereco_CEP() {

	}

	@Then("^o sistema recebe o 'valor_do_frete' e 'tempo_de_entrega'$")
	public void o_sistema_recebe_o_valor_do_frete_e_tempo_de_entrega() {

	}

	@Then("^os valores sao salvos no sistema$")
	public void os_valores_sao_salvos_no_sistema()  {

	}

	@Given("^um \"([^\"]*)\" valido$")
	public void um_valido(String arg1)  {

	}

	@When("^o cliente solicita ao sistema calucar o valor do frete e informa um \"([^\"]*)\" invalido$")
	public void o_cliente_solicita_ao_sistema_calucar_o_valor_do_frete_e_informa_um_invalido(String arg1) {
	
	}

	@Then("^o sistema apresenta um erro com a mensagem$")
	public void o_sistema_apresenta_um_erro_com_a_mensagem(String arg1) {

	}

	@Given("^um \"([^\"]*)\" e \"([^\"]*)\" valido$")
	public void um_e_valido(String arg1, String arg2) {

	}

	@When("^o cliente solicita ao sistema calucar o valor do frete e informa um \"([^\"]*)\" valido$")
	public void o_cliente_solicita_ao_sistema_calucar_o_valor_do_frete_e_informa_um_valido(String arg1)  {

	}

	@When("^o cliente solicita ao sistema que calcule o tempo do frete$")
	public void o_cliente_solicita_ao_sistema_que_calcule_o_tempo_do_frete()  {

	}

	@Then("^o sistema retorna com o tempo invalido$")
	public void o_sistema_retorna_com_o_tempo_invalido(String arg1) {

	}

	@Given("^um \"([^\"]*)\" medidas invalidas e \"([^\"]*)\" valido$")
	public void um_medidas_invalidas_e_valido(String arg1, String arg2)  {

	}
	

}
