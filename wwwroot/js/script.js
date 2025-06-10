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
    alert("Compra realizada com sucesso! Obrigado por comprar no Sabor do Brasil.");
}

function curtir(btn) {
    const countSpan = btn.querySelector('.like-count');
    countSpan.textContent = parseInt(countSpan.textContent) + 1;
}

function comentar(input) {
    const texto = input.value.trim();
    if (texto === "") return;

    const ul = input.parentElement.querySelector('.comments');
    const li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
        <span class="comentario-texto">${texto}</span>
        <div class="avaliacao-bomruim">
            <i class="bi bi-hand-thumbs-up" data-avaliacao="bom" onclick="avaliarBomRuim(this)"></i>
            <i class="bi bi-hand-thumbs-down" data-avaliacao="ruim" onclick="avaliarBomRuim(this)"></i>
        </div>
        <div>
            <button class="btn btn-sm btn-outline-primary me-1" onclick="editarComentario(this)">Editar</button>
            <button class="btn btn-sm btn-outline-danger" onclick="excluirComentario(this)">Excluir</button>
        </div>
    `;
    ul.appendChild(li);
    input.value = "";
}

function avaliarBomRuim(icone) {
    const container = icone.parentElement;
    const icones = container.querySelectorAll('i');
    icones.forEach(i => {
        i.classList.remove('text-success', 'text-danger');
    });
    if (icone.getAttribute('data-avaliacao') === 'bom') {
        icone.classList.add('text-success');
    } else {
        icone.classList.add('text-danger');
    }
}

function avaliarEstrela(estrela) {
    const estrelas = estrela.parentElement.querySelectorAll('i');
    const valor = parseInt(estrela.getAttribute('data-star'));
    estrelas.forEach((el, idx) => {
        if (idx < valor) {
            el.classList.add('bi-star-fill');
            el.classList.remove('bi-star');
        } else {
            el.classList.add('bi-star');
            el.classList.remove('bi-star-fill');
        }
    });
}

function excluirComentario(btn) {
    btn.closest('li').remove();
}

function editarComentario(btn) {
    const li = btn.closest('li');
    const span = li.querySelector('.comentario-texto');
    const textoAtual = span.textContent;
    span.innerHTML = `<input type="text" class="form-control form-control-sm d-inline w-auto" value="${textoAtual}">`;
    btn.textContent = "Confirmar";
    btn.classList.remove('btn-outline-primary');
    btn.classList.add('btn-success');
    btn.onclick = function () { confirmarEdicao(this); };
}

function confirmarEdicao(btn) {
    const li = btn.closest('li');
    const input = li.querySelector('input');
    const novoTexto = input.value.trim();
    if (novoTexto === "") return;
    li.querySelector('.comentario-texto').textContent = novoTexto;
    btn.textContent = "Editar";
    btn.classList.remove('btn-success');
    btn.classList.add('btn-outline-primary');
    btn.onclick = function () { editarComentario(this); };
}