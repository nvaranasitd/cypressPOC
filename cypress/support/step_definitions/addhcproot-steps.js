import {Given, When, And , Then } from "cypress-cucumber-preprocessor/steps"
import params from "../../pageObjects/hcprootparams";
import json from "../../../cypress.json";

/// <reference types="cypress" />

When( 'I set {string} to {string}', () => {
            let  baseUrl = json.baseUrl;
            let hcprmid = params.getRandomInt(1000000, 9999999);
            let firstName = params.firstName()
            let lastName = params.lastName();
            let emailaddress = params.emailAddress();
            let password = params.password();
            let businessname = params.businessName();
            let businessaddress = params.businessAddress();
            let businesscity = params.businessCity();
            let businessstate = params.businessState();
            let businesszip = params.businessZip();
    let url = ''+baseUrl+'/s/hcp/clinic/addHcpRootAccount?hcpcrmid='+hcprmid+'&firstName='+firstName+'&lastName='+lastName+'' +
        '&email='+emailaddress+'&password='+password+'&businessname='+businessname+'&businessaddress='+businessaddress+'&businesscity='+businesscity+'&businessstate='+businessstate+'&businesszip='+businesszip+'';
});

And ('And I send GET request to "addHCPRootAccount" API', () => {
      cy.request(
        {
            url:   url,
            method: "GET"
        }).then((response) => {
        expect(response.status).to.eq(200)
    });
}

Then('I get status code {string}', () => {
    // cy.request({
    //     url: "http://localhost:3000",
    //    
    // }).then((response) => {
    //     expect(response.status).to.equal(200)
    // })
})