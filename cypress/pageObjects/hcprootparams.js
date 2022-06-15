/**
 * @copyright     Tandem Diabetes Care 2022.  All rights reserved.
 * @file          hcprootparams.js
 * @author        Nandini Varanasi
 * @fileOverview  Page object for storing functionality and helpers that
 *                are specific to the hcp webservices
 */
import { faker } from '@faker-js/faker';
class Hcprootparams {
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
    
    //faking the data for this API Call
    firstName() {
        let firstName = faker.name.firstName();
        console.log(firstName);
        return firstName
    }
    lastName() {
        let lastName = faker.name.lastName();
        console.log(lastName);
        return lastName;
    }
    emailAddress() {
        let emailAddress = faker.internet.email();
        console.log(emailAddress);
        return emailAddress
    }
    password() {
        let password = faker.internet.password();
        console.log(password);
        return password;
    }
    businessName() {
        let businessName = faker.company.companyName();
        console.log(businessName);
        return businessName;
    }
    businessAddress() {
    let businessAddress = faker.address.streetAddress();
    console.log(businessAddress)
        return businessAddress;
    }
    businessCity() {
        let businessCity = faker.address.city();
        console.log(businessCity);
        return businessCity;
    }
    businessState(){
        let businessState = faker.address.state();
        console.log(businessState);
        return businessState;
    }
    businessZip() {
        let businessZip = faker.address.zipCode();
        console.log(businessZip);
        return businessZip;
    }
}

export default new Hcprootparams