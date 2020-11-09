const dino = document.querySelector('.dino')

function control(e) {
    console.log(e.keyCode )
        console.log('fuck')
    if(e.keyCode === 32){
        console.log('hump')
        jump()
    }
}
document.addEventListener('keyup', control)

function jump(){
    let position = 0
    let timerId = setInterval(function(){
        console.log('up')
        position +=30
        dino.style.bottom = position + 'px'
    }, 20)
 }