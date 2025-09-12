import { $ } from '@wdio/globals'

class HomePage {

    async openMenu(menu){
        await $(`id:tab-${menu}`).click()
    }
    async search(){
        await $(`~tab-Browse`).click()
    }
}

export default new HomePage();
