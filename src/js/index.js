
//OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior

//- passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
    const abas = document.querySelectorAll(".aba")
    

    abas.forEach(aba =>{
//- passo 2 - dar um jeito de identificar o clique no elemento da aba
        aba.addEventListener("click", function(){
            if(aba.classList.contains("selecionado")){ //verifica se a aba contém a class selecionado
                return; //para a função
            }
            selecionarAba(aba)
            mostrarInformacaoDaAba(aba)
        })
    })
    
function selecionarAba(aba){
    //- passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionado = document.querySelector(".aba.selecionado");
    abaSelecionado.classList.remove("selecionado")

    // - passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado")
}

function mostrarInformacaoDaAba(aba){
    //- passo 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado")
    
    informacaoSelecionada.classList.remove("selecionado")

    //- passo 6 - mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}