describe("Assertion demo", ()=> {

 it("Implicit assertion", () => {
    
// Implicit assertion on URLS
 cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

 // should
   //cy.url().should('include','orangehrmlive.com')
   //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   //cy.url().should('contain','orangehrm')

 //Note- here we have written cy.url() multiple times 



 //cy.url().should('include','orangehrmlive.com') // capture the urls and apply multiple assertion by using should keywords
//.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//.should('contain','orangehrm')

 // here should is writen multiple times we can intrduce one more keyword called and so we can also use.


 cy.url().should('include','orangehrmlive.com')
 .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 .and('contain','orangehrm')
 .and('not.contain','apple') // negative contain assertion





 }

    )

}

)