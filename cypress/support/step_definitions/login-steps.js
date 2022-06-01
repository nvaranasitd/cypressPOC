import LoginPage from "../../pageObjects/login-page";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given ('the user signs into {string}', () => {
	LoginPage.navLogin("https://tconnecttestgreen.apos.tandemdiabetes.com/")
});

When('the user logs in with username {string} and password {string}', () => {
	LoginPage.login("sftestaccount001@tandem-diabetes.com", "tconnect")
});

Then('the user is directed to dashboard page', () => {
	LoginPage.logOut();
})