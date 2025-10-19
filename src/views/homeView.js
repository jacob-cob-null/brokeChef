import navbar from "./homeComponents/navbar"
import sidebar from "./homeComponents/sidebar"

export default function renderHome(menuTitle = 'BrokeChef') {
    const mainPage = document.createElement('div')
    mainPage.className = `
    h-screen w-full bg-white 
    grid grid-rows-[80px_1fr] 
    overflow-hidden
  `

    mainPage.append(navbar(menuTitle))

    const body = document.createElement('div')
    body.id = 'body'
    body.className = 'w-full h-full overflow-y-auto'
    mainPage.append(body)

    mainPage.append(sidebar())

    return mainPage
}
