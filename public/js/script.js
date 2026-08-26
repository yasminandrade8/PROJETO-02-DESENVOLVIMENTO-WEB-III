function trocarVideo(video){
    var player = document.getElementById('playerVideo');
    player.src = '/video/' + video;
    document.getElementById('nomeVideo').innerHTML = video;
 
    player.play();
}