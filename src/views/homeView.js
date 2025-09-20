import navbar from "./homeComponents/navbar"
import sidebar from "./homeComponents/sidebar"

export default function renderHome(menuTitle = 'Recipes') {
    const mainPage = document.createElement('div')
    mainPage.className = 'h-full w-full bg-white grid grid-rows-[80px_minmax(900px,_1fr)_100px] overflow-hidden'

    //append navbar
    mainPage.append(navbar(menuTitle))

    //body
    const body = document.createElement('div')
    body.id = 'body'
    body.className = 'w-full h-full'

    mainPage.append(body)

    //sidebar
    mainPage.append(sidebar())

    return mainPage
}