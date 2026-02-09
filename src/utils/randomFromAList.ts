
function randomFromAList(stringList: string[]): string {
    const randomNumber = Math.random()
    const chosen = Math.floor(randomNumber*stringList.length)
    return stringList[chosen]
}

export default randomFromAList