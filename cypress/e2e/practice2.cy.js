//
import 'cypress-real-events/support';
describe("practice",()=>{

it.skip("just practicing",()=>{
 cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

// assertion on urls
cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
.and('contain','orangehrmlive.com/')
.and('include','orangehrmlive')

// title

cy.title().should('contain','OrangeHRM')
cy.title().should('include','OrangeHRM')
.and('eq','OrangeHRM')
.and('not.contain','rakesh')

cy.get("img[alt='company-branding']").should('be.visible')
cy.get("img[alt='company-branding']").and('exist')
cy.wait(2000)
cy.get("input[placeholder='Username']").should('be.enabled').and('not.be.disabled') // usename
cy.get("button[type='submit']").should('have.css','background-color','rgb(255, 123, 29)') // css colour of login page



cy.xpath("//a").should('have.length','5')

cy.get("input[placeholder='Username']").type('Admin')
.should('have.value','Admin')
cy.get("input[placeholder='Password']").type('admin123')
.and('have.value','admin123')

cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > label:nth-child(2)")
.and('have.text','Username')

cy.get("button[type='submit']").click()
//cy.get('@btn').should('have.class', 'active')

})
////////////////////////////MOUSEOVER//////////////////////////

it.skip("mouseover", () => {
  cy.visit('https://demo.opencart.com.gr/');

  cy.get('.dropdown-toggle')
    .and('be.visible');
    cy.get('.nav > :nth-child(1) > .dropdown-toggle')
     .should('be.visible')       // Check dropdown is visible
      .and('have.text', 'Desktops')
  // Trigger mouseover and click on the dropdown
  cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
    
    

  // Assert the submenu link with exact text 'Mac (1)'
  cy.get("a[href='https://demo.opencart.com.gr/index.php?route=product/category&path=20_27']")
    .should('have.text', 'Mac (1)').should('be.visible')
    
      cy.get('.product-layout').should('exist');

  
})
/////////////////////////////////////////////////

it("right click", () => {
 cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
 cy.get('.context-menu-one').trigger('contextmenu').should('have.text','right click me')
 .should('be.visible')
 //
cy.get('.context-menu-one').rightclick({force: true})
cy.get('.context-menu-item:visible').should('have.length', 7);
cy.get('.context-menu-icon-delete > span').should('have.text','Delete').should('be.visible')

const menuItems = ['Edit', 'Cut', 'Copy', 'Paste', 'Delete', 'Quit'];

  // Loop through each item and check it exists and is visible
  menuItems.forEach(item => {
    cy.get('.context-menu-item > span')
      .contains(item)
      .should('be.visible');
  });
 
})
})


