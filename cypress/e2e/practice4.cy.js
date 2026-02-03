describe('Desktop-only Hover Menu Test - OpenCart', () => {
  it('should display and validate submenu items on mouse hover', () => {
    // Step 1: Visit the site
      cy.visit('https://demo.opencart.com', { failOnStatusCode: false });

    // Step 2: Hover over "Desktops" menu
    cy.get('.nav > :nth-child(1) > .dropdown-toggle')
      //.should('contain.text', 'Desktops')
      .realHover(); // Simulates real mouse hover

    // Step 3: Wait for dropdown to become visible
    cy.get('.nav > :nth-child(1) .dropdown-menu')
      .should('be.visible');

    // Step 4: Validate that submenu has at least 2 items
    cy.get('.nav > :nth-child(1) .dropdown-menu > li > a')
      .should('have.length.at.least', 2)
      .each(($el, index) => {
        cy.wrap($el).should('be.visible');
        cy.log(`Submenu item ${index + 1}: ${$el.text()}`);
      });

    // Step 5 (Optional): Click on "Show All Desktops"
    cy.contains('Show All Desktops').click();

    // Step 6: Verify navigation
    cy.url().should('include', 'path=20');
    cy.get('h2').should('contain.text', 'Desktops');
  });
});