document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Lógica da Saudação ---
    const saudacaoElemento = document.getElementById('saudacao');
    const horaAtual = new Date().getHours();
    let mensagem = "Olá, Ana ❤️";

    if (horaAtual >= 6 && horaAtual < 12) {
        mensagem = "Bom dia, my love! ☀️";
    } else if (horaAtual >= 12 && horaAtual < 20) {
        mensagem = "Boa tarde, my love! 🌅";
    } else {
        mensagem = "Boa noite, my love! 🌙";
    }
    if (saudacaoElemento) saudacaoElemento.textContent = mensagem;

    // --- 2. Elementos do DOM ---
    const btnEntrar = document.getElementById('btn-entrar');
    const vistaHome = document.querySelector('.container');
    const vistaTimeline = document.getElementById('timeline-view');
    const containerTimeline = document.getElementById('timeline-container');
    const vistaMural = document.getElementById('mural-view');
    const containerMural = document.getElementById('mural-container');
    const vistaArquivo = document.getElementById('arquivo-view');
    const containerArquivo = document.getElementById('arquivo-container');
    const bottomNav = document.getElementById('bottom-nav');
    const navBtns = document.querySelectorAll('.nav-btn');

    // --- 3. Lógica de Navegação (Botão Entrar) ---
    btnEntrar.addEventListener('click', () => {
        vistaHome.classList.add('fade-out'); // Animação de saída

        setTimeout(() => {
            vistaHome.classList.add('hidden'); 
            vistaTimeline.classList.remove('hidden'); 
            bottomNav.classList.remove('hidden'); // MOSTRA A BARRA
            renderizarTimeline(); 
            renderizarMural(); // RENDERIZA O MURAL
            renderizarArquivo(); // RENDERIZA A GALERIA DE FOTOS
            renderizarMusicas();
        }, 600);
    });

    // --- Variáveis globais para o mapa ---
    let mapaInicializado = false;
    let meuMapa;

// --- 4. Lógica das Tabs (Timeline / Mural / Musica / Arquivo) ---
    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Tira a classe 'active' de todos e põe no clicado
            navBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            // Esconde todas as vistas
            ['timeline-view', 'mural-view', 'musica-view', 'arquivo-view'].forEach(id => {
                document.getElementById(id).classList.add('hidden');
            });

            // Mostra a vista correspondente
            const targetId = e.target.getAttribute('data-target');
            document.getElementById(targetId).classList.remove('hidden');

            // A MAGIA ACONTECE AQUI: Manda a página diretamente para o topo (pixel 0)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // (Podes apagar as variáveis let mapaInicializado e let meuMapa que tinhas aí perdidas)

    // --- 5. Função para desenhar a Timeline ---
    // (Mantém a tua função renderizarTimeline igual)
    
    // --- 6. Função para desenhar o Mural ---
    // (Mantém a tua função renderizarMural igual)

    // --- 7. Função para desenhar o Arquivo (Galeria) ---
    // (Mantém a tua função renderizarArquivo igual)

    // --- 8. Função para desenhar a Música ---
    function renderizarMusicas() {
        const containerMusica = document.getElementById('musica-container');
        containerMusica.innerHTML = '';
        
        nossasMusicas.forEach(musica => {
            if (musica.iframe !== '') {
                const cardHTML = `
                    <div>
                        <h3 class="musica-titulo">${musica.titulo}</h3>
                        ${musica.iframe}
                    </div>
                `;
                containerMusica.innerHTML += cardHTML;
            }
        });
    }

    // --- 5. Função para desenhar a Timeline ---
    function renderizarTimeline() {
        containerTimeline.innerHTML = '';
        memorias.forEach(memoria => {
            const imgHTML = memoria.imagem 
                ? `<img src="${memoria.imagem}" alt="${memoria.titulo}" class="memoria-img">` 
                : '';

            const cardHTML = `
                <div class="memoria-card">
                    <div class="memoria-data">${memoria.data}</div>
                    <h3 class="memoria-titulo">${memoria.titulo}</h3>
                    <p class="memoria-desc">${memoria.descricao}</p>
                    ${imgHTML}
                </div>
            `;
            containerTimeline.innerHTML += cardHTML;
        });
    }

    // --- 6. Função para desenhar o Mural ---
    function renderizarMural() {
        containerMural.innerHTML = '';
        mensagensMural.forEach(msg => {
            const postItHTML = `
                <div class="post-it" style="background-color: ${msg.cor};">
                    ${msg.texto}
                </div>
            `;
            containerMural.innerHTML += postItHTML;
        });
    }

    // --- 7. Função para desenhar o Arquivo (Galeria com Vídeos) ---
    function renderizarArquivo() {
        containerArquivo.innerHTML = '';
        
        fotosArquivo.forEach(item => {
            let mediaHTML = '';

            if (item.tipo === "video") {
                // O truque está nestas propriedades todas juntas:
                // autoplay (toca sozinho), muted (sem som, obrigatório para o autoplay funcionar), 
                // loop (repete), playsinline (não abre em ecrã inteiro no iPhone)
                mediaHTML = `
                    <video src="${item.src}" class="foto-arquivo" autoplay muted loop playsinline preload="metadata">
                    </video>
                `;
            } else {
                mediaHTML = `
                    <img src="${item.src}" alt="${item.alt}" class="foto-arquivo">
                `;
            }

            containerArquivo.innerHTML += mediaHTML;
        });
    }

});