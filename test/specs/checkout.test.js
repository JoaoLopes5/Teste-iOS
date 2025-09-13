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

    // espera o campo de email ficar visível
    await (await loginPage.emailInput).waitForDisplayed()
    await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')

    // espera a tela pós-login carregar (ex: botão logout ou nome do usuário)
    await (await homePage.profileName).waitForDisplayed()
})

  it('Deve acessar um produto e completar o fluxo de checkout', async () => {
    await homePage.search()

    // garante que o campo de busca apareceu
    await (await browsePage.searchInput).waitForDisplayed()
    await (await browsePage.searchInput).setValue('Es')

    // primeiro clique -> minimizar teclado
    await (await browsePage.products()).waitForDisplayed()
    await browsePage.products()

    // segundo clique -> executar busca
    await browsePage.products()

    // espera o produto aparecer
    const tituloProduto = await productPage.getProductTitle('Tênis Esportivo')
    await tituloProduto.waitForDisplayed()
    await expect(tituloProduto).toBeDisplayed()

    // botão adicionar ao carrinho
    const addToCartBtn = await checkoutPage.addToCart()
    await addToCartBtn.waitForDisplayed()
    await addToCartBtn.click()

    // botão continuar para pagamento
    const continueBtn = await checkoutPage.continueToPayment()
    await continueBtn.waitForDisplayed()
    await continueBtn.click()

    // botão finalizar checkout
    const finishBtn = await checkoutPage.completeCheckout()
    await finishBtn.waitForDisplayed()
    await finishBtn.click()
})

 })

