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
    };
};

fetch('/dados/aluno.json')
    .then(function(response){
        return response.json();
    })
    .then(function(dados){
        document.getElementById('alunoJson').innerHTML =
            '<b>Nome:</b> ' + dados.nome + '<br>' +
            '<b>Status:</b> ' + dados.status + '<br>' +
            '<b>Curso:</b> ' + dados.curso + '<br>' +
            '<b>Semestre:</b> ' + dados.semestre + '<br>' +
            '<b>Turno:</b> ' + dados.turno + '<br>' +
            '<b>Unidade:</b> ' + dados.unidade
    });