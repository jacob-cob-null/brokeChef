export function header() {
    const header = document.createElement('div')
    header.className = 'w-[250px] h-[100px]  rounded-2xl text-6xl flex justify-center items-center font-title text-orange-400 text-outline-white'
    header.textContent = 'BrokeChef'

    return header
}