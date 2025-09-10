import { $ } from '@wdio/globals'

class ProductPage {
    async getProductTitle  (name) {
        return await $(`-ios predicate string:name =="${name}"`)
        
    }
}
export default new ProductPage()
