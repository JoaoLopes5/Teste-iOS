import { $, $$ } from '@wdio/globals'

class BrowsePage {
 get searchInput(){
    return $(`-ios predicate string:name == "searchInput"`)
 }
 async products(){
     return await $$(`//XCUIElementTypeOther[@name= "productDetails"]`)
 }
  
}

export default new BrowsePage();
