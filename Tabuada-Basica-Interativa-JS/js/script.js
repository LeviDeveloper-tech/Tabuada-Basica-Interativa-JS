let btnClick = document.getElementById('btnClick');
btnClick.addEventListener('click', criarTabuada);

function criarTabuada(){
    let strNumeroEcolhido = document.getElementById('strNumero').value;
    let numero = Number(strNumeroEcolhido);
    let divSelect = document.getElementById('res');
    
    // Verifica se o campo está vazio
    if(strNumeroEcolhido.length == 0){
        alert('Digite um número');
        divSelect.innerHTML = '';
        return;
    }
    
    // Limpa o conteúdo anterior
    divSelect.innerHTML = '';
    // Cria o select da tabuada
    let tab = document.createElement('select');
    tab.setAttribute('id', 'tab');
    tab.setAttribute('size', '10');
    divSelect.appendChild(tab);
    
    // Gera a tabuada
    for(let i = 1; i <= 10; i++){
        let item = document.createElement('option');
        item.text = `${numero} x ${i} = ${numero * i}`;
        item.value = `tab${i}`;
        tab.appendChild(item); // Adiciona o option ao select
    }
}