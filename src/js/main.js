import { getUser } from './services/getUser.js'
import { getStatus } from './services/getStatus.js';
import { getClubs  } from './services/getClubs.js';
import { gettitle } from './services/getTitle.js';

// import { user } from './objects/user.js';
import { screen } from './objects/screen.js'

// console.log(getUser)

const inputSearch = document.querySelector('.input-search');

inputSearch.addEventListener('keypress', ({key, target}) => {
    if(key == "Enter") {
        console.log(target.value)
        getUserData(target.value)
    }
})

async function getUserData(userName) {
    const userResponse = await getUser(userName)
    const userStatus = await getStatus(userName)
    const clubs = await getClubs(userName)

    if(userResponse.message) {
        alert('Erro')
    } else {
        screen.renderUser(userResponse)
        screen.renderStatus(userStatus)
        screen.renderClubs(clubs)
    }
}

document.querySelectorAll('.title').forEach(e=> e.addEventListener('click', () => {
    const getTitle = e.getAttribute('data-val')
    getFilterTitle(getTitle)
}))

async function getFilterTitle(title) {
    const titles = await gettitle(title)
    screen.renderListTitle(titles)
}