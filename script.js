document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Capturando os valores dos campos
    var cargo = document.getElementById("cargo").value;
    var origem = document.getElementById("origem").value;
    var destino = document.getElementById("destino").value;
    var data = document.getElementById("data").value;
    
    // Validando os campos (pode adicionar mais validações conforme necessário)
    if (cargo.trim() === "" || origem.trim() === "" || destino.trim() === "" || data.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    
    // Armazenando os dados no localStorage
    localStorage.setItem("cargo", cargo);
    localStorage.setItem("origem", origem);
    localStorage.setItem("destino", destino);
    localStorage.setItem("data", data);
    
    // Redirecionando o usuário para a página de exibição dos dados
    window.location.href = "exibir_dados.html";
});


