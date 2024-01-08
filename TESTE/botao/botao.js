  // Variáveis de controle de estado dos botões
  var estadoBotao1 = false;
  var estadoBotao2 = false;

  // Função para mostrar/ocultar a div de conteúdo
  function mostrarConteudo() {
    var conteudoDiv = document.getElementById('conteudo');
    conteudoDiv.style.display = (conteudoDiv.style.display === 'none') ? 'block' : 'none';
    // Ocultar informações ao mostrar/ocultar a div de conteúdo
    ocultarInformacao();
  }

  // Função para alternar mostrar/ocultar informações
  function alternarInformacao(info) {
    var informacoesDiv = document.getElementById('informacoes');
    // Alternar o estado do botão
    if (info === 'Informação 1') {
      estadoBotao1 = !estadoBotao1;
    } else if (info === 'Informação 2') {
      estadoBotao2 = !estadoBotao2;
    }

    // Exibir ou ocultar informações com base no estado do botão
    if ((info === 'Informação 1' && estadoBotao1) || (info === 'Informação 2' && estadoBotao2)) {
      informacoesDiv.innerHTML = 'Informação selecionada: ' + info;
    } else {
      informacoesDiv.innerHTML = ''; // Limpar o conteúdo da div
    }
  }

  // Função para ocultar informações
  function ocultarInformacao() {
    var informacoesDiv = document.getElementById('informacoes');
    informacoesDiv.innerHTML = ''; // Limpar o conteúdo da div
    // Resetar o estado dos botões ao ocultar as informações
    estadoBotao1 = false;
    estadoBotao2 = false;
  }