Feature: Test functionality of Online web2 calculator
   		 In order to verify that calculator work correctly, I should be able to get correct results

   Scenario Outline: Calculator
	   Given I open webCalc
	   When I enter arg1 as <N1> and arg2 as <N2> and operation as <Operation>
	   Then I should get result as <Result>
	   
	   Examples:
	    |N1|N2|Operation|Result|
		|423|525|Multiplication|222075|
		|4000| 200| Division| 20|
		|-234234| 345345| Addition| 111111|
		|234823| -23094823| Subtraction| 23329646|