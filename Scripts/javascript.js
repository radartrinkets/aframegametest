$ = (sel) => document.querySelector(sel)
$$ = (sel) => document.querySelectorAll(sel)
on = (elem, type, hand) => elem.addEventListener(type,hand)

let hit = false
let resetId = 0
const resetBall = () => {
    clearTimeout(resetId)
    $("#ball").body.position.set(0, 0.6, -4)
    $("#ball").body.velocity.set(0, 0.6, 0)
    $("#ball").body.angularVelocity.set(0, 0, 0)
    hit = false
    resetId = setTimeout(resetBall, 6000)
}

let score = 0;
let hit = falselet 
let resetId = 0
on($("#weapon"), 'collide', (e)=>{
    const ball = $("#ball")
    if(e.detail.body.id === ball.body.id && !hit){
        hit = true
        score = score + 1
        clearTimeout(resetId)
        resetId = setTimeout(resetBall,2000)
        
        $("#score").setAttribute('text','value','Score '+score)
    }
})

setTimeout(resetBall,3000)