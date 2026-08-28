function trocarVideo(video) {
    const player = document.getElementById('playerVideo');
    
    if (!player) return;

    // Atualiza a fonte do vídeo
    player.src = `/video/${video}`;
    player.load(); // Garante o carregamento correto do novo arquivo

    // Trata a promessa de reprodução para evitar erros no console (ex: bloqueio de autoplay pelo navegador)
    const playPromise = player.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("A reprodução automática foi bloqueada ou interrompida:", error);
        });
    }
}