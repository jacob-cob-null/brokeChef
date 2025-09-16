import { bgImage } from "./components/bg_image.js"
import { message } from "./components/message.js"
import { header } from "./components/header.js"
import { button } from "./components/buttons.js"
import pageView from "../views/pageView.js"

import renderHome from "../views/homeView.js"


export function loginPage() {
    const page = document.createElement('div')

    page.className = 'bg-slate-50 w-full h-full relative flex items-center flex-col'
    page.append(bgImage())
    page.append(header())
    page.append(message())

    const btnSection = document.createElement('section')
    btnSection.className = 'mt-12 grid grid-rows-2 h-[120px] w-[250px] gap-4'

    btnSection.append(button('Continue with Google', 'google'))
    btnSection.append(button('Continue as a Guest', 'anonymous'))

    loginEvent(btnSection)

    page.append(btnSection)


    return page
}

function loginEvent(section) {
    section.addEventListener('click', (e) => {
        if (e.target.classList.contains('google')) {
            alert('Logging in through google auth!')

            //handle google login
            pageView(renderHome)

        }
        if (e.target.classList.contains('anonymous')) {
            alert('Logging in as a guest')

            //handle guest
            pageView(renderHome)

        }
    })
}