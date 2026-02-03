
// HOOKS AND TAG.

// so before executing all the test suppose we want to execute some more statment  like launch  browser oe launch application url
// 
// there are four types of hook. 
// 1> before - It will execute before starting all the test in our describe block. it will execte only once.

//  2> after - It will execute after completion of all it blocks in our describe.it will execte only once.

// 3> beforeEach  - this  hook will be executed  multiple times before starting  every it block

// .4>afterEach - this  hook will be executed  multiple times after completion of  every it block



describe("Hooks and Tag",() => {

   // before executing all it block we need to launch application only once, it will be common for every it block.
   
   
   before(()=>{   // it will execute  before starting all it block
    
    cy.log("***   Launch application   ***")

   })
  
   // after competion all it block, we need to close the application. for this we will use after hook.

      after(()=>{
      
        cy.log("close app")

      })

 // this hook will exceute multiple times  starting every it block.
       beforeEach(()=>{

       cy.log(" login ")

       })

    
// 
       afterEach(()=>{

        cy.log(" logout ")
 
        })

    it("Search", () => {

     cy.log("***     Searching    ***")


    })
  
    it(" advance Search", () => {

        cy.log("***     advance Searching    ***")
   
   
       })


       it("Listining product", () => {

        cy.log("***     Listining product    ***")
   
   
       })
})