import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import checkoutPage from '../pageobjects/checkout.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'

describe('Fluxo de checkout', () => {
    it('Deve fazer login com sucesso', async () => {
        let profileTab = driver.isAndroid ? 'profile' : 'Account'
        await homePage.openMenu(profileTab)
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
    })
  it('Deve acessar um produto', async () => {
          await homePage.search()
          await (await browsePage.products).at(2).click()
          await expect(productPage.getProductTitle('Camiseta EBAC')).toBeDisplayed()
      })
    it('Deve colocar um produto no carrinho', async () => {
        await checkoutPage.addToCart()
        await checkoutPage.continueToPayment()
        await checkoutPage.completeCheckout()
        await expect(checkoutPage.transactionSuccessfulImage).toBeDisplayed()
    
    });
})

