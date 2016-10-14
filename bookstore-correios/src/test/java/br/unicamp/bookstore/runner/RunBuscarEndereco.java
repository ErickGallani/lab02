package br.unicamp.bookstore.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.github.tomakehurst.wiremock.WireMockServer;

import static com.github.tomakehurst.wiremock.client.WireMock.configureFor;
import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.wireMockConfig;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = { "pretty", "html:target/cucumber" },
        glue = "br.unicamp.bookstore.steps",
        features = "classpath:features/BuscarEndereco.feature"
)

public class RunBuscarEndereco {
	private static WireMockServer wireMockServer;
	
	@BeforeClass
	public static void runBeforeClass(){
		wireMockServer = new WireMockServer(wireMockConfig().port(8089));
		wireMockServer.start();
		configureFor(8089);
	}
	
	@AfterClass
	public static void runAfterClass(){
		wireMockServer.stop();
	}
}