package br.unicamp.bookstore.runner;

import static com.github.tomakehurst.wiremock.client.WireMock.configureFor;
import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.wireMockConfig;
import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.configureFor;
import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.stubFor;
import static com.github.tomakehurst.wiremock.client.WireMock.urlEqualTo;
import com.github.tomakehurst.wiremock.WireMockServer;

import org.junit.AfterClass;
import org.junit.Before;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


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
			configureFor(8089);
			wireMockServer.start();		
		}	

		@AfterClass
		public static void runAffterClass() {
			wireMockServer.stop();
		}
}	