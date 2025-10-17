export default function recipesView() {
    const page = document.createElement('div')
    page.className = 'flex h-full w-full flex gap-4 px-4 py-2'

    const header = document.createElement('h1')
    header.textContent = 'You have 8 recipes'
    header.className = 'text-3xl text-slate-700'

    page.appendChild(header)

    return page
}