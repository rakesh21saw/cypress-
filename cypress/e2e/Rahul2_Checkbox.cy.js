//
describe("checkbox",()=>{
 it.skip("checkboxes",()=>{

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#checkBoxOption1').check().should('be.checked') // for check
    .and('have.value','option1')
    .and('be.visible')
    // for uncheck
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

    // to select all checkbox we need to find a common css property
    cy.get('input[type="checkbox"]').check(['option1','option2','option3'])
 })
 it.skip("static_Dropdown",()=>{
    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#dropdown-class-example').select('option1').should('have.value','option1')
    //cy.get('#dropdown-class-example').select('option2').should('have.value','option1')// it will fail bz options are not matching
 })
  
it.skip("Dynamic__Dropdown",()=>{
    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#autocomplete').type()
    
 })
it("Visible and invisible command",()=>{
    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    // show button
    cy.get("#displayed-text").should('be.visible')
    cy.get('#hide-textbox').click() // hide
    cy.get('#displayed-text').should("not.be.visible")
    cy.get('#show-textbox').click()

})

it("Radiobutton",()=>{
    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //cy.get('input[type="radio"]').check(['radio1','radio2','radio3']).should('be.checked').and ('be.visible')//dont use this in radio button
     cy.get('input[value="radio1"]').check().should('be.checked')
    cy.get('input[value="radio2"]').check().should('be.checked')
    cy.get('input[value="radio3"]').check().should('be.checked')
    
    // j qyery for radio 1
    cy.get('input[type="radio"]').each(($el) => {
        const value = $el.val()  // get the value attribute like 'radio1'

        if (value === 'radio1') {
             expect(value).to.equal('radio1')
            cy.wrap($el).check().should('be.checked')
        }
       

    })
   
})
})