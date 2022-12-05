Feature: Hotel Booking In Adactin Web Application

@openWebPage
Scenario: user Login In The Web Application
Given user Launch The Adactin Web Application
When use Enter The user Name In Username Field
And user Enter The Password  In Password Field
Then use Click The Login Button And It Navigates To Search Hotel Page

@searchHotel
Scenario: user Search The Hotel 
When user Select The Location
And user select the hotel name
And user Select The Room Type
And user Select The Number Of Rooms
And user Select The Check In Date
And user Select The Check Out Date
And user Select The Adults Per Room
And user Select The Child Per Room
Then click The Search The Search Button And It Navigates To Select Hotel Page

@selectHotel
Scenario: user Select The Hotel
When user Select The Hotel Button
Then user Select The Continue Button

@bookHotel
Scenario: user Book A Hotel 
When user Enter The First Nmae
And user Enter The last name
And user Enter The BIlling Address
And user Enter THe Card Number
And user Enter The Card Type
And user Enter The Card Expiry Date And Year
And user Enter The CVV Number
Then user Click The Book Now Button

@preview
Scenario: over View Of Booking Confirmation 
When user Click The Logout Button

@loginAgain
Scenario: view Of Login Again Page 
Then user Click The Login Again Button
