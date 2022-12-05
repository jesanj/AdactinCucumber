$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-web-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "user Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-web-application;user-login-in-the-web-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@openWebPage"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Adactin Web Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "use Enter The user Name In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The Password  In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "use Click The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_The_Adactin_Web_Application()"
});
formatter.result({
  "duration": 24349041600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.use_Enter_The_user_Name_In_Username_Field()"
});
formatter.result({
  "duration": 1159487799,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Password_In_Password_Field()"
});
formatter.result({
  "duration": 239480901,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.use_Click_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 22153540000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "user Search The Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-web-application;user-search-the-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@searchHotel"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user Select The Location",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user select the hotel name",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Select The Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Select The Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Select The Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Select The Child Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click The Search The Search Button And It Navigates To Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Location()"
});
formatter.result({
  "duration": 1529069201,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_select_the_hotel_name()"
});
formatter.result({
  "duration": 416289800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 206191400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 270251700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Check_In_Date()"
});
formatter.result({
  "duration": 250587000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Check_Out_Date()"
});
formatter.result({
  "duration": 282698700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Adults_Per_Room()"
});
formatter.result({
  "duration": 247777899,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Child_Per_Room()"
});
formatter.result({
  "duration": 233284400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_The_Search_The_Search_Button_And_It_Navigates_To_Select_Hotel_Page()"
});
formatter.result({
  "duration": 7701259200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "user Select The Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-web-application;user-select-the-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@selectHotel"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user Select The Hotel Button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user Select The Continue Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Hotel_Button()"
});
formatter.result({
  "duration": 173732600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Continue_Button()"
});
formatter.result({
  "duration": 6057676400,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "user Book A Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-web-application;user-book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@bookHotel"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "user Enter The First Nmae",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user Enter The last name",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Enter The BIlling Address",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Enter THe Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Enter The Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Enter The Card Expiry Date And Year",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Enter The CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Click The Book Now Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_First_Nmae()"
});
formatter.result({
  "duration": 261612100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_last_name()"
});
formatter.result({
  "duration": 301559400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_BIlling_Address()"
});
formatter.result({
  "duration": 375086300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_THe_Card_Number()"
});
formatter.result({
  "duration": 305693401,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Card_Type()"
});
formatter.result({
  "duration": 195275200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Card_Expiry_Date_And_Year()"
});
formatter.result({
  "duration": 485677099,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_CVV_Number()"
});
formatter.result({
  "duration": 329532200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Book_Now_Button()"
});
formatter.result({
  "duration": 5160410599,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "over View Of Booking Confirmation",
  "description": "",
  "id": "hotel-booking-in-adactin-web-application;over-view-of-booking-confirmation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@preview"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user Click The Logout Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Logout_Button()"
});
formatter.result({
  "duration": 9916082401,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "view Of Login Again Page",
  "description": "",
  "id": "hotel-booking-in-adactin-web-application;view-of-login-again-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@loginAgain"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "user Click The Login Again Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Again_Button()"
});
formatter.result({
  "duration": 4762018401,
  "status": "passed"
});
});