function trocarVideo(video) {
    var player = document.getElementById('playerVideo');

    player.src = '/video/' + video;
    player.play();
}
