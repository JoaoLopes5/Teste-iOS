import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import checkoutPage from '../pageobjects/checkout.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'

describe('Fluxo de checkout', () => {
    it('Deve fazer login com sucesso', async () => {
        let profileTab = driver.isAndroid ? 'profile' : 'Account'
        await homePage.openMenu(profileTab)
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
    })
  it('Deve acessar um produto e completar o fluxo de checkout', async () => {
        await homePage.search()
        await (await browsePage.searchInput).setValue('Es')
          //Primeiro clique para minimizar o teclado do celular.
        await browsePage.products()
          //Segundo clique para realizar a pesquisa.
        await browsePage.products()
        await expect(productPage.getProductTitle('Tênis Esportivo')).toBeDisplayed()
        await checkoutPage.addToCart()
        await checkoutPage.continueToPayment()
        await checkoutPage.completeCheckout()
      })
 })

