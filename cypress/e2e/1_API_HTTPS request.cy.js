//
describe("HTTPS REQEST",()=>{

    it("Get request",()=>{
     
        
        cy.request("https://jsonplaceholder.typicode.com/posts")
        .its("status")
         .should('equal',200)
  })
     it("Post Reqest",() =>{

        // inside post we need to pass multiple para meter like type, url , body....

      cy.request({
          method : 'post',
          url: "https://dummy.restapiexample.com/api/v1/create",failOnStatusCode: false,
          body: {
                "name":"test",
                "salary":"123",
                "age":23
              }
          })
           
           .then((response) => {
  cy.log(`Status: ${response.status}`)
  expect([200, 201, 429]).to.include(response.status) // Accept 429 temporarily
})
           
     })
           
})