var audio = document.getElementById('audio');
var playpause = document.getElementById('play-pause');
var volume = document.getElementById('volume');
audio.controls = false;
function togglePlayPause(){
    if(audio.paused || audio.ended){
        playpause.title = "ÔÝÍ£";
        playpause.innerHTML = "<i class='fa fa-pause fa-3x'></i>";
        audio.play();
    }else{
        playpause.title = "²¥·Å";
        playpause.innerHTML = "<i class='fa fa-pause fa-3x'></i>";
        audio.paused;
    }

    function setVolume(){
        audio.volume = volume.value;
    }
}
