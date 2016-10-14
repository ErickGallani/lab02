package br.unicamp.bookstore.runner;

import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.wireMockConfig;
import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;
import static com.github.tomakehurst.wiremock.client.WireMock.equalTo;
import static com.github.tomakehurst.wiremock.client.WireMock.urlMatching;
import static com.github.tomakehurst.wiremock.client.WireMock.matching;
import static com.github.tomakehurst.wiremock.client.WireMock.notMatching;
import static com.github.tomakehurst.wiremock.client.WireMock.postRequestedFor;
import static com.github.tomakehurst.wiremock.client.WireMock.verify;
import com.github.tomakehurst.wiremock.WireMockServer;

import br.unicamp.bookstore.service.IServerRequest;
import br.unicamp.bookstore.service.ServerRequestFactory;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.Assert;


@RunWith(Cucumber.class)
@CucumberOptions(
	plugin = { "pretty","html:target/cucumber" }, 
	glue = "br.unicamp.bookstore.steps", 
	features = "classpath:features/CalcFreteTempo.feature")
public class RunCalcFreteTempo {	
		
		private static WireMockServer wireMockServer;

		@Before
		public static void runBeforeClass() {
			wireMockServer = new WireMockServer(wireMockConfig().port(8089));
			
			wireMockServer
					.stubFor(get(urlEqualTo("/CalcPrecoPrazo"))
		            .withHeader("Accept", equalTo("text/xml"))
		            .willReturn(aResponse()
		                .withStatus(200)
		                .withHeader("Content-Type", "text/xml")
		                .withBody("<response>Teste retorno</response>")));
			
			wireMockServer.start();		
		}	

		@AfterClass
		public static void runAffterClass() {
			wireMockServer.stop();
		}
		
		@Test
		public void test_request_calc_preco_prazo_end_point() {
			
			IServerRequest serverRequest = 
					ServerRequestFactory.CreateInstance("http://localhost:8089/CalcPrecoPrazo");
			
			HttpResponse response = serverRequest.sendPostRequest();
			HttpEntity entity = response.getEntity();

		    Assert.assertNotNull(response);

		    verify(postRequestedFor(urlMatching("/CalcPrecoPrazo"))
		            .withRequestBody(matching("Teste retorno"))
		            .withHeader("Content-Type", notMatching("application/json")));
		}
}	