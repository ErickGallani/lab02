package br.unicamp.bookstore.runner;

import org.junit.runner.RunWith;
import java.lang.annotation.Annotation;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(
	        plugin = { "pretty", "html:target/cucumber" },
	        glue = "br.unicamp.bookstore.steps",
	        features = "classpath:features/ConsultStatusEntrega.feature"
	)

	public class ConsultRunner {
		
	}

