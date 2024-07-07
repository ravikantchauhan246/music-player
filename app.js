let img = document.querySelector('img');
let audioPlay = document.querySelector('#audioPlayer')
let prevBtn = document.querySelector("#previous")
let playPause = document.querySelector("#playpause")
let nextBtn = document.querySelector("#next")

let songs = [{
    songName:"Jab-Se-Tujhe-Dekha-Hai",
    source:"/Jab Se Tujhe Dekha Hai Karan Rajani 128 Kbps.mp3",
    imgUrl:'https://pagalnew.com/coverimages/Jab-Se-Tujhe-Dekha-Hai-Karan-Rajani-500-500.jpg'
},{
    songName:"Song2",
    source:'/Cheques Still Rollin 128 Kbps.mp3',
    imgUrl:'https://pagalnew.com/coverimages/Cheques-Still-Rollin-500-500.jpg'
},{
    songName:"Song3",
    source:'/Chaawat Sarfira 320 Kbps.mp3',
    imgUrl:'https://pagalnew.com/coverimages/chaawat-sarfira-500-500.jpg'
}]

function loadSong(index){
    img.src = songs[index].imgUrl;
    audioPlay.src = songs[index].source; // Set the source of the audio element
    audioPlay.paused(); // Play the audio element
}

function playPauseSong(){
    if(audioPlay.paused){
        audioPlay.play()
        playPause.innerHTML = "Pause"
    }else{
        audioPlay.pause();
        playPause.innerHTML = "Play"
    }
    
}

let currentIndex = 1
function nextSong(){
    currentIndex = (currentIndex + 1)%songs.length
    loadSong(currentIndex) // Corrected function name
}

function previousSong(){
    currentIndex = (currentIndex + songs.length-1)%songs.length
    loadSong(currentIndex) // Corrected function name
}

prevBtn.addEventListener('click',previousSong)
playPause.addEventListener('click',playPauseSong)
nextBtn.addEventListener('click', nextSong); // Added event listener for next button

loadSong(0)