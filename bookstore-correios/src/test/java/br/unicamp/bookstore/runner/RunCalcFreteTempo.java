package br.unicamp.bookstore.runner;

import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.configureFor;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.stubFor;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;
import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.wireMockConfig;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.github.tomakehurst.wiremock.WireMockServer;

import cucumber.api.CucumberOptions;
import cucumber.api.java.Before;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = { "pretty","html:target/cucumber" }, 
		glue = "br.unicamp.bookstore.steps", 
		features = "classpath:features/CalcFreteTempo.feature")
public class RunCalcFreteTempo {	

	/*private static WireMockServer wireMockServer;

	@Before
	public static void runBeforeClass() {
		wireMockServer = new WireMockServer(wireMockConfig().port(8089));
		configureFor(8089);
		wireMockServer.start();
		
	    stubFor(get(urlEqualTo("/some/thing"))
	            .willReturn(aResponse()
	                .withHeader("Content-Type", "text/plain")
	                .withBody("Hello world!")));

	    		while (1 == 1);
	}
	
	@AfterClass
	public static void runAffterClass() {
		wireMockServer.stop();
	}*/
}