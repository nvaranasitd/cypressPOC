@PRS:prs-id
Feature: Logging in to tConnect

	@SVAP:SVAP-ID:a
	@SRS:SRS-ID:ra
	@e2e
	Scenario: User has valid personal account to login
		Given the user signs into "https://tconnecttestgreen.apos.tandemdiabetes.com/"
		When the user logs in with username "sftestaccount001@tandem-diabetes.com" and password "tconnect"
		Then the user is directed to dashboard page