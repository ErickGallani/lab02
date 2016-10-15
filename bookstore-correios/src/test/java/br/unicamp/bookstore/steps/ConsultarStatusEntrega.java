package br.unicamp.bookstore.steps;

import org.junit.Assert;
import br.unicamp.bookstore.CorreriosComponente;
import br.unicamp.bookstore.StatusEntrega;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ConsultarStatusEntrega {
	
	private StatusEntrega entrega = new StatusEntrega();
	
	@Given("^usuario esta logado no sistema$")
	public void usuario_esta_logado_no_sistema() throws Throwable {
	    if (!(entrega.getloggedUser()))
	   	   throw new PendingException();	
	}

	@Given("^usuario possui codigo de rastreamento associado ao produto$")
	public void usuario_possui_codigo_de_rastreamento_associado_ao_produto() throws Throwable {
		if (entrega.getTrackingCode().isEmpty())
	        throw new PendingException();
	}

	@When("^usuario fornece codigo de rastreamento associado ao produto ao sistema$")
	public void usuario_fornece_codigo_de_rastreamento_associado_ao_produto_ao_sistema() throws Throwable {
		String trackingCode = "SQ458226057BR";
	    entrega.setTrackingCode(trackingCode);
	}

	@Then("^sistema deve solicitar ao Correio o status da entrega$")
	public void sistema_deve_solicitar_ao_Correio_o_status_da_entrega() throws Throwable {
		String result=  "<?xml version=\"1.0\" encoding=\"iso-8859-1\" ?> " +
				"<sroxml> " +
				"<versao>1.0</versao> " +
				"<qtd>2</qtd> " +
				"<TipoPesquisa>Lista de Objetos</TipoPesquisa> " +
				"<TipoResultado>Todos os eventos</TipoResultado> " +
				"<objeto> " +
				"<numero>SQ458226057BR</numero> " +
				"<evento> " +
				"<tipo>BDE</tipo> " +
				"<status>01</status> " +
				"<data>05/07/2004</data> " +
				"<hora>11:56</hora> " +
				"<descricao>Entregue</descricao> " +
				"<local>CDD ALVORADA</local> " +
				"<codigo>94800971</codigo> " +
				"<cidade>ALVORADA</cidade> " +
				"<uf>RS</uf> " +
				"</evento> " +
				"<evento> " +
				"<tipo>OEC</tipo> " +
				"<status>01</status> " +
				"<data>05/07/2004</data> " +
				"<hora>09:04</hora> " +
				"<descricao>Saiu para entrega</descricao> " +
				"<local>CDD ALVORADA</local> " +
				"<codigo>94800971</codigo> " +
				"<cidade>ALVORADA</cidade> " +
				"<uf>RS</uf> " +
				"</evento> " +
				"</objeto> " +
				"</sroxml> ";
	
		CorreriosComponente correios = new CorreriosComponente("http://localhost:8089");	
		String response = correios.buscarStatusEntrega(this.entrega.getTrackingCode());		
		Assert.assertNotNull(response);
		Assert.assertEquals(result, response);		
		this.entrega.setResult(result);
	}

	@Then("^o Sistema exibe o Status de Entrega do Pedido ao Usuario$")
	public void o_Sistema_exibe_o_Status_de_Entrega_do_Pedido_ao_Usuario() throws Throwable {
	    if (this.entrega.getResult().isEmpty())	
	        throw new PendingException();
	}

}
