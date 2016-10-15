package br.unicamp.bookstore.runner;

import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.wireMockConfig;
import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.configureFor;
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
import org.junit.BeforeClass;
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