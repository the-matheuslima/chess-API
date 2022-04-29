async function getStatus(username){
    const response = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
    const data = await response.json();
    return data
}

export { getStatus }