export function button(text, type) {
    const button = document.createElement('button')
    button.className = `bg-white outline-4 outline-orange-300 font-body rounded-xl ${type} hover:bg-orange-50 active:bg-orange-100 transition-colors duration-150`

    const icon = type == 'google' ? `<span class="material-icons-round" style="font-size:30px">account_circle</span>` : `<span class="material-icons"  style="font-size:30px">person_off</span>`

    button.innerHTML = `<span class="flex items-center justify-around font-body text-slate-700">
         ${icon}
         ${text}
         </span>`

    return button
}