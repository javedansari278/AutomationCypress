var selector = require('../../../DOM/LandingPage/LandingPage_Selector.json')
var filepath='LandingPage/LandingPage_Data.json'
var expected

describe('Landing page suite',()=>{

    before(()=>{
        cy.fixture(filepath).then($expected=>{
            expected=$expected
        })
        cy.visit('/')
    })

    it('Verify Link are visible on landing page',()=>{
        cy.verify_elements(selector.LandingPge_Links,expected.LandingPge_Links)
    })
})