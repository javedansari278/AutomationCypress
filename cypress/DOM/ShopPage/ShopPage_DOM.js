class ShopPage{

    verify_Lbl(selector,expected){
        cy.get(selector).then($ele=>{
            var actual = $ele.text().trim()
            cy.highlight($ele)
            expect(expected).to.equals(actual)
        })
    }

}

export const shoppage = new ShopPage()