const generateSlug = (title) => {
    const url = `${title.toLowerCase().split(' ').join('-')}.com`
    return url
}
console.log(generateSlug("AlmaBetter Web Dev"));