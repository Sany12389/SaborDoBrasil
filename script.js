const publicacoes = [
    {
        titulo: "Carne cozida",
        imagem: "assets/prato1.jpgIM",
        local: "Local 01",
        cidade: "Maceió-AL",
        likes: 2,
        dislikes: 4
    },
    {
        titulo: "Título do prato 02",
        imagem: "assets/prato2.jpg",
        local: "Local 02",
        cidade: "Maceió-AL",
        likes: 9,
        dislikes: 10
    },
    {
        titulo: "Título do prato 03",
        imagem: "assets/prato3.jpg",
        local: "Local 03",
        cidade: "Ipati",
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