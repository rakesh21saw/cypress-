describe("check UI Elements",() =>{
 it("Radio Bottons",()=>{
  cy.visit("https://testautomationpractice.blogspot.com/")
  // for intaract with radio buttom
    cy.get("[id='male']")

  // to check visiabiliy wheather element is visible or not,we need to add assertion called .should.

    cy.get("[id='male']").should('be.visible')
     cy.get("[id='monday']").and('be.visible')
      cy.get('[value="saturday"]').click()

  // selecting radio buttons.we can select only one radio button in a grp.
  // to select or check the  radio buttons use method called .check(). this method will  automatically select radio button.
  // After selection we need to put one assrtion also whether it is selected or not.

    cy.get("[id='male']").check().should('be.checked')// for radio buttons selecting
     cy.get("[id='monday']").check().and('be.checked') // for checkboxes
     cy.get("[id='monday']").uncheck().and('not.be.checked') // unselecting checkbox so assertion will be not to be checked
  
     cy.get('[value="friday"]').uncheck()
     cy.get('[value="friday"]').should('not.be.checked')
     

// selecting or unselecting all checkboxes at a time.
// to select all the checkboxes we need first write proper locator which will be able to point all the checboxes which will able to point all the checkbox element
// for this we need to write a common locator.


cy.get("input.form-check-input[type='checkbox']") // this will be get all checkboxes
.should('be.visible')
 cy.get("input.form-check-input[type='checkbox']").check() // here all checkboxes are selected
 cy.get("input.form-check-input[type='checkbox']").check().should('be.checked') // for selecting all checkboxes

 cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked') // for unselecting all checkboxes

//  how to check first or any checkbox when we have multiple checkbox.

 cy.get("input.form-check-input[type='checkbox']").first().check() // first checkbox among multiple checkboxes
 cy.get("input.form-check-input[type='checkbox']").last().check()  // last checkbox among  multiple checkboxes.
 cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
 cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

 })
})






