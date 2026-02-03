// fixture

describe("without fixture",()=>{

  it.skip("fixture1",()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/')

    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type('admin123')

    cy.get("button[type='submit']").click()
    
  })

it("fixture12",()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.wait(4000)

    cy.readFile('cypress/fixtures/rahul.json').then((data) =>{
      cy.log(data)
      cy.log(data.username); // Output: Admin
    cy.log(data.password); // Output: admin123

    //y.get("input[placeholder='Username']").type(data.username);
    //cy.get("input[placeholder='Password']").type(data.password);

    cy.get("button[type='submit']").click()
    
    //cy.get(".oxd-main-menu-item.active").should('have.text',data.expected)
    //cy.get(".oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module", { timeout: 10000 }).should('have.text',data.expected);
  
    })   
})
// for 

beforeEach(()=>{

  cy.fixture('rahul.json').then((data) =>{

      data= data
    })
  })

 it.skip("fixtureeee",()=>{
  
  cy.visit("https://opensource-demo.orangehrmlive.com/")
  cy.get("input[placeholder='Username']").type('userdata.username');
  cy.get("input[placeholder='Password']").type('userdata.password');
  cy.get("button[type='submit']").click()
    

 })
 
 // by using this keyword - it will only used in function not in arrow function


 beforeEach(()=>{

  cy.fixture('rahul.json').then(function(data1)  {

      this.data1= data1
    })
  })

 it.skip("fixturee345",()=>{
  
  cy.visit("https://opensource-demo.orangehrmlive.com/")
  cy.get("input[placeholder='Username']").type('this.data1.username');
  cy.get("input[placeholder='Password']").type('this.data1.password');
  cy.get("button[type='submit']").click()
  cy.contains('Login').click()
  
 })

})





