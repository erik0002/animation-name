window.onload=()=>{
let animation = anime.timeline({loop:true});
animation.add({
    targets:"p",
    translateY:"80vh",
    delay:(elm, index, t) => index * 200,
    easing:"easeOutExpo",
    duration:1500
}).add({
    targets:"p",
    translateY:"0vh",
    translateX:"90vw",
    delay:(elm, index, t) => index * 200,
    easing:"easeOutExpo",
    duration:1500
}).add({
    targets:"p",
    translateY:"75vh",
    delay:(elm, index, t) => index * 200,
    easing:"easeOutExpo",
    duration:1500
}).add({
    targets:"p",
    translateY:"0vh",
    translateX:"0vw",
    delay:(elm, index, t) => index * 200,
    easing:"easeOutExpo",
    duration:1500
}).add({
    targets: "p",
    translateY:"40vh",
    translateX:"40vw",
    delay:(elm, index, t) => index * 300,
    easing:"easeOutExpo",
    duration:2000
}).add({
    targets: "p", 
    translateY:"0vh",
    translateX:"80vw",
    delay: (elm, index, t) => index*400, 
    easing: "easeOutExpo",
    duration: 2500
})
}