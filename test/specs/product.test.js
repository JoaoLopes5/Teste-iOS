import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'

describe('Pesquisar por produtos', () => {
    it('Deve acessar um produto', async () => {
        await homePage.search()
        await (await browsePage.products).at(2).click()
        await expect(productPage.getProductTitle('Camiseta EBAC')).toBeDisplayed()
    })
})
