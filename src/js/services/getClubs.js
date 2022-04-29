async function getClubs(username){ 
    const response = await fetch(`https://api.chess.com/pub/player/${username}/clubs`)
    const data = await response.json()
    return data.clubs
}

export { getClubs }