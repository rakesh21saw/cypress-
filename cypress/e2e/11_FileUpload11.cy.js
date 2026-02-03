import 'cypress-file-upload'

describe("FileUpload",() => {

it.skip("Single File Upload",() => {

 cy.visit("https://the-internet.herokuapp.com/upload")  // launch application

 // for file uload we will use a method .attatchFile

 cy.get("#file-upload").attachFile('Dec_Airtel_.pdf')
 cy.get('#file-submit').click()
 cy.wait(3000); // take some time to upload the file
 cy.get('h3').should('have.text','File Uploaded!')
})
// at the time of uploading the file how to rename the file.

it.skip("Single File Upload rename",() => {

    cy.visit("https://the-internet.herokuapp.com/upload")  // launch application
   
    // to rename the file name
    cy.get("#file-upload").attachFile({filePath:'Dec_Airtel_.pdf', fileName:'myfile.pdf'})
    cy.get('#file-submit').click()
    cy.wait(3000); // take some time to upload the file
    cy.get('h3').should('have.text','File Uploaded!')

})
 
// UPOLAD THE FILE BY DRAG AND DROP

   it.skip("File Upload - Drag and Drop",() => {

    cy.visit("https://the-internet.herokuapp.com/upload")  // launch application

    // here we need to pass additional parameter bz this file will attach only through drag and drop
   
    cy.get("#drag-drop-upload").attachFile('Feb_Airtel.pdf',{subjectType:'drag-n-drop'})

    cy.wait(5000)

    cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('Feb_Airtel.pdf')

    

   })

   // UPLOAD MULTIPLE FILE

 it.skip("Upload Multiple File",() => {

    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")  // launch application

    cy.get('#filesToUpload').attachFile(['Feb_Airtel.pdf','Dec_Airtel_.pdf'])
    cy.get(':nth-child(6) > strong').should('have.text','Files You Selected:')
 })

 //  file Upload - shadwo down.

   it("File upload - shadow down", () => {

      cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")

      cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('Feb_Airtel.pdf')

     cy.wait(6000)
     cy.get('.smart-item-name',{includeShadowDom:true}).contains('Feb_Airtel.pdf')


   })
 
})
