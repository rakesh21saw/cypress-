

describe('X-Path_Locators', () => {

it('Total no of product', () => {


 cy.visit("http://www.automationpractice.pl/index.php")

 cy.xpath("//UL[@id='blockbestsellers']/li").should('have.length',6) // assertion




})


})

