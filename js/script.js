// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // Interatividade nos botões de compra para simular uma ação
    const buyButtons = document.querySelectorAll('.btn-buy');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Captura o nome do produto clicado
            const productCard = event.target.closest('.product-card');
            const productName = productCard.querySelector('h3').innerText;
            
            // Simulação de adição ao carrinho
            alert(`✨ Excelente escolha! "${productName}" foi adicionado ao seu carrinho.`);
        });
    });

    // Efeito visual suave no menu ao rolar a página para a categoria
    const menuLinks = document.querySelectorAll('.category-nav a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove a classe ativa de todos
            menuLinks.forEach(item => item.style.color = '');
            // Adiciona a cor de destaque no link clicado temporariamente
            this.style.color = '#8C6246'; // var(--accent-brown)
        });
    });
});