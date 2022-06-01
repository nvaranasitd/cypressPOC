describe( 'Oauth API testing', () => {
	it('Adds Todo item - POST', () => {
		cy.request({'url': 'https://tdctest.apos.tandemdiabetes.com/cloud/oauth2/token',
		method: 'POST', 
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'x-api-version': 1,
		},
		authorization: {
			"clientId": "052784A4-2DF5-485E-B9BE-5EE984202D35",
			"clientSecret": "XraBIf8NtNN0FepOM90DYh9Jb",
		},
		body: {
			grant_type:'client_credentials',
			scope: 'cloud.password cloud.account cloud.email cloud.accepttcpp cloud.messaging cloud.upload'
		},
		failOnStatusCode: false
	}).then((response) => {
		expect(response.status).to.equal(400)
	})
 } )
})