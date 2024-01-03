  // Função para alternar a visibilidade da div de informação
  function alternarInformacao(id) {
    // Obtém a referência da div com base no ID fornecido
    var informacaoDiv = document.getElementById(id);

    // Verifica o estado atual da div
    if (informacaoDiv.style.display === "none") {
        // Se estiver oculta, torna visível
        informacaoDiv.style.display = "block";
    } else {
        // Se estiver visível, torna oculta
        informacaoDiv.style.display = "none";
    }
}