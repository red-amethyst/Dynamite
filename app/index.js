const $ = document

let amethystSound = new Audio('./music/sound effects/logo/amethyst.m4a')
let dynamiteSound = new Audio('./music/sound effects/logo/Creeper_fuse.ogg')
let soundEffectsFlag = false

const rotateContainer = $.querySelector('.rotate-mobile-container') 
const mobile = $.querySelector('.mobile')
const rotateText = $.querySelector('.rotate-warning-text-container')
const mobileTopArrow = $.querySelector('.mobile-top-arrow')
const mobileBottomArrow = $.querySelector('.mobile-bottom-arrow')

const modal = $.querySelector('.modal-container')
const accessBtn = $.querySelector('.access-btn')
const rejectBtn = $.querySelector('.reject-btn')

// for 'rotate your phone' animation
if (window.innerHeight <= 481) {
    modal.style.display = 'none'
    mobile.addEventListener('animationend', () => {
        rotateText.style.display = 'inline-block'
        mobileTopArrow.style.display = 'none'
        mobileBottomArrow.style.display = 'none'
        setTimeout(() => {
            rotateContainer.style.display = 'none'
            modal.style.display = 'inline-block'
        },2000)
    })
} else {
    rotateContainer.style.display = 'none'
    modal.style.display = 'inline-block'
}


const logo = $.querySelector('.logo-container')
const logoText = $.querySelector('.logo-text')
logo.style.display = 'none'

// for modal
accessBtn.addEventListener('click', e => {
    $.body.style.backgroundColor = '#fff'
    modal.style.display = 'none'
    soundEffectsFlag = true
    soundEffectsFlag && amethystSound.play()
    setTimeout(() => {
        logo.style.display = 'inline-block'
    },1000)
    
})
rejectBtn.addEventListener('click', e => {
    $.body.style.backgroundColor = '#fff'
    modal.style.display = 'none'
    setTimeout(() => {
        logo.style.display = 'inline-block'
    },700)
})

// for game logo to show when factory's logo animation ended
logoText.addEventListener('animationend', e => {
    logo.style.display = 'none'
    loadingContainer.style.display  = 'block'
})

const loadingContainer = $.querySelector('.loading-container')
const loadingBarText = $.querySelector('.loading-text')
const gameText = $.querySelector('.game-text')
const gameLogo = $.querySelector('.game-logo')
const gameLogoFire = $.querySelector('.dynamite-fire')
const progressBarContainer = $.querySelector('.progress-bar-container')
const progressBar = $.querySelector('.progress-bar')
const range = $.querySelector('.range')

loadingContainer.style.display  = 'none'
gameText.style.display = 'none'
progressBarContainer.style.display = 'none'
gameLogo.style.display = 'none'
gameLogoFire.style.display = 'none'


// for game logo to change location when game logo animation ended
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
