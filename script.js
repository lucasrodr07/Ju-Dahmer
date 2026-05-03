/**
 * Judahmer Ateliê - Lógica do Catálogo
 * Renderização dinâmica de produtos
 */

const WHATSAPP_NUMBER = "5511999999999"; // Substituir pelo número real do ateliê

// 6. REQUISITOS DE CÓDIGO (DATA-DRIVEN)
const produtos = [
  { id: 1, nome: "Colar Coração Eterno", preco: "R$ 289,00", imagem: "https://picsum.photos/seed/j1/600/800" },
  { id: 2, nome: "Gargantilha Pérola Rara", preco: "R$ 450,00", imagem: "https://picsum.photos/seed/j2/600/800" },
  { id: 3, nome: "Colar Infinito Dourado", preco: "R$ 320,00", imagem: "https://picsum.photos/seed/j3/600/800" },
  { id: 4, nome: "Colar Gota de Esmeralda", preco: "R$ 580,00", imagem: "https://picsum.photos/seed/j4/600/800" },
  { id: 5, nome: "Choker Minimalista Judahmer", preco: "R$ 195,00", imagem: "https://picsum.photos/seed/j5/600/800" },
  { id: 6, nome: "Colar Medalha Abençoada", preco: "R$ 275,00", imagem: "https://picsum.photos/seed/j6/600/800" },
  { id: 7, nome: "Colar Relicário Vintage", preco: "R$ 380,00", imagem: "https://picsum.photos/seed/j7/600/800" },
  { id: 8, nome: "Colar Elo de Amor", preco: "R$ 310,00", imagem: "https://picsum.photos/seed/j8/600/800" },
  { id: 9, nome: "Colar Constelação Mãe", preco: "R$ 420,00", imagem: "https://picsum.photos/seed/j9/600/800" },
  { id: 10, nome: "Colar Ponto de Luz Rubi", preco: "R$ 240,00", imagem: "https://picsum.photos/seed/j10/600/800" },
  { id: 11, nome: "Colar Árvore da Vida", preco: "R$ 350,00", imagem: "https://picsum.photos/seed/j11/600/800" },
  { id: 12, nome: "Gargantilha Silk Gold", preco: "R$ 290,00", imagem: "https://picsum.photos/seed/j12/600/800" },
  { id: 13, nome: "Colar Nome Personalizado", preco: "R$ 490,00", imagem: "https://picsum.photos/seed/j13/600/800" },
  { id: 14, nome: "Colar Duplo Harmonia", preco: "R$ 370,00", imagem: "https://picsum.photos/seed/j14/600/800" },
  { id: 15, nome: "Colar Esfera de Prata", preco: "R$ 210,00", imagem: "https://picsum.photos/seed/j15/600/800" },
  { id: 16, nome: "Colar Trevo da Sorte", preco: "R$ 265,00", imagem: "https://picsum.photos/seed/j16/600/800" },
  { id: 17, nome: "Colar Aura Dourada", preco: "R$ 410,00", imagem: "https://picsum.photos/seed/j17/600/800" },
  { id: 18, nome: "Colar Infinito Amoroso", preco: "R$ 330,00", imagem: "https://picsum.photos/seed/j18/600/800" },
  { id: 19, nome: "Colar Safira Imperial", preco: "R$ 620,00", imagem: "https://picsum.photos/seed/j19/600/800" },
  { id: 20, nome: "Colar Delicado com Zircônia", preco: "R$ 180,00", imagem: "https://picsum.photos/seed/j20/600/800" },
  { id: 21, nome: "Colar Corrente Veneziana", preco: "R$ 250,00", imagem: "https://picsum.photos/seed/j21/600/800" },
  { id: 22, nome: "Colar Pingente Madrepérola", preco: "R$ 340,00", imagem: "https://picsum.photos/seed/j22/600/800" },
  { id: 23, nome: "Colar Estrela Guia", preco: "R$ 295,00", imagem: "https://picsum.photos/seed/j23/600/800" },
  { id: 24, nome: "Colar Amor de Mãe", preco: "R$ 480,00", imagem: "https://picsum.photos/seed/j24/600/800" },
  { id: 25, nome: "Colar Elegance Green", preco: "R$ 510,00", imagem: "https://picsum.photos/seed/j25/600/800" },
  { id: 26, nome: "Colar Judahmer Signature", preco: "R$ 590,00", imagem: "https://picsum.photos/seed/j26/600/800" },
];

function renderizarProdutos() {
  const grid = document.getElementById('product-grid');
  
  if (!grid) return;

  produtos.forEach(produto => {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Texto para o WhatsApp
    const waText = encodeURIComponent(`Olá! Tenho interesse no ${produto.nome} da Coleção Dia das Mães.`);
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

    card.innerHTML = `
      <div class="product-image-container">
        <img src="${produto.imagem}" alt="${produto.nome}" class="product-image" loading="lazy">
      </div>
      <div class="product-info">
        <h3 class="product-name">${produto.nome}</h3>
        <div class="product-divider"></div>
        <p class="product-price">${produto.preco}</p>
        <a href="${waLink}" target="_blank" class="btn-whatsapp">
          Comprar via WhatsApp
        </a>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Observador para animação de fade-in ao carregar/scroll
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
  });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderizarProdutos();
  setupScrollAnimations();
});
