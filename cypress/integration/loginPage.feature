@PRS:prs-id
Feature: Logging in to tConnect

	@SVAP:SVAP-ID:a
	@SRS:SRS-ID:ra
	@e2e
	Scenario: User has valid personal account to login
		Given the user signs into "https://tconnecttestgreen.apos.tandemdiabetes.com/"
		When the user logs in with username "sftestaccount001@tandem-diabetes.com" and password "tconnect"
		Then the user is directed to dashboard page

	@api
	@SVAP:SVAP-ID:001
	@SRS:SRS-ID:001
	Scenario: User can login with valid credential
		When user makes authentication request with "autoingest@td.invalid" and "Taco123!"
		Then the request should fail with 200 response code