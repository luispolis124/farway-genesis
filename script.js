document.addEventListener('DOMContentLoaded', () => {
    const desc = document.getElementById('description');
    console.log("Farway Genesis Site Carregado!");
    
    // Pequena animação de brilho no ícone ao clicar
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', () => {
        logo.style.filter = "brightness(1.5) saturate(1.5)";
        setTimeout(() => {
            logo.style.filter = "none";
        }, 500);
    });
});
