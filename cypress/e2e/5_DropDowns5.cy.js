// Dropdown which having select tag.
//In Cypress,dropdowns handled by using the .select() command.

describe("checking Dropdowns",() => {
 it.skip("DropDowns with select tab",() => {
  cy.visit("https://www.zoho.com/commerce/free-demo.html")

   cy.get('[id="zcf_address_country"]').select('Iraq')
    cy.get('[id="zcf_address_country"]').select('Iraq').should('have.value','Iraq')// assertion to check same value selected or not
  
    // note - only in selecte dropdown tag we use have.value 
  })
// DropDown without select tag called bootstrap dropdown.

   it.skip("DropDowns without select tag_BOOTSTRAP Dropdown",() =>{ 
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
     
     cy.get('#select2-billing_country-container').click() // india
     cy.get('.select2-search__field').type('Jorden').type('{enter}') // only for selecting value

     // here for assertion, we can not use have.value.instead of have.value we use have.text

     cy.get('#select2-billing_country-container').should('have.text','India')
     cy.get('.select2-search__field').should('have.text','')
     
  })
    // AUTO SUGGESTED DROPDOWNS- its static everytime.

    it.skip("Aut0 suugest DropDown",() => {
     cy.visit("https://www.wikipedia.org/")
      cy.get("#searchInput").type('Delhi')
     // we need to capture all suggested options and we can also count total number of options displayed and also select particular option in dropdown
       // to do this we need to write one proper locator which will able to match all these options.

      // all auto seggestions,from this we able to select one option.To select one of the option we will use .contain
       
      cy.get(".suggestion-title").contains('Delhi University').click()

    })
  
    it("Dynamic DropDown",() =>{
      cy.visit("https://www.google.com/")
  
      cy.get(".gLFyf").type('cypress automation')//we are typing in input box
  
       // we need to write a common locator which will able to match all the suggested options
       cy.get('div.wM6W7d>span').should('have.length','13')
       // it will capture all the locators. bz its dynamic in nature we can not use directly .contain. for this we use . each//

       cy.wait(4000) // 
  
       cy.get('div.wM6W7d>span').each( ($el, index, $list)=>{
            if($el.text()=='cypress automation jobs in india')
            {
                cy.wrap($el).click()
            }
       })
            //  again we need to check the same text whatever we clicked is displayed or not on the input
                        })
   })
