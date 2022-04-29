async function getUser(username){ 
    const response = await fetch(`https://api.chess.com/pub/player/${username}`)
    const data = await response.json()
    return data 
}

export { getUser }
