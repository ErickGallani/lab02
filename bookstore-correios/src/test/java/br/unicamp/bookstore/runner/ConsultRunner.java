package br.unicamp.bookstore.runner;

import org.junit.runner.RunWith;
<<<<<<< HEAD
import java.lang.annotation.Annotation;
=======
>>>>>>> master

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

