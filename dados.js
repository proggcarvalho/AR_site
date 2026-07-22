// dados.js

const memorias = [
    {
        id: 1,
        tipo: "evento", // Pode ser "texto", "foto", ou "musica"
        data: "2026-03-23", // Formato AAAA-MM-DD para facilitar a ordenação
        titulo: "A primeira troca de mensagens",
        descricao: 'Aquele famoso: "desculpa, liguei sem querer.."',
        imagem: null // Se não houver foto, fica null
    },
    {
        id: 3,
        tipo: "evento",
        data: "2026-04-12",
        titulo: "Primeira vez só os dois",
        descricao: "Aquela ida de BM ao castelo com a capota aberta",
        imagem: null
    },
    {
        id: 2,
        tipo: "evento",
        data: "2026-04-18",
        titulo: "Primeira vez no café com a malta",
        descricao: "Quando o Gabriel mal abriu a boca... no comments",
        imagem: null
    },
    {
        id: 4,
        tipo: "evento",
        data: "2026-04-22",
        titulo: "Primeira dormida juntos",
        descricao: "Após bastantes barras e com a ajuda do chat, lá surgiu a oportunidade",
        imagem: null
    },
    {
        id: 5,
        tipo: "evento",
        data: "2026-04-22",
        titulo: "Primeiro beijo",
        descricao: "Durante a dormida as coisas foram fluindo",
        imagem: null
    },
    {
        id: 6,
        tipo: "evento",
        data: "2026-04-29",
        titulo: "Primeiro envolvimento",
        descricao: "Ao fim de uns dias, e sem pressas, acabou por acontecer",
        imagem: null
    },
    {
        id: 7,
        tipo: "evento",
        data: "2026-05-18",
        titulo: "Primeiro amo-te",
        descricao: "As coisas foram evoluindo e tudo foi correndo naturalmente",
        imagem: null
    },
    {
        id: 8,
        tipo: "evento",
        data: "2026-05-22",
        titulo: "Primeira dormida em Leiria",
        descricao: "O meu amor veio passar o dia de anos comigo!!",
        imagem: null
    },
];

const mensagensMural = [
    {
        id: 1,
        texto: "Aquele dia em que ficámos deitados até às 5h a forçar fofocas..",
        cor: "#FFFACD" // Amarelo claro
    },
    {
        id: 2,
        texto: 'O famoso: "o qui foi?"..',
        cor: "#E0FFFF" // Azul claro
    },
    {
        id: 3,
        texto: "Ainda não percebo como é que não gostas de gelado..",
        cor: "#FFE4E1" // Rosa claro
    },
    {
        id: 4,
        texto: "Os maços fumados que mal duravam uma noite..",
        cor: "#dcffca" // Verde claro
    },
    {
        id: 5,
        texto: "As tentativas falhadas de ver filmes do ínicio ao fim..",
        cor: "#fbcaff" // Roxo claro
    },
    {
        id: 6,
        texto: "A tua cara de cu para pessoas que não conheces..",
        cor: "#FFFACD" // Amarelo claro
    },
    {
        id: 7,
        texto: "As dezenas de emotes que fazes a falar com as pessoas..",
        cor: "#E0FFFF" // Azul claro
    },
    {
        id: 8,
        texto: 'O famoso: "olhaaa"..',
        cor: "#FFE4E1" // Rosa claro
    },
    {
        id: 9,
        texto: "Os meus 37mil pedidos de jantar fora rejeitados..",
        cor: "#dcffca" // Verde claro
    },
    {
        id: 10,
        texto: "O facto de por ti estavas 23h do teu dia a dormir..",
        cor: "#fbcaff" // Roxo claro
    },
    {
        id: 11,
        texto: 'O famoso: "volta lá a ser fofinho"..',
        cor: "#FFFACD" // Amarelo claro
    },
    {
        id: 12,
        texto: "As tuas risadas que te fazem doer a barriga..",
        cor: "#E0FFFF" // Azul claro
    },
    {
        id: 13,
        texto: "Os teus olhos, sardas e lábios que com o resto te torna perfeita..",
        cor: "#FFE4E1" // Rosa claro
    },
    {
        id: 14,
        texto: "A predinha super fofa que o meu amor me fez para os anos..",
        cor: "#dcffca" // Verde claro
    },
    {
        id: 15,
        texto: "As caras maravilhosas que fazes a dormir..",
        cor: "#fbcaff" // Roxo claro
    },
];

// A Nossa Playlist
const nossasMusicas = [
    {
        id: 1,
        titulo: "Nem me deixas ligar o carro primeiro",
        iframe: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7gHPjqCdGSstIBz1knykYn?utm_source=generator" width="100%" height="252" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
        id: 2,
        titulo: "Primeiro banger que me mostraste",
        iframe: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/00NdlGJi14vY5RSsLLPleD?utm_source=generator" width="100%" height="252" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
        id: 3,
        titulo: "Não fazia a mínima que conhecias",
        iframe: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2w2O3kkcypnHM5TDQk384v?utm_source=generator" width="100%" height="252" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
        id: 4,
        titulo: "Aquela carroça que nós sabemos",
        iframe: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7AwVSKaQxpidrtYBerkHKk?utm_source=generator" width="100%" height="252" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
        id: 5,
        titulo: "Um bocado girly mas bom",
        iframe: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0H6I8UNnvIOxQTSd5x2ANU?utm_source=generator&si=700309ea945a4f81" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    },
    {
        id: 6,
        titulo: "Anocas viciou bastante",
        iframe: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6B6GtDYoJC5HKjwdTCUlur?utm_source=generator&si=1e794a7015c44d69" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
    }
];

// O Nosso Arquivo de Fotos e Vídeos
const fotosArquivo = [
    { 
        id: 1, 
        tipo: "foto", 
        src: "biblioteca/AR_1.JPEG",
        alt: "A nossa foto" 
    },
    { 
        id: 2, 
        tipo: "video", 
        src: "biblioteca/VID_AR_3.mp4",
        alt: "O nosso vídeo" 
    },
    { 
        id: 3, 
        tipo: "foto", 
        src: "biblioteca/AR_2.png",
        alt: "A nossa foto" 
    },
    { 
        id: 4, 
        tipo: "foto", 
        src: "biblioteca/AR_4.jpg",
        alt: "A nossa foto" 
    },
    { 
        id: 5, 
        tipo: "foto", 
        src: "biblioteca/AR_5.jpg",
        alt: "A nossa foto" 
    },
    { 
        id: 6, 
        tipo: "video", 
        src: "biblioteca/VID_AR_2.mp4",
        alt: "O nosso vídeo" 
    },
    { 
        id: 7, 
        tipo: "foto", 
        src: "biblioteca/AR_8.JPEG",
        alt: "A nossa foto" 
    },
    { 
        id: 8, 
        tipo: "foto", 
        src: "biblioteca/AR_7.JPEG",
        alt: "A nossa foto" 
    },
    { 
        id: 9, 
        tipo: "foto", 
        src: "biblioteca/AR_6.JPEG",
        alt: "A nossa foto" 
    },
    { 
        id: 10, 
        tipo: "foto", 
        src: "biblioteca/AR_3.jpg",
        alt: "A nossa foto" 
    },
    { 
        id:11, 
        tipo: "video", 
        src: "biblioteca/VID_AR_4.MP4",
        alt: "O nosso vídeo"
    },
    { 
        id: 12, 
        tipo: "foto", 
        src: "biblioteca/AR_9.JPEG",
        alt: "A nossa foto" 
    },
    { 
        id: 13, 
        tipo: "foto", 
        src: "biblioteca/AR_11.JPEG",
        alt: "A nossa foto" 
    },
    { 
        id: 14, 
        tipo: "foto", 
        src: "biblioteca/AR_12.JPEG",
        alt: "A nossa foto" 
    },
    { 
        id: 15, 
        tipo: "foto", 
        src: "biblioteca/AR_10.JPEG",
        alt: "A nossa foto" 
    },
    { 
        id: 16, 
        tipo: "video", 
        src: "biblioteca/VID_AR_1.mp4",
        alt: "O nosso vídeo" 
    },
    { 
        id: 17, 
        tipo: "foto", 
        src: "biblioteca/AR_13.jpg",
        alt: "A nossa foto" 
    },
    { 
        id: 18, 
        tipo: "foto", 
        src: "biblioteca/AR_14.jpg",
        alt: "A nossa foto" 
    },
    { 
        id: 19, 
        tipo: "foto", 
        src: "biblioteca/AR_15.jpg",
        alt: "A nossa foto" 
    },
    { 
        id: 20, 
        tipo: "foto", 
        src: "biblioteca/AR_16.jpg",
        alt: "A nossa foto" 
    },
    { 
        id: 21, 
        tipo: "foto", 
        src: "biblioteca/AR_17.jpg",
        alt: "A nossa foto" 
    },
    { 
        id: 22, 
        tipo: "foto", 
        src: "biblioteca/AR_18.jpg",
        alt: "A nossa foto" 
    },
    { 
        id: 23, 
        tipo: "foto", 
        src: "biblioteca/AR_19.jpg",
        alt: "A nossa foto" 
    },
    { 
        id: 24, 
        tipo: "foto", 
        src: "biblioteca/AR_20.jpg",
        alt: "A nossa foto" 
    },
];