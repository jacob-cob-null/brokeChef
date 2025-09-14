export default function pageView(page) {
    const app = document.getElementById('app')
    app.innerHTML = ''
    app.append(page())
}