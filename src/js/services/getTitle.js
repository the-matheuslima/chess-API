async function gettitle(title){
    console.log(title)
    const response = await fetch(`https://api.chess.com/pub/titled/${title}`);
    const data = await response.json();
    return data
}

export { gettitle }