export function bgImage() {
    const image = document.createElement('div')
    image.classList = `bg-[url('/bg-1.jpg')] hue-rotate-[-14deg] bg-cover bg-no-repeat bg-center shadow-inner h-[60%] w-full rounded-b-[90px] sm:rounded-b-full`

    return image
}