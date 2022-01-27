import { shoppage } from '../../../DOM/ShopPage/ShopPage_DOM'

var selector = require('../../../DOM/ShopPage/ShopPage.selector.json')
var filepath='ShopPage/ShopPage_Data.json'
var expected

describe('Shop Page',()=>{

    before(()=>{
        cy.fixture(filepath).then($expected=>{
            expected=$expected
        })
        cy.visit('/')
    })

    it('Click on Shop Link',()=>{
        cy.click_element(selector.ShopLink)
        shoppage.verify_Lbl(selector.RefineBy_Lbl,expected.RefineBy_Lbl)
    })
})