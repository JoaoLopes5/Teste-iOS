import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'

describe('Pesquisar por produtos', () => {
   it('Deve acessar um produto', async () => {
           await homePage.search()
           await (await browsePage.searchInput).setValue('Es')
           // Primeiro clique para minimizar o teclado do celular.
           await browsePage.products()
           // Segundo clique para realizar a pesquisa.
           await browsePage.products()
          await expect(productPage.getProductTitle('Tênis Esportivo')).toBeDisplayed()
      })
})
