export function bgImage(imageURL) {
    const image = document.createElement('div')
    image.classList = `bg-[url('${imageURL}')] brightness-90 bg-no-repeat bg-cover h-[60%] w-full rounded-b-[80px]`

    return image
}