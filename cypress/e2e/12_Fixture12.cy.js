/*
Cypress fixtures are added to maintain and hold the test data for automation.
 The fixtures are kept inside the fixtures folder (example.json file) in the Cypress project.
  Basically, it helps us to get the data input from external files.
  Cypress fixtures folder can have files in JSON or other formats and the data is maintained in "key:value" pairs.

All the test data can be utilised by more than one test. 
All fixture data has to be declared within the before hook block.

here we have two approaches  
1. direct approach
2. access through Hook- for multiple it blocks

*/


// Direct approach.

describe("Fixture Test", () =>  {

it("Fixture demo test Direct",() => {

    cy.visit("https://opensource-demo.orangehrmlive.com/")

    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("Admin123")
    
        cy.get('button[type="submit"]').click();

        //cy.get(".oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard');
  
        //cy.get('.oxd-topbar-header-breadcrumb').should('have.text','Leave');

})

// to get the data from fixture we will use one method .fixture().

it.skip("Fixture demo test Direct",() => {


    cy.visit("https://opensource-demo.orangehrmlive.com/");

    cy.fixture('orangehrm11').then((data)=>{

    cy.get("input[placeholder='Username']").type(data.username);
    cy.get("input[placeholder='Password']").type(data.password);
    
        
    cy.get('button[type="submit"]').click();

    cy.get(".oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module").should('have.text',data.expected);
  
    //cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',data.expected);

})

})
// suppose  same data required in multiple test or same other it block then we have to repeat avove step multiple times.
// insted of doing that we can also create a hook method where we will load the fixture file nd have the data, and that 
// we can reuse in every it block.

let userdata; // for global scope
before (() => {

    cy.fixture("orangehrm11").then((data) => {
       userdata=data;
    })
})

it("Fixture demo test Direct",() => {


    cy.visit("https://opensource-demo.orangehrmlive.com/");


    cy.get("input[placeholder='Username']").type(userdata.username);
    cy.get("input[placeholder='Password']").type(userdata.password);
    
        
    cy.get('button[type="submit"]').click();

    cy.get(':nth-child(2) > .oxd-main-menu-item').should('have.text',userdata.expected);
 
 })
})