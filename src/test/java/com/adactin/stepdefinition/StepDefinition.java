package com.adactin.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.adactin.runner.RunneClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {

	public static WebDriver driver = RunneClass.driver; // runner class driver
	public static JavascriptExecutor js;

	@Given("^user Launch The Adactin Web Application$")
	public void user_Launch_The_Adactin_Web_Application() throws Throwable {
		driver.get("http://adactinhotelapp.com/index.php");
	}

	@When("^use Enter The user Name In Username Field$")
	public void use_Enter_The_user_Name_In_Username_Field() throws Throwable {
		WebElement username = driver.findElement(By.id("username"));
		username.sendKeys("jesanjj1007");
	}

	@When("^user Enter The Password  In Password Field$")
	public void user_Enter_The_Password_In_Password_Field() throws Throwable {
		WebElement password = driver.findElement(By.id("password"));
		password.sendKeys("6Q432J");
	}

	@Then("^use Click The Login Button And It Navigates To Search Hotel Page$")
	public void use_Click_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page() throws Throwable {
		WebElement login = driver.findElement(By.id("login"));
		login.click();
	}

	@When("^user Select The Location$")
	public void user_Select_The_Location() throws Throwable {
		WebElement location = driver.findElement(By.xpath("(//select[@class='search_combobox'])[1]"));
		location.click();
		Select s1 = new Select(location);
		s1.selectByVisibleText("London");

	}

	@When("^user select the hotel name$")
	public void user_select_the_hotel_name() throws Throwable {
		WebElement room_type = driver.findElement(By.id("hotels"));
		Select s = new Select(room_type);
		s.selectByVisibleText("Hotel Creek");
	}

	@When("^user Select The Room Type$")
	public void user_Select_The_Room_Type() throws Throwable {
		WebElement room_type = driver.findElement(By.id("room_type"));
		Select s2 = new Select(room_type);
		s2.selectByVisibleText("Double");
	}

	@When("^user Select The Number Of Rooms$")
	public void user_Select_The_Number_Of_Rooms() throws Throwable {
		WebElement numberofrooms = driver.findElement(By.name("room_nos"));
		Select s3 = new Select(numberofrooms);
		s3.selectByVisibleText("5 - Five");
	}

	@When("^user Select The Check In Date$")
	public void user_Select_The_Check_In_Date() throws Throwable {
		WebElement checkin = driver.findElement(By.xpath("(//input[@type='text'])[2]"));
		checkin.sendKeys("20/12/2022");
	}

	@When("^user Select The Check Out Date$")
	public void user_Select_The_Check_Out_Date() throws Throwable {
		WebElement checkout = driver.findElement(By.id("datepick_out"));
		checkout.sendKeys("30/12/2022");
	}

	@When("^user Select The Adults Per Room$")
	public void user_Select_The_Adults_Per_Room() throws Throwable {
		WebElement count = driver.findElement(By.name("adult_room"));
		Select s4 = new Select(count);
		s4.selectByValue("4");
	}

	@When("^user Select The Child Per Room$")
	public void user_Select_The_Child_Per_Room() throws Throwable {
		WebElement child = driver.findElement(By.id("child_room"));
		Select ss = new Select(child);
		ss.selectByVisibleText("2 - Two");
	}

	@Then("^click The Search The Search Button And It Navigates To Select Hotel Page$")
	public void click_The_Search_The_Search_Button_And_It_Navigates_To_Select_Hotel_Page() throws Throwable {
		WebElement search = driver.findElement(By.xpath("//input[@value='Search']"));
		search.click();
	}

	@When("^user Select The Hotel Button$")
	public void user_Select_The_Hotel_Button() throws Throwable {
		WebElement one = driver.findElement(By.id("radiobutton_0"));
		one.click();
	}

	@Then("^user Select The Continue Button$")
	public void user_Select_The_Continue_Button() throws Throwable {
		WebElement cont = driver.findElement(By.xpath("//input[@value='Continue']"));
		cont.click();
	}

	@When("^user Enter The First Nmae$")
	public void user_Enter_The_First_Nmae() throws Throwable {
		WebElement first_name = driver.findElement(By.xpath("//input[@id='first_name']"));
		first_name.sendKeys("jm");
	}

	@When("^user Enter The last name$")
	public void user_Enter_The_last_name() throws Throwable {
		WebElement last_name = driver.findElement(By.xpath("//input[@name=\"last_name\"]"));
		last_name.sendKeys("j");
	}

	@When("^user Enter The BIlling Address$")
	public void user_Enter_The_BIlling_Address() throws Throwable {
		WebElement sd1 = driver.findElement(By.xpath("//textarea[@rows='4']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView();", sd1);
		sd1.click();
		sd1.sendKeys("madurai,tamilnadu");
	}

	@When("^user Enter THe Card Number$")
	public void user_Enter_THe_Card_Number() throws Throwable {
		WebElement card = driver.findElement(By.id("cc_num"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView", card);
		card.click();
		card.sendKeys("1234567898765432");
	}

	@When("^user Enter The Card Type$")
	public void user_Enter_The_Card_Type() throws Throwable {
		WebElement card_type = driver.findElement(By.xpath("//select[@class=\"select_combobox\"]"));
		Select s5 = new Select(card_type);
		s5.selectByVisibleText("VISA");
	}

	@When("^user Enter The Card Expiry Date And Year$")
	public void user_Enter_The_Card_Expiry_Date_And_Year() throws Throwable {
		WebElement exp_mon = driver.findElement(By.xpath("//select[@id=\"cc_exp_month\"]"));
		Select s6 = new Select(exp_mon);
		s6.selectByVisibleText("December");

		WebElement exp_year = driver.findElement(By.xpath("//select[@name='cc_exp_year']"));
		Select s7 = new Select(exp_year);
		s7.selectByVisibleText("2022");
	}

	@When("^user Enter The CVV Number$")
	public void user_Enter_The_CVV_Number() throws Throwable {
		WebElement cv = driver.findElement(By.xpath("//input[@maxlength='4']"));
		cv.click();
		cv.sendKeys("321");
	}

	@Then("^user Click The Book Now Button$")
	public void user_Click_The_Book_Now_Button() throws Throwable {
		WebElement book_now = driver.findElement(By.xpath("//input[@onclick='book_hotel_validate();']"));
		book_now.click();
		Thread.sleep(5000);
	}


	@When("^user Click The Logout Button$")
	public void user_Click_The_Logout_Button() throws Throwable {
		WebElement logout = driver.findElement(By.id("logout"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView();", logout);
		logout.click();
	}

	@Then("^user Click The Login Again Button$")
	public void user_Click_The_Login_Again_Button() throws Throwable {
		WebElement login_again = driver.findElement(By.xpath("//a[@href='index.php']"));
		login_again.click();
	}

}
