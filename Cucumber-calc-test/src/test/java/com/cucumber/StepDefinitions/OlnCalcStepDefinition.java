package com.cucumber.StepDefinitions;

import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;



import org.openqa.selenium.By;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class OlnCalcStepDefinition {

	protected WebDriver driver;
	
	 @Before
	 public void setup() {
		 //setup chrome driver
		System.setProperty("webdriver.chrome.driver", "./src/test/resources/chromedriver.exe");
		driver = new ChromeDriver();

		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}
		
	@Given("^I open webCalc$")
	public void I_open_webCalc() throws MalformedURLException, InterruptedException {
		//get calculator webpage
		driver.get("http://web2.0calc.com/");
	}
	
	@When("^I enter arg1 as (.*) and arg2 as (.*) and operation as (.*)$")
	public void i_enter_arg_as_and_arg_as_and_operation_in_textbox(int arg1, int arg2, String operation) throws Throwable {
		//Identify operation
		 String op="";
		 if (operation.equals("Addition"))
				op="+";
			else if (operation.equals("Multiplication"))
				op="*";
			else if (operation.equals("Subtraction"))
				op="-";
			else if (operation.equals("Division"))
				op="/";
		//send input argument
		 WebElement webCalcTextBox = driver.findElement(By.id("input"));
		 webCalcTextBox.sendKeys(arg1+op+arg2);
		 //Click on resultButton
		 WebElement resultButton = driver.findElement(By.id("BtnCalc"));
		 resultButton.click();	
		 Thread.sleep(1000);
	}
	
	@Then("^I should get result as (.*)$")
	public void i_should_get_result_as(String output) throws Throwable {
	    //get output from web calculator
		WebElement calculatorTextBox = driver.findElement(By.id("input"));
		String result = calculatorTextBox.getAttribute("value");
				
		//Verify the result
		Assert.assertEquals(result, output);
	}
	
	 @After
	    public void closeBrowser() {
		 //close the browser
	     driver.quit();	 
	 }
}
