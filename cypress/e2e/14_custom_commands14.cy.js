// click on the using link
// over writing excisting contains() command
// re-usable custom command

describe(" without Custom commands",() => {
// Direct approach
 it.skip('handlink link_Without custom commands', () => {

    cy.visit("https://naveenautomationlabs.com/opencart/")

   cy.get("body div[id='common-home'] div[class='row'] div[class='row'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h4:nth-child(1) a:nth-child(1)").click()
   cy.get("div[class='col-sm-4'] h1").should('have.text','iPhone')

 })

 // now we will create a custom command by using the command we can perform the click action on link just passing label or link.

 // check on commands folder

 it('handlink link with custom commands', () => {
   cy.visit("https://naveenautomationlabs.com/opencart/")

   // using custom commands

   cy.clickLink("iPhone")
   cy.get("div[class='col-sm-4'] h1").should('have.text','iPhone')
  
})

// over writing excisting contains() command

it.skip('handlink link with custom commands', () => {
   cy.visit("https://naveenautomationlabs.com/opencart/")
/*
   cy.clickLink("IPHONE") //  it will be failed bz we using upper case in contains
   cy.get("div[class='col-sm-4'] h1").should('have.text','iPhone')
*/

// now we need to over write which will take alphabet like both lower nad upper in commands.js folder.

cy.clickLink("IPHONE")
   cy.get("div[class='col-sm-4'] h1").should('have.text','iPhone')
   
})

   // login
   // search

it('Login commands', () => {

   cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login")

   
   cy.LoginApp("login@21gmail.com","login123")

   cy.get("body div[id='account-account'] ul[class='breadcrumb'] li:nth-child(2) a:nth-child(1)").should('have.text','Account')

 })

})
