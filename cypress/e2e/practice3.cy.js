//Radio and checkboxes.

describe ("Radio buttons",() => {
  it.skip("Radio_Buttoms",() =>{
    cy.visit("https://practice.expandtesting.com/radio-buttons");

    cy.url('eq','https://practice.expandtesting.com/radio-buttons').should('include','radio-buttons').and('contain','practice.expandtesting.com/radio-buttons')

     cy.get("#basketball").check('basketball')
     .should('be.visible')
     .and('exist')
     cy.get('#football').should('not.be.checked')
     cy.get("#tennis").should('not.be.checked')
  })

   it.skip("Checkboxes",() => { 
    cy.visit("https://testautomationpractice.blogspot.com/")

    cy.get("#sunday").should('be.visible').and('exist')
    cy.get("#sunday").check()
     cy.get("#sunday").check('sunday')
     cy.get("#sunday").check().should('be.checked')
     cy.get("#sunday").check().should('be.visible')
     cy.get("#sunday").uncheck()
     
    cy.get("#sunday").uncheck().should('not.be.checked').should('be.visible')
    
    // select all or not

    cy.get('input.form-check-input[type="checkbox"]').check('sunday','monday','tuesday','wednesday')
      cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
       cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

 cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked')
  //cy.get('input.form-check-input[type="checkbox"]').fifth().uncheck().should('not.be.checked')
})
// dropdown select tag.

it("List all countries in the select tag", () => {

    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.wait(3000); // Better to use element wait instead of fixed wait in real-world use

    // cy.get("#zcf_address_country").then(($select) => {
    //   const countries = [];

    //   cy.wrap($select)
    //     .find("option")
    //     .each(($option) => {
    //       const countryName = $option.text().trim();
    //       if (countryName) {
    //         countries.push(countryName);
    //       }
    //     })
    //     .then(() => {
    //       // Log all countries
    //       cy.log("Total countries: " + countries.length);
    //       cy.log("Countries List:");
    //       countries.forEach((country) => {
    //         cy.log(country);
    //         // Optional: select the country to test selection
    //         // cy.get("#zcf_address_country").select(country).should('have.value', country);
    //       });
    //     });
    //});

  });



})
/*
cy.get('.products .product:visible').each(($el, index) => {
    const name = $el.find('h4.product-name').text()
    const price = $el.find('.product-price').text()
    cy.log(`Product ${index + 1}: ${name} - Price: ${price}`)
    expect(name).to.not.be.empty       // Ensure name is not empty
  expect(price).to.match(/^\d+/)
  })
*/