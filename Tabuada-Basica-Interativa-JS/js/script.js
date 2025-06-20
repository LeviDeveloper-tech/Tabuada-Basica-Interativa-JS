// Seleciona o botão "Gerar Tabuada" e adiciona o evento de clique
let btn = document.getElementById('btnGerar')
btn.addEventListener('click', gerar)

// Função principal para gerar a tabuada
function gerar(){
    // Obtém o valor digitado pelo usuário
    let strNum = document.getElementById('strNum').value 
    // Seleciona a div onde a tabuada será exibida
    let divTab = document.getElementById('divTab')
    // Seleciona o campo de escolha da operação
    let selectOperacao = document.getElementById('selectOperacao')
    // Obtém a operação selecionada (+, -, ×, ÷)
    let operacaoSelecionada = selectOperacao.value
    
    // Verifica se o campo de número está vazio
    if(strNum.length == 0){
        window.alert('[ERROR] Digite um número para gerar uma tabuada.')
    }else{
        // Limpa o conteúdo anterior da divTab
        divTab.innerHTML = ''
        
        // Converte o valor digitado para número
        let numero = Number(strNum)
        
        // Cria um elemento <select> para exibir a tabuada
        let selectTabuada = document.createElement('select')
        selectTabuada.setAttribute('id', 'selectTabuada')
        selectTabuada.setAttribute('size', '10')

        // Adiciona o <select> criado à divTab
        divTab.appendChild(selectTabuada)

        // Gera a tabuada de acordo com a operação escolhida
        switch (operacaoSelecionada) {
            case "operacao1": // Soma
                for(let i = 1; i <= 10; i++){
                    // Cria uma opção para cada linha da tabuada
                    let optionSelect = document.createElement('option')
                    optionSelect.text = `${numero} + ${i} = ${numero + i}`
                    optionSelect.value = `selectTabuada${i}`
                    selectTabuada.appendChild(optionSelect)
                }
                break;
            case "operacao2": // Subtração
                for(let i = 1; i <= 10; i++){
                    let optionSelect = document.createElement('option')
                    optionSelect.text = `${numero} - ${i} = ${numero - i}`
                    optionSelect.value = `selectTabuada${i}`
                    selectTabuada.appendChild(optionSelect)
                }
                break; 
            case "operacao3": // Multiplicação
                for(let i = 1; i <= 10; i++){
                    let optionSelect = document.createElement('option')
                    optionSelect.text = `${numero} × ${i} = ${numero * i}`
                    optionSelect.value = `selectTabuada${i}`
                    selectTabuada.appendChild(optionSelect)
                }
                break; 
            case "operacao4": // Divisão
                for(let i = 1; i <= 10; i++){
                    let optionSelect = document.createElement('option')
                    optionSelect.text = `${numero} ÷ ${i} = ${numero / i}`
                    optionSelect.value = `selectTabuada${i}`
                    selectTabuada.appendChild(optionSelect)
                }
                break; 
            default:
                break;
        }
    }
}    