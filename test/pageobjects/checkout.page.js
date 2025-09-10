import { $ } from '@wdio/globals'

class CheckoutPage {
    async addToCart(){
        await $('~addToCart').click()
    }
    async continueToPayment(){
        await $('~selectAddressOrContinueToPayment').click()
    }
    async completeCheckout(){
        await $('~completeCheckout').click()
    }
    async transactionSuccessfulImage(){
        return await $('~transactionSuccessfulImage') 
//outra possível validação '~goBackHome'
    }
}

export default new CheckoutPage();
