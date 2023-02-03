// set query selector variables
let video = document.querySelector("#genZ-video");
let playButton = document.querySelector("#playButton");
let pauseButton = document.querySelector("#pauseButton");
let container = document.querySelector("#container");


//when user mouses into container and either button is active remove .fade class
container.addEventListener("mouseover", (event) => {
    if (event && playButton.classList.contains("active")){
        playButton.classList.remove("fade")
        } else if (event && pauseButton.classList.contains("active")){
            pauseButton.classList.remove("fade")
        }
})

//when user mouses out of container and either button is active - add .fade class
container.addEventListener("mouseout", (event) => {
    if(event && playButton.classList.contains("active")){
        playButton.classList.add("fade")
    } else if (event && pauseButton.classList.contains("active")){
        pauseButton.classList.add("fade")
    }
})

// when user presses the play button
// remove playButton from view
// add pauseButton into view
// play video
// switch the active class on the buttons
playButton.addEventListener("click", () => {
    if(playButton.classList.contains("active") === true){
        playButton.style.display = "none"
        pauseButton.style.display = "block"
        video.play()
        console.log("PLAY VIDEO")
        playButton.classList.remove("active")
        pauseButton.classList.add("active");
    } 
})

// when user presses the pause button
// remove pauseButton from view
// add playButton into view
// pause video
// switch the active class on the buttons
pauseButton.addEventListener("click", () => {
    if(pauseButton.classList.contains("active") === true){
        pauseButton.style.display = "none"
        playButton.style.display = "block"
        video.pause()
        console.log("PAUSE VIDEO")
        pauseButton.classList.remove("active")
        playButton.classList.add("active")
    }
})
