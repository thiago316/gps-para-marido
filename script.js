document.addEventListener("DOMContentLoaded", function () {
    const botaoAtualizar = document.getElementById("atualizar");
    const mapaContainer = document.getElementById("mapa-container");

    function atualizarLocalizacao() {
        if (navigator.geolocation) {
            mapaContainer.innerHTML = "<p>Carregando localização...</p>";
            
            navigator.geolocation.getCurrentPosition(
                function (posicao) {
                    const latitude = posicao.coords.latitude;
                    const longitude = posicao.coords.longitude;
                    
                    mapaContainer.innerHTML = `<iframe 
                        width="100%" 
                        height="200" 
                        frameborder="0" 
                        style="border:0" 
                        src="https://www.google.com/maps?q=${latitude},${longitude}&output=embed" 
                        allowfullscreen>
                    </iframe>`;
                },
                function (erro) {
                    mapaContainer.innerHTML = "<p style='color: red;'>Erro ao obter localização: " + erro.message + "</p>";
                }
            );
        } else {
            mapaContainer.innerHTML = "<p style='color: red;'>Geolocalização não suportada pelo navegador.</p>";
        }
    }

    botaoAtualizar.addEventListener("click", atualizarLocalizacao);
});
