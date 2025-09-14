export function button(text, type) {
    const button = document.createElement('button')
    button.className = `bg-slate-200 rounded-xl ${type}`
    button.textContent = `${text}`

    return button
}