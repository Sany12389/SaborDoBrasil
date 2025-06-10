const publicacoes = [
    {
        titulo: "Carne cozida",
        imagem: "img/logo.png",
        local: "Local 01",
        cidade: "Ipatinga-MG",
        likes: 2,
        dislikes: 4
    },
    {
        titulo: "Título do prato 02",
        imagem: "assets/prato2.jpg",
        local: "Local 02",
        cidade: "Ipatinga-MG",
        likes: 9,
        dislikes: 10
    },
    {
        titulo: "Título do prato 03",
        imagem: "assets/prato3.jpg",
        local: "Local 03",
        cidade: "Ipatinga-MG",
        likes: 5,
        likes: 2,
        dislikes: 1
    }
];

const container = document.getElementById("publicacoes");

publicacoes.forEach(p => {
    container.innerHTML += `
      <div class="publicacao">
        <img src="${p.imagem}" alt="${p.titulo}">
        <div class="info">
          <h2>${p.titulo}</h2>
          <p>${p.local} - ${p.cidade}</p>
          <p>👍 ${p.likes} 👎 ${p.dislikes}</p>
        </div>
      </div>
    `;
});

function comprar(btn) {
    // Aqui você pode simular um pagamento ou redirecionar para outra página
    alert("Compra realizada com sucesso! Obrigado por comprar no Sabor do Brasil.");
}
function curtir(btn) {
    const countSpan = btn.querySelector('.like-count');
    countSpan.textContent = parseInt(countSpan.textContent) + 1;
}