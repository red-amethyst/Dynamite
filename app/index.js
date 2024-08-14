const $ = document

let amethystSound = new Audio('./music/sound effects/logo/amethyst.mp3')
let dynamiteSound = new Audio('./music/sound effects/logo/Creeper_fuse.ogg')
const modal = $.querySelector('.modal-container')
const accessBtn = $.querySelector('.access-btn')
const rejectBtn = $.querySelector('.reject-btn')
const logo = $.querySelector('.logo-container')
// const logoShineSvg = $.querySelector('.logo-shine')
const logoText = $.querySelector('.logo-text')
const loadingContainer = $.querySelector('.loading-container')
const loadingBarText = $.querySelector('.loading-text')
const gameText = $.querySelector('.game-text')
const gameLogo = $.querySelector('.game-logo')
const gameLogoFire = $.querySelector('.dynamite-fire')
const progressBarContainer = $.querySelector('.progress-bar-container')
const progressBar = $.querySelector('.progress-bar')
const range = $.querySelector('.range')


let soundEffectsFlag = false

logo.style.display = 'none'
loadingContainer.style.display  = 'none'
gameText.style.display = 'none'
progressBarContainer.style.display = 'none'
gameLogo.style.display = 'none'
gameLogoFire.style.display = 'none'

accessBtn.addEventListener('click', e => {
    $.body.style.backgroundColor = '#fff'
    modal.style.display = 'none'
    setTimeout(() => {
        logo.style.display = 'inline-block'
        setTimeout(() =>{
            soundEffectsFlag = true
            // soundEffectsFlag && amethystSound.play()
        },1000)
    },1000)

})
rejectBtn.addEventListener('click', e => {
    $.body.style.backgroundColor = '#fff'
    modal.style.display = 'none'
    setTimeout(() => {
        logo.style.display = 'inline-block'
    },700)
})

logoText.addEventListener('animationend', e => {
    logo.style.display = 'none'
    loadingContainer.style.display  = 'block'
})
loadingContainer.addEventListener('animationend', () => {
    gameText.style.display = 'inline-block'
    progressBarContainer.style.display = 'inline-block'
    gameLogo.style.display = 'inline-block'
    gameLogoFire.style.display = 'inline-block'
   soundEffectsFlag &&  dynamiteSound.play()
})
progressBar.addEventListener('animationstart', () => {
let n = 1
let loadingText = setInterval(() => {
    loadingBarText.innerHTML = n + '%'

    if (n < 100){
        n++
    }else{
        soundEffectsFlag && dynamiteSound.pause()
        // console.log(location.host)
        if (location.host == 'red-amethyst.github.io'){
            location.replace('https://red-amethyst.github.io/Dynamite/start-page.html')
        }else{
            location.replace('/start-page.html')
        }
        clearInterval(loadingText)
    }
},60)
})



// localStorageHandler(item)
// https://dynamite-8c5de-default-rtdb.firebaseio.com/
