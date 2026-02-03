//

describe("chechec",()=>{
 
    it("checkbox",()=>{
   cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
   //cy.get('input[type="checkbox"]').check().should('have.length',6).and('be.visible').and('be.checked')
   //cy.get('input[type="checkbox"]').uncheck().should('have.length',6).and('be.visible').should('not.be.checked')

     //cy.get('input[type="checkbox"]').each(($box,index)=>{
       // if (index<3) {
           // cy.wrap($box).check().should('be.checked').should('be.visible')
           // .and('have.attr', 'name', 'color')   // ✅ check `name`
       // .and('be.visible');
       // }
  
        
      //});
    

      cy.get('input[type="checkbox"]').each(($el, index) => {
    const value = $el.val(); // Get checkbox value attribute
    const name = $el.attr('name');
   const display = $el.css('display');

    // Log value
    cy.log(`Checkbox ${index + 1} value: ${value}`);
    cy.log(`Checkbox ${index + 1} value: ${name}`);
    cy.log(`Checkbox ${index + 1} value: ${display}`);

    expect(value).to.not.be.empty; // value should not be empty
    expect(name).to.include('color'); // name should include 'color'
    //expect(display).to.equal('inline'); // display should be 'inline'
})

})
 });