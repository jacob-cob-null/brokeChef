import { bgImage } from "./components/bg_image.js"
import { message } from "./components/message.js"
import { header } from "./components/header.js"
import { button } from "./components/buttons.js"

export function loginPage() {
    const page = document.createElement('div')

    page.className = 'bg-slate-50 w-full h-full relative flex items-center flex-col'
    page.append(bgImage('./public/bg_image.webp'))
    page.append(header())
    page.append(message())

    const btnSection = document.createElement('section')
    btnSection.className = 'mt-12 grid grid-rows-2 h-[120px] w-[250px] gap-4'

    btnSection.append(button('Continue with Google', 'google'))
    btnSection.append(button('Continue with Google', 'anonymous'))

    page.append(btnSection)

    return page
}