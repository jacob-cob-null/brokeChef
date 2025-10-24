export function resultContainer() {
    const cont = document.createElement('div')

    cont.className = 'h-full w-full flex flex-col overflow-x-hidden bg-slate-100 shadow-inner rounded-2xl overflow-x-hidden overflow-y-scroll'
    cont.id = 'searchRes'
    return cont
}