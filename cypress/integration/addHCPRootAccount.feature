#  @copyright Tandem Diabetes Care, Inc. 2022. All rights reserved.
#  @file addHCPRootAccount.feature
#  @author Nandini Varanasi
#  @lastChangedBy 
#  @description A feature file that contains test cases for "addHCPRootAccount" API.

@api
@addHCPRootAccount
#@PRS:prs-id
#@SVAP:SVAP-ID:001
#@SRS:SRS-ID:001

Feature: addHCPRootAccount functionality
             In order to assign a new account holder to the clinic 
             As a tester
             I want to make sure the addHCPRootAccount API works

 Scenario Outline: User should be able to create a new clinic and assign a new account holder to the clinic
   
   When I set "hcpcrmid" to <hcpcrmid>
   And I set "Email" to <emailAddress>
   And I set "Password" to <password>
   And I set "First Name" to <firstName>
   And I set "Last Name" to <lastName>
   And I set "businessname" to <businessname>
   And I set "businessaddress" to <businessaddress>
   And I set "businesscity" to <businesscity>
   And I set "businessstate" to <businessstate>
   And I set "businesszip" to <businesszip>
   And I send GET request to "addHCPRootAccount" API
   Then I get status code <code>
   And I get status text <statusText>
#   And if the status text of <statusText> is OK the response matches the "addHCPRootAccount" schema
             # And if the status text of <statusText> is not OK the message is <message>
             # And I want to validate the "addHCPRootAccount" response of message and <message>
             # And I want to validate the "addHCPRootAccount" response of name and <name>

    Examples:
      | hcpcrmid   | emailAddress    | password     | firstName | lastName | businessname  | businessaddress | businesscity | businessstate | businesszip | code | statusText |
      | "String" | "String" | "String" | "String"   | "String" | "String" | "String" | "SanDiego" | "CA" | "92105"  | "200"  | "OK" | 

