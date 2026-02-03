/*
Tables are collections of different web elements, usually consisting of multiple editable/non-editable 
fields in a form of inputs, text areas, buttons, dropdowns and similar.
Handling tables in Cypress involves interacting with table elements,
 extracting data, verifying contents, and performing actions like clicking buttons within the table. 
 */

 // Here are some ways to handle tables in Cypress:

 // 1. CHECK NUMBER RAWS AND COLUMNS. 

 describe(" Handle Tables ",() =>{

    beforeEach("Login",()=>{  // hooks

        cy.visit("https://demo3x.opencartreports.com/admin/index.php")

        cy.get("#input-username").type('demo')
        cy.get("#input-password").type('demo')
        cy.get("[type='submit']").click();

    // customer---->

        cy.get("#menu-customer>a").click(); // customer main menu
        cy.get("#menu-customer>ul>li:first-child").click()  // customer sub/child item.
    })

      it("CHECK Number RAWS AND COLUMN in each page",()=>{

    // now ewe will check number of row and columns in single page,
    // for this we need to first capture all the raws from table by writing proper locator.

    // number of raws
     cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','8'); // assertion which will find total no of raws
    
     // number of column.
     cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','10')

    })
///////////////////////////////////////////////////////////////////////////////////

     it("Check cell data from specific row and column",()=>{

     

// for this we need to write a  proper locator which will exactly point to the cell.

     cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(4)>td:nth-child(3)")
      .contains('test1@test.com');

    })
    
     ////////////////////////////////////////////////////////////////////////////////////////////

    it("Read all the rows and columns data in first  page",()=>{

   // once we get all raw  we need  to  repeat each and every row again and we have to capture each and every column 
   // in every raw.for this we use a operator called .each  
   // In each we need to pass three parameter. ($row,index, $rows)
   // $row: is a variable wich cn hold the particular row.
   // $rows(it is variable): representing is all the rows we captured.
   // index: every row is having one index, this index is varible which will hold the index of the particular rows
   
    cy.get("table[class='table table-bordered table-hover']>tbody>tr") // captured all rows

        .each(($row, index,$rows)=>{   //it is repeating each and every rows.
             
    // to get the $row we will use a method called .wrap and  by this command we will get first row
    // To inside the row we have to read all the columns. for this we will use command.within
    //  .within( ()=>{} ) : by this we will get column from the table in the particular row.

      cy.wrap($row).within( ()=>{ 

        cy.get("td").each( ($col,index,$cols)=>{ // it is representing all columns in  each and every particular row
          
          cy.log($col.text());
  
          // notes
          //1. First capture all the rows from the table
          //2. then repeat each block for every row/
          //3. again evrty row  having a multiple columns, so we need to wrap that row inside this  we need to implement
          // one more each block which will get all the columns from the particular rows.
          
        }) 
      })
    })
  })

   // Pgination method.
   //1. first we need to get total number of pages which are present in table

   it("Pagination",() => {




   })
 })