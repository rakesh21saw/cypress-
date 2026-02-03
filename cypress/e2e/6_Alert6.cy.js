/*
In Cypress, handling JavaScript alerts (pop-ups) is straightforward because Cypress automatically listens
 for browser alerts and suppresses them. However, we can still assert and interact with alerts using cy.on().

sometimes when we are working with any application we can get some kind of followers or alerts  or we pop ups until unless we handle these 
alerts we can process with further activities or further action on application.

Diffrent type of alerts.

1.Javascript Alert: It will have some text and 'ok' botton.

2.Javascript Confirmation Alert: It will have some text with 'ok' and 'cancel' buttons.

3.Javascript Prompt Alert: It will have some text with a text box for user input aling with 'ok' or cancel.

4. Autenticated Alert

* How to handle these alert in cypress?
 => Cypress is bydefault will handle the alerts ao we dont nned to write any separate script.
    but som time we want to do some validation like what is message displayedon the alert window or 
    if want to pass some text in the alert window like it is kind of dialog box or dialog kind of alert window 
    we need to pass some text. 

*/

// javascript Alert: It will have some text and 'ok' botton.
 
describe("Alerts",() => {
 it.skip("JS Alert",() => {
  cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
   cy.get("button[onclick='jsAlert()']").click()
  // here we sucessfully click on that botton but we have not seen a alert -
  //- window bz the alert window is automatically handled by the cypress
  
  // but we need to validate something on alert window fo this we need to  
  // to trigger event('window:alert')  and  we use cy.on method.
   
  //  window:alert':  it sends event and we capture the alert window
  //  (t):  it represent some alert window or it is simple a variable we are passing into method.

    cy.on('window:alert',(t)=>{ // t - is a variable whwere we capturing the alert window.
    
   // inside this we need to validate  the text which is present in alert  window . for this we will use a assrtion expect
    // assertion
      // here alert window is automitacally closed by cypress.
     expect(t).to.contains('I am a JS Alert');// verifying text is present on alert window or not/
    })

    // after closing the alert window we are validating the text which is present on UI or not .
    
    cy.get('#result').should('have.text','You successfully clicked an alert') // assertion

 }) 
   
 //2.Javascript Confirmation Alert: It will have some text with 'ok' and 'cancel' buttons.
  // By clicking “Ok” the user sends a TRUE statement, while by “Cancel” the user sends a FALSE statement.
  
  it.skip("JS confirmation Alert ok- Botton",() =>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
     cy.get("button[onclick='jsConfirm()']").click()

     cy.on('window:confirm',(t)=>{
      expect(t).to.contains('I am a JS Confirm');
     })

     // here cypress automatically closed alert button by using ok buttons- defauult

      cy.get('#result').should('have.text','You clicked: Ok')

  })
    
  // to close window by cancel bitton
   
  it.skip("JS confirmation Alert cancel",() =>{
  
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
     
     cy.get("button[onclick='jsConfirm()']").click()

     cy.on('window:confirm',(t)=>{
      expect(t).to.contains('I am a JS Confirm');
      //return false;
     })
   
     cy.on('window:confirm',(t)=> false);// this will automatically while closing alert window it will  use cancel button.

     cy.get("#result").should('have.text','You clicked: Cancel') // validation using assertion

    })
    
  //3.Cypress does not automatically handle prompts like alerts and confirms. 
  // You must stub the prompt() method:
  
  // Javascript Prompt Alert: It will have some text with a text box for user input aling with 'ok'
//Usually, after a prompt box, another page is loaded with the inputs the user enters. After the user enters the input value, the user gets the option to click either “Ok” 
// which sends the value through the function, or “Cancel” to cancel the process

it.skip("JS prompt Alert with ok",() =>{

  cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
  
// before opening the  light window we have to write an event in which we have to pass the text into the input box.

// here we have to write some other methos to write the event
// this event should be triggred before opening the alrt window.
// if window is open then we need to capture that window in a variable.

 cy.window().then((win)=>{ // this event is created before opening the light window/// win is a variable
     cy.stub(win,'prompt').returns('welcome Rakesh')
 })

   cy.get("button[onclick='jsPrompt()']").click()

   // cypress will automatically close prompted alert - it will use ok buttond by default.
   cy.get('#result').should('have.text','You entered: welcome Rakesh')

    
   



})
 //
 it.skip("JS prompt Alert with cancel",() =>{ 

  cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
  cy.window().then((win)=>{ // this event is created before opening the light window/// win is a variable
     cy.stub(win,'prompt').returns('welcome Rakesh')
 })

   cy.get("button[onclick='jsPrompt()']").click()
   cy.on("window:prompt",(win) => false)
    //cy.get("#result").should('have.text','You entered: null')

}) 
  // 4. Authincated Alert.

  it("Authincated Alert",()=>{
    //M-1
    cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin",password:"admin"}})
    cy.get("div[class='example'] p").should('have.contain','Congratulations')

    // m-2

    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get("div[class='example'] p").should('have.contain','Congratulations')


  }) 


}) 

