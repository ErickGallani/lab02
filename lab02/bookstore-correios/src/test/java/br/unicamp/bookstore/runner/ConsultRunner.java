package br.unicamp.bookstore.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith (Cucumber.class)
@CucumberOptions (
	format = ("html:target/cucumber"),
	features = "src/test/resources"
	)

public class ConsultRunner {

}
