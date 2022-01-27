// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('verify_elements',(selector,expected)=>{
    cy.get(selector).each(($ele,index)=>{
        var actual = $ele.text().trim()
        expect(expected[index]).to.equals(actual)
    }).then($ele=>{
        cy.highlight($ele)
    })
})

Cypress.Commands.add('click_element',(selector)=>{
    cy.get(selector).then($ele=>{
        cy.highlight($ele)
        cy.wrap($ele).click()
    })
})

Cypress.Commands.add('highlight',($ele)=>{
    $ele.css('border','4px solid red')
    cy.screenshot({capture:'runner'})
    cy.wrap($ele).invoke('removeAttr','style','border')
})

Cypress.Commands.add('enter_text',(selector,data)=>{
    cy.get(selector).then($ele=>{
        cy.wrap($ele).type(data)
        cy.highlight($ele)
    })
})