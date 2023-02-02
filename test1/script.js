let video = document.querySelector("#genZ-video");
let button = document.querySelector("#playButton");


// video.addEventListener("click", playVideo());
button.addEventListener("click", () => {
    if(button.classList.contains("active") === true){
    video.play()
    console.log("PLAY VIDEO")
    button.classList.remove("active")
    } else{
        video.pause()
        console.log("PAUSE VIDEO")
        button.classList.add("active")
    }
})

function playVideo() {

}