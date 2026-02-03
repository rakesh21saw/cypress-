/// <reference types="Cypress" />
///<reference types="cypress-iframe" /> 



// inside the iframe there is multiplr things are there which contain documentns also in this documents lots of element present.
//for get the element we will use .its()
// 0 means only one documents in this frame.
// cy.wrap- this will wrap the fame and return return the frame/
// to return the frame we have to keep inside another variavle called iframe and we can declear this frame by let oe const.


     //iframe.clear().type("welcome")
    

describe("Handling Frame",()=>{
 
 it.skip("Approach1",()=>{

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
     cy.frameLoaded('#courses-iframe')
     cy.iframe().find('a[href="practice-project"]').eq(0).click()
     .contains('Practice',{ timeout: 10000 }).should('be.visible')
      cy.wait(4000)

      cy.iframe()
    .find('#name', { timeout: 10000 }) // wait for it to exist
     .should('be.visible')
    .type('rakesh');

    cy.wait(3000)
    cy.iframe().find('#email').type('@gmail.com')
  
    .and('be.visible').should('have.value','@gmail.com')
     
    cy.wait(3000)

    cy.iframe().find('#agreeTerms').check().should('be.checked')

    cy.iframe().find('#form-submit').contains('Submit')
    }) 


})

//

describe("Handling Frame",()=>{
 
 it("Approach1",()=>{

    cy.visit("https://rahulshettyacademy.com/")
    cy.frameLoaded('#courses-iframe');
     
    cy.iframe().find('ul.navigation.clearfix li a',{ timeout: 30000 }).each(($el,index)=>{


      cy.wrap($el).should('be.visible')




    })


    }) 


})