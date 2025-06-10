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