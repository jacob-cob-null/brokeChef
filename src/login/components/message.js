export function message() {
    const msg = document.createElement('h1')
    msg.className = 'text-xl font-title text-slate-700 mb-8'
    msg.textContent = 'Welcome back, Master of Leftovers'

    return msg
}