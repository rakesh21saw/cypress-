 // ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///  <reference types="Cypress"  />

///  <reference types="Cypress-xpath"  />

// custom command for clicking on link using label

Cypress.Commands.add('clickLink',(label)=>{

    cy.get('a').contains(label).click(); // a is anchor tag
})
/*
cointains()-  here contain  method checks label is present in the element('a') 
and then it will perform click action.
label- is case sensative it will be diffrent for lower case and upper case charactor.
- 
let suppose even we passing  diffrent case it can be lower or upper case caontains method should able to handle
 so we need to customize avove commands having both loer nd upper case character.for this we will over write the 
 custom commands.
*/

// over writing excisting contains() command.
/*
Cypress.Commands.overwrite('contains',(originalFn, subject, filter ,text, options = {}) =>{
// determine if a filter argumaent was passed
if (typeof text === 'object'){
options = text
text = filter
filter = undefined
}
options.matchCase = false

return originalFn(subject, filter ,text, options )

})
*/

// LOGIN COMMAND

Cypress.Commands.add('LoginApp',(email,password)=>{
    
    cy.get("#input-email").type(email);
    cy.get("#input-password").type(password)
    cy.get("input[value='Login']").click()

})