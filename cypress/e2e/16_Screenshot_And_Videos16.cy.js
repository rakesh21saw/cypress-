describe("Screenshot and Videos",()=>{

it.skip("Capture Screenshot and Videos",()=>{

    cy.visit("https://naveenautomationlabs.com/opencart/");

    cy.screenshot("homepage"); // homepage screenshot

    // to capture any specific element need rto write css selector
 cy.wait(5000)
    cy.get("img[title='naveenopencart']").screenshot('logo')// logo screenshot

    

//How to capture the screenshot and video automatically when the failure happen.

// whenever test got failed cypress automatically capture the screenshot and video.
    // but when it will capture the screenshot  or video so we have to run the test in cmd or by usung ci tool
})

it("Capture Screenshot and Videos",()=>{

    cy.visit("https://naveenautomationlabs.com/opencart/");
    
    cy.get("li:nth-child(7) a:nth-child(1)").click() // doing for cameras

    cy.get("div[id='content'] h2").should('have.text','Tablets') // failing this intentionally
})

})