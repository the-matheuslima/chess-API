const moment = require('moment');

const screen = {
    userProfile: document.querySelector('#profile'),
    renderUser(user) {
        this.userProfile.innerHTML =""
        this.userProfile.innerHTML = `
            <div class="profile-basic-info">
                <div class="avatar-name">
                    <div class="avatar">
                        <img src="${user.avatar}" class="avatar-user" alt="player ${user.name}">
                    </div>

                    <div class="name-info">
                        <h1><a href="${user.url}" target="_blank">${user.username}</a> <span>${user.status}</span> </h1>
                        <span>${user.name}</span>
                    </div>
                </div>

                <div>
                    <span class="joined">joined ${moment.unix(user.joined).format("MM/DD/YYYY")}</span>
                </div>
            </div>

            <div class="profile-card-user-info">
                <div class="profile-card-user-item">
                    <p>last time online</p>
                    <span> ${moment.unix(user.last_online).fromNow()}</span>
                </div>
                <div class="profile-card-user-item">
                    <p>followers</p>
                    <span>${user.followers}</span>
                </div>
            </div>
        `
    },
    userStatus: document.querySelector('.mode-game'),
    renderStatus({chess_blitz, chess_bullet, chess_daily, chess_rapid }){
        this.userStatus.innerHTML =""
        this.userStatus.innerHTML = `      
            <a href="${chess_blitz.best.game}" target="_blank" class="category">
                <h2 class-"mode-title">Blitz</h2>
                <div>
                    <p>win ${chess_blitz.record.win}</p>
                    <p>loss: ${chess_blitz.record.loss}</p>
                    <p>current rating: ${chess_blitz.best.rating}</p>
                </div>
            </a>
      

            <a href="${chess_bullet.best.game}" target="_blank" class="category">
                <h2>Bullet</h2>
                <div>
                    <p>win ${chess_bullet.record.win}</p>
                    <p>loss: ${chess_bullet.record.loss}</p>
                    <p>current rating:  ${chess_bullet.best.rating}</p>
                </div>
            </a>

            <a href="${chess_daily.best.game}" target="_blank" class="category" class="category">
                <h2>Daily</h2>
                <div>
                    <p>win ${chess_daily.record.win}</p>
                    <p>loss: ${chess_daily.record.loss}</p>
                    <p>current rating:  ${chess_daily.best.rating}</p>
                </div>
            </a>

            <a href="${chess_rapid.best.game}" target="_blank" class="category" class="category">
                <h2>Rapid</h2>
                <div>
                    <p>win ${chess_rapid.record.win}</p>
                    <p>loss: ${chess_rapid.record.loss}</p>
                    <p>current rating:  ${chess_rapid.best.rating}</p>
                </div>
            </a>
        `
    },
    userClubs: document.querySelector('.clubs'),
    renderClubs(clubs) {
        this.userClubs.innerHTML = ""
        clubs.forEach(club => {
            this.userClubs.innerHTML += `
            <div class="user-clubspp">
                <a class="user-clubs" target="_blank" href="${club.url}">
                    <img src="${club.icon}" class="avatar-club" alt="">
                    <span>${club.name}</span>
                </a>
            </div>
            `
        })
    },
}

export {screen}

