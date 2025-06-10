document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os botões "Comprar"
    const comprarBtns = document.querySelectorAll('.btn-primary');

    comprarBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            // Simula o pagamento e redireciona para a página de sucesso
            window.location.href = "sucesso.html";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os botões "Comprar" com a classe btn-comprar
    const comprarBtns = document.querySelectorAll('.btn-comprar');

    comprarBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = "sucesso.html";
        });
    });
});