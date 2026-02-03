//import 'cypress-iframe'
import 'cypress-real-events/support';
require ('@4tw/cypress-drag-drop')

describe("MouseHover_Operations",()=>{
 
 it.skip("MouseHover",()=>{

    cy.visit(" ")

// to perform the mouseover operation normally we use a method called trigger.
   cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > a')
      .should('not.be.visible') // before mouseover
    cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
    cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > a')
      .should('be.visible')
 })
 

    it.skip("Right click_Method1",()=>{
     
      // Method 1

      cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

      //to perform the right click action element for this we need to use trigger method nd for right click action we will use contextmenu event.

      cy.get('.context-menu-one').trigger('contextmenu') // right click action.

      // to check any particular element is visible or not after right click.

      cy.get('.context-menu-icon-delete > span').should('be.visible') // assertion

    })
  
    it.skip("Right Click_Method2",()=>{
// Method_2

   cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

     cy.get('.context-menu-one').rightclick() // right click action
  
      cy.get('.context-menu-icon-delete > span').should('be.visible')

    })
 // Doulble click action

  it.skip("Double Click",()=>{

    cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
    //cy.get("#iframeResult") // load the frame
    cy.get('body')

    // Approach 1 - By trigger Method

    //cy.get("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dbleclick')
    //cy.get("#iframeResult").find("#field2").should('have.value','Hello World!')
   
    // Approach 2- By double click method.

    //cy.get("button[ondblclick='myFunction()']").trigger('dblclick')
    //cy.get("#field2").should('have.text','Hello World!')
  })

  // DRAG AND DROP

    it.skip("Drag and Drop using plugin",()=>{

      // for this we need to find source element and target element,so which element we want to drag  and where to drop.

      cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
      cy.get('#box6').should('be.visible')
      cy.get('#box106').should('be.visible')
       cy.wait(3000)

      cy.get("#box6").drag('#box106',{force:true});
    })

  // SCROLLING THE PAGE.

  it("Scroling page",()=>{

    cy.visit('https://flagpedia.net/index')

    // japan flag
    cy.get(':nth-child(113) > a > img').scrollIntoView({duration:3000}) // element page
    cy.get(':nth-child(113) > a > img').should('be.visible')

    cy.get(':nth-child(31) > a > img').scrollIntoView({duration:3000})
    cy.get(':nth-child(31) > a > img').should('be.visible')

    // for footer

    cy.get('.flag-grid').scrollIntoView();




  })
})