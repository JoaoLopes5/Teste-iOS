import { $, $$ } from '@wdio/globals'

class BrowsePage {
 get searchInput(){
    return $(`-ios predicate string:name == "searchInput"`)
 }
 async products(){
      await $(`-ios class chain:**/XCUIElementTypeOther[\`name == "productDetails"\`][3]`).click()
 }
  
}

export default new BrowsePage();
