export function header() {
    const header = document.createElement('div')
    header.className = 'bg-white w-[250px] h-[100px] absolute bottom-[35%] shadow-md rounded-2xl text-4xl flex justify-center items-center'
    header.textContent = 'BrokeChef'

    return header
}