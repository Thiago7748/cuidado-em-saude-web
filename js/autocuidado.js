// Busca no HTML as três caixas, o contador, a mensagem e o botão de limpar.
const caixas = document.querySelectorAll('#checklist-autocuidado input[type="checkbox"]');
const contador = document.querySelector('#contador-cuidados');
const mensagem = document.querySelector('#mensagem-conclusao');
const botaoLimpar = document.querySelector('#limpar-cuidados');

// Recalcula o estado do checklist sempre que uma marcação muda.
function atualizarChecklist() {
    let marcados = 0;

    // forEach percorre cada caixa; checked informa se ela está marcada.
    caixas.forEach((caixa) => {
        if (caixa.checked) {
            marcados++;
        }
    });

    // Atualiza o texto mostrado ao usuário com a quantidade marcada.
    contador.textContent = `${marcados} de ${caixas.length} cuidados marcados`;
    // Mostra a mensagem somente quando todas as caixas estão marcadas.
    mensagem.hidden = marcados !== caixas.length;
    // Desativa o botão quando não existe marcação para limpar.
    botaoLimpar.disabled = marcados === 0;
}

// O evento change chama a função após marcar ou desmarcar qualquer caixa.
caixas.forEach((caixa) => {
    caixa.addEventListener('change', atualizarChecklist);
});

// Ao clicar no botão, desmarca tudo e atualiza o contador e a mensagem.
botaoLimpar.addEventListener('click', () => {
    caixas.forEach((caixa) => {
        caixa.checked = false;
    });

    atualizarChecklist();
});

// Define o estado inicial assim que a página carrega.
atualizarChecklist();
