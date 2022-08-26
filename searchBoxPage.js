const URL = 'http://zero.webappsecurity.com/'
const searchbox = '#searchTerm'
const typeSearchbox = '#searchTerm'

class searchboxpage{
    static visit() {
        cy.visit(URL)
    }

    static searchbox() {
        cy.get(searchbox).click()
    }

    static typeSearchbox(Zero) {
        cy.get(typeSearchbox).text(Zero)
    }
}

export default searchboxpage