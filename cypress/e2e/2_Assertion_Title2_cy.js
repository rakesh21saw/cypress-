// Assertion on the title of webpage.every page have some unique title//

describe('Assertion_Title', () =>{

    it('Implicit_Assertion', () =>{

       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

 //To capture title, use cy.title() command- this will return the title of the current web page.
 // and what we are expecting on the title we need to add multiple  validation so by using should keyword.

 /*
cy.title().should('include','OrangeHRM')
 cy.title().should('include','HRM')
  cy.title().should('not.include','greenhrm') // Negative assertion 

  */

  // instead of writing multiple should we can and.

  cy.title().should('include','OrangeHRM')
  .and('eq','OrangeHRM')
   .and('contain','HRM')

// To  check logo or visible or not.

   cy.get('.orangehrm-login-branding > img').should('be.visible') //this command will check that logo are visible or not.
   // instead of be.visble we can also use .exist
   cy.get('.orangehrm-login-branding > img').should('exist')
   //or
   .and('exist')
 
   // to check multiple web elements, let eg- total number of Links present on webpage.
   // to capture all the links  normally we use x-path by using anchor tab.
   //  ("//a"- will match all the  link which are avialvle on web page)

   cy.xpath("//a").should('have.length','5') // length check

   cy.get("[placeholder='Username']").type('Admin')// provide the value in input box

// to check the value we need to verify

cy.get("[placeholder='Username']").should('have.value','Admin')


})

 })
