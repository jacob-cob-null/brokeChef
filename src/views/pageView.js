//utility for switching page within app
export function pageView(page) {
    const app = document.getElementById('app')
    app.innerHTML = ''
    app.append(page())
}
//utility for switching menu views in body
export function menuView(menu) {
    const body = document.getElementById('body')
    body.innerHTML = ''
    body.append(menu())
}