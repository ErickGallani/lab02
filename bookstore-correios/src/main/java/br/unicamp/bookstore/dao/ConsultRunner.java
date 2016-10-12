package br.unicamp.bookstore.dao;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(
	        plugin = { "pretty", "html:target/cucumber" },
	        glue = "br.unicamp.exemplo.steps",
	        features = "classpath:features/ConsultStatusEntrega.feature"
	)

	public class ConsultRunner {

}