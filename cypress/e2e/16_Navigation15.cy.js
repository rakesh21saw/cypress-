// navigate btw multiple pages and for this we will use .go() command.

 describe("Navigation",()=>{

  it("NavigationTest",()=>{

  cy.visit("https://naveenautomationlabs.com/opencart/");
  cy.title().should('eq', 'Your Store')// homepage
  cy.get("li:nth-child(7) a:nth-child(1)").click();
  cy.get("div[id='content'] h2").should('have.text','Cameras'); // camera page

  // now we want to go back  to home page- for this we will use command .go('back")

  // M-1--go back to home page or forward page

  cy.go('back'); // go back to home page
  cy.title().should('eq', 'Your Store') // once going to home page again we can verify the homepage

  // again we want to go cemrapage- for this we will use command .go('forward') with parameter forward

  cy.go('forward'); // go to cemra page again
  cy.get("div[id='content'] h2").should('have.text','Cameras') // again verification

// M-2--go back to home page OR forward page

   cy.go(-1) // home back 
   cy.title().should('eq', 'Your Store')

   cy.go(1)
   cy.get("div[id='content'] h2").should('have.text','Cameras')

   cy.reload();

  })

 })

