describe('CssLocators', () => {

it("csslocators" , () => {

// launch the application

cy.visit("http://www.automationpractice.pl/index.php")

// to identify the locator we will use Get method.

cy.get("[placeholder='Search']").type("T-Shirts")

cy.get("[name='submit_search']").click()  // click operation on search button. 

cy.get(".lighter").contains("T") //Assertion to verify some text on element we use contains method.

  
 



})

})




