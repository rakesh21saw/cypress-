/*
Cypress has no built-in capability to handle the child tab (switching tab). 
Cypress is designed to work ONLY in the parent/main tab.

 By default, Cypress does not support multiple browser windows or child window tabs. However, 
 we can still handle scenarios where a new window opens by following these approaches: 
*/
/*
1.Approach 1: Remove target="_blank" and Stay in the Same Tab
If a link opens in a new tab using target="_blank", we can modify it to open in the same tab:
for  this we have certain method availavle in the cypress which is called invoke.so once we get  this element by 
 using invoke method we can remove whichever attribute which is avilavle for the elementand perform the action of link 
 that will open the target page on the same tab.and then we can perform the perations.
*/
// 1.Approach 1: Remove target="_blank" and Stay in the Same Tab.

 describe("Handle approach 1",()=>{

  it.skip("Remove target",()=>{

   cy.visit(" ") // parent window or tab

     //cy.get("a[href='/windows/new']").click() // this will also open the new tabbut we can't perform any activity on new tab

     // first we have to remove the target attribute of the elements.

     // to remove the attribute of the elements in cypress we have a command called . invoke.
     // removeAttr is parameter- this is representing the attribute/
      // after removing the target we perform .click() action so target page will also open on the parent tab.

     cy.get("a[href='/windows/new']").invoke('removeAttr','target').click() // clic on link which will open child tab

     //now we can do verify like urls is correct or not or do  operation,validation like assertion

     cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

     // after  performing some operation in child tab we can move to parent tab for this we will use .go() command
     // and we need to pass one parameter called back
 
     cy.wait(4000); // after opening child tab wait for four second and go back to the parent tab.

     cy.go('back') // back to parent tab


  })

   // 2.Approach 2: Approach 2: Capture and Visit the New URL
    //If clicking a button or link opens a new tab, you can grab the link and navigate to it manually:


   it("Apprach2",()=>{
   
    cy.visit("https://the-internet.herokuapp.com/windows") // parent tab

    // now we will try to get the 'herf' arttribute value of the link url. for this we have to write a jQery function
    // (e): element captured that will store into some variable called e.

    cy.get("a[href='/windows/new']").then((e)=>{ // jquery function
       
      // e(element)-varable where we will put cptured element
        // to capture the herf any attribute from element we have a method called element which is represented by e.prop()

           let url=e.prop('href'); //Get the link URL

           cy.visit(url); // this will open the target url or Visit the new page in the same tab
    })

         cy.url().should('include','https://the-internet.herokuapp.com/windows/new') // validation

          cy.wait(6000);

           cy.go('back');
   })
    
 })