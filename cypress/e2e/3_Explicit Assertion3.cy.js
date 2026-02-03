

describe("Explicit Assertion_BDD",()=>{
it.skip("Explicit",()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

     cy.get("input[placeholder='Username']").type("Admin")
     cy.get("input[placeholder='Password']").type("admin123")
     cy.get("button[type='submit']").click()
 
 // explicit assertion we can not directily use, for this we need to write  JS function bz they are not a built assertion
   
 let expName = "manda user";
 let expName1 = "paul"

 cy.get(".oxd-userdropdown-name").then( (x) => {

   let actName=x.text(); // this is co

   // bdd assertion

   expect(actName).to.equal(expName);
   expect(actName).to.not.equal(expName1) // if avove will fail then it will pass


 // tdd assertion

     assert.equal(actName,expName)
     assert.notEqual(actName,expName1)
   })

   let expText= "Dashboard"
    cy.wait(6000)
   cy.get(".oxd-main-menu-item.active").then((y) =>{

      let actText= y.text();
      // bdd

      expect(expText).to.equal(actText);
      assert.equal(expText,actText);

   })
})
 
 //Testing funda

  it("Validate complex data using expect",()=>{

   cy.visit("https://www.google.com/")




  })


})