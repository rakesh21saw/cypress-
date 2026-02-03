// 1. assertion

describe("Rahul",() => {
  
    it("Assertion",() => {
       
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")  
        
      cy.get("input[placeholder='Search for Vegetables and Fruits']").type('ca').should('have.value','ca')
      cy.wait(2000)
      cy.get('.product:visible').should('have.length',4) // *
       
      // parent child chaining= .find() is used to search for child elements inside a parent element.
      cy.get('.products').should('have.length',1) // here is products
      cy.get('.products').find('.product').should('have.length',4) // selected all four matching
      cy.get('.products').find('.product').eq(2) // 2nd(index no here) product out of four product
     cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click() // this is for Capsicum add to cart
     cy.get('.products').find('.product').eq(2).should('contain.text', 'Capsicum').contains('ADD TO CART').click()
       
       
      // lets find where cashew is present by j query method

      cy.get('.products').find('.product').each(($productitem,index) => {
        const item = $productitem.find('h4.product-name').text()
        if (item.includes('Cashews')) {
           cy.wrap($productitem).find('button').click() // this is for cashew to add to cart
           cy.wrap($productitem).contains('ADD TO CART').click() //other method for cashew to add to cart.
           expect(item).to.include('Cashews') // chai assertion for cashew validation
        }

      // now validate  all details  for cashew by j qyery method.
      cy.get(".products").find('.product').each(($Details,index)=>{
        const productName  = $Details.find('h4.product-name').text();
        

        if (productName.includes('Cashews')) {
        const price = $Details.find('.product-price').text()
         // assertion to validate
         expect(productName).to.include('Cashews')
           expect(price).to.match(/^\d+/) // price

            cy.wrap($Details).contains('ADD TO CART').click()// add to cart 
        }
      })
        
      })
      
      // now validate to logo using promise
       /*
      const logo = cy.get('.brand')
      logo.text()
      cy.log(logo.text()) // it print logo.text is not a function
     
      here cypress confused bz we introduced non cypress code(variable=logo) so that cypress can not handle it.
      in that case it is our duty to relove duty manually by giving .then() and catch
      */
      // when non cypress things come to picture at this time we need to apply promises manually by .then()

      // when the promise is resolved the resolved promise will throw an variavle in then()

      cy.get('.brand').then((logo) => { // logo is varable
        const LogoText = logo.text()
        cy.log(LogoText) // GREENKART
        //expect(LogoText).to.equal('GREENKART')// assertion
      })
      
      // by cypress method logo

      cy.get('.brand').should('be.visible').and('have.text','GREENKART')
      
    })

})