// Passo 1 - Pegar os personagens no JS para poder verificar quando o usuario passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');

// Passo 2 - 

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if(window.innerWidth < 450){
            window.scrollTo({ top: 0, behavior: 'smooth'});
        }

        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        alterarImagemPersonagemSelecionado(personagem);

        alterarNomePersonagemSelecionado(personagem);

        alterarDescricaoPersonagem(personagem);
    })
})


function alterarNomePersonagemSelecionado(personagem){
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarDescricaoPersonagem(personagem){
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarImagemPersonagemSelecionado(personagem){
    const imagemPersonagemGrande = document.querySelector('.personagem-grande')

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem(){
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}