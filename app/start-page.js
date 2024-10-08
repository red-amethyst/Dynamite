let backgroundMusics = [
    new Audio('./music/background musics/background music (1).m4a'),
    new Audio('./music/background musics/background music (2).m4a'),
    new Audio('./music/background musics/background music (3).m4a'),
]
let soundEffects = [
    new Audio('./music/sound effects/click/click.mp3')
]

const $ = document
const ul = $.querySelector('ul')
const menuContainer = $.querySelector('.menu-container')
const backBtn = $.querySelector('svg')

function liCreator  (liCount,texts,onClick) {
    ul.innerHTML = ''
    let i = 0
    for (i; i < liCount; i++) {
        let liElem = document.createElement('li');
        liElem.className = 'menu-btn'
        liElem.innerHTML = texts[i]
        // onClick && liElem.addEventListener('click', onClick)
        onClick[0] ? liElem.addEventListener('click', onClick[i]) 
        : onClick && liElem.addEventListener('click', onClick) 

        ul.appendChild(liElem)
    }
}

function start () {
    soundEffects[0].play()

    liCreator(4,['start','options','credits','exit'],[story,option,credit,exit])

    let i = 0
    let j = 0
    setInterval(() => {
        if (j == 0 || backgroundMusics[i].currentTime >= backgroundMusics[i].duration) {
            backgroundMusics[i].currentTime = 0
            i += 1
            if(i == 3) {i = 0}
            backgroundMusics[i].play()
            console.log(i)
            // console.log(backgroundMusics[i])
            // console.log(backgroundMusics[i].currentTime)
            // console.log(backgroundMusics[i].duration)
            j++
        }
    },1000)

    backBtn.style.display = 'none'

}

function story () {
    soundEffects[0].play()
    liCreator(3,['new game','load game','chapters'],[newGame,oldGame,Chapters])
    backBtn.style.display = 'inline-block'
    backBtn.addEventListener('click',() => back(4,['start','options','credits','exit'],[story,option,credit,exit]))
}
function option () {
    soundEffects[0].play()
    backBtn.style.display = 'inline-block'
        liCreator(4,['start','options','credits','exit'],[story,option,credit,exit]); backBtn.style.display = 'none'

}
function credit () {
    soundEffects[0].play()
    backBtn.style.display = 'inline-block'
        liCreator(4,['start','options','credits','exit'],[story,option,credit,exit]); backBtn.style.display = 'none'
}
function exit () {
    soundEffects[0].play()
    console.log('fsroijngfrws')
    window.close()
}

function newGame () {
    soundEffects[0].play()

}
function oldGame () {
    soundEffects[0].play()

}
function Chapters () {
    soundEffects[0].play()

}

function back (liCount,texts,onClick) {
    soundEffects[0].play()
    liCreator(liCount,texts,onClick)
    backBtn.style.display = 'none'
    backBtn.removeEventListener('click', () => back(liCount,texts,onClick))
}

liCreator(1,['tap to start'],start)
menuContainer.style.alignItems = 'center'
backBtn.style.display = 'none'
