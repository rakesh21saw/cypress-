describe("DataDriven", () => {

    it("Data_Driven_Test",() => {

    cy.fixture("orangehrm11").then((data) => { 

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

// this time we have multiple sets  of data so we need to itrate for every data input we have to repeat multiple times

   data.forEach((userdata)=> {  // it itreating each and every set

    cy.get("input[placeholder='Username']").type(userdata.username);
    cy.get("input[placeholder='Password']").type(userdata.password);   
    cy.get('button[type="submit"]').click();

   if(userdata.username=='Admin' && userdata.password=="admin123")
   {
    cy.get(':nth-child(2) > .oxd-main-menu-item').should('have.text',userdata.expected);
     
    cy.get('.oxd-userdropdown-tab').click(); // logout dr0pdown
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); // lpgout button
   }
       
    else{
              
        cy.get('.oxd-alert').should('have.text',userdata.expected);

    }

       })
    }) 
 })

 
})