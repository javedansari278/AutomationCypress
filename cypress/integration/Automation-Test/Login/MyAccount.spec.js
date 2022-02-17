import { shoppage } from '../../../DOM/ShopPage/ShopPage_DOM'

var selector = require('../../../DOM/MyAccount/MyAccount_Selector.json')
var filepath='MyAccount/MyAccount_Data.json'
var expected

describe('Account Page',()=>{

    before(()=>{
        cy.fixture(filepath).then($expected=>{
            expected=$expected
        })
        cy.visit('/')
    })

    it('Click on Account Link',()=>{
        cy.click_element(selector.MyAccount_Link)
        shoppage.verify_Lbl(selector.Login_Lbl,expected.Login_Lbl)
    })

    it('Enter username and password',()=>{
        cy.enter_text(selector.username,expected.username)
        cy.enter_text(selector.password,expected.password)
    })

    it('Click on Login Button',()=>{
        cy.click_element(selector.Login_btn)
        shoppage.verify_Lbl(selector.Dashboard_Lbl,expected.Dashboard_Lbl)
    })
    //testuser@123.com
    //Testuser@testuser@123
})