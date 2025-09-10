import { $, $$ } from '@wdio/globals'

class BrowsePage {
 get searchInput(){
    return $(`-ios predicate string:name == "searchInput"`)
 }
 get products(){
     return $$(`//XCUIElementTypeOther[@name="productDetails"]`)
 }
  
}

export default new BrowsePage();
