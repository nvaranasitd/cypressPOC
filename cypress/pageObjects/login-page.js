/**
 * @copyright     Tandem Diabetes Care 2022.  All rights reserved.
 * @file          login-page.js
 * @author        Nandini Varanasi
 * @fileOverview  Page object for storing functionality and helpers that
 *                are specific to the t:connect login page.
 */

class LoginPage {

	navLogin() {
	cy.visit('https://tconnecttestgreen.apos.tandemdiabetes.com/')
}

login(email, password) {
	cy.get('#txtLoginEmailAddress')
	      .type('sftestaccount001@tandem-diabetes.com', email)
			
			cy.get('#txtLoginPassword').debug(password).type('tconnect', password)
			// Debugger is hit after the cy.visit
    // and cy.get commands have completed
	
			cy.get('#linkLogin > div').click()
}

logOut() {
	cy.get('#linkLogout').click()
}
}

export default new LoginPage();