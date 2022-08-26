/// <reference types="cypress"/>

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import searchboxpage from "./searchBoxPage";

Given('I go to the website', () => {
    searchboxpage.visit
})

When('I click the searchbox', () => {
    searchboxpage.searchbox
})

Then('I can type somthing on it', () => {
    searchboxpage.typeSearchbox
})