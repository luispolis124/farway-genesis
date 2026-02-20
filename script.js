// Adiciona um efeito de parallax suave ao brilho de fundo
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.glow-bg');
    const x = e.clientX;
    const y = e.clientY;
    
    glow.style.left = x + 'px';
    glow.style.top = y + 'px';
});

console.log("Farway Genesis: Website Modernizado!");
