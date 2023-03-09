swap = (vetor, posicao1, posicao2) => {
    let temp = vetor[posicao1]; 
    vetor[posicao1] = vetor[posicao2];
    vetor[posicao2] = temp;
}

shuffle = (vetor, trocas) => {
    for (let i = trocas; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        swap(vetor, i, j);
    }
}

quick_sort = (vetor, posicaoInicial, posicaoFinal) => {
    if (posicaoInicial == undefined) {
        posicaoInicial = 0;
    }
    if (posicaoFinal == undefined) {
        posicaoFinal = vetor.length - 1;
    }
    if (posicaoInicial >= posicaoFinal) {
        return;
    }

    let index = particionamento(vetor, posicaoInicial, posicaoFinal);
    
   
    quick_sort(vetor, posicaoInicial, index - 1);
    quick_sort(vetor, index + 1, posicaoFinal);
}

particionamento = (vetor, posicaoInicial, posicaoFinal) => {
  
    const pivotValue = vetor[posicaoFinal];
    let pivotIndex = posicaoInicial; 
    for (let i = posicaoInicial; i < posicaoFinal; i++) {
        if (vetor[i] < pivotValue) {
           
            swap(vetor, i, pivotIndex);
            pivotIndex++;
        }
    }
    
    swap(vetor, pivotIndex, posicaoFinal);
    return pivotIndex;
}
bubble_sort = (vetor) => {
    let troca = false;
    for(var i = 0; i <= vetor.length-1; i++){
        troca = false;
        for(var j = 0; j < ( vetor.length - i -1); j++){
            if(vetor[j] > vetor[j+1]){
                swap(vetor, j, j+1);
                troca = true;
            }
        }

        if(troca == false) return;
    }
}

selection_sort = (vetor) => {
    let n = vetor.length;
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(vetor[j] < vetor[min]) {
                min = j; 
            }
         }
         if (min != i) {
            swap(vetor, i, min);
         }
    }
} 





function add () {
    var valor = document.getElementById("valor").value;
    var valores = document.getElementById("valores");
    var node = document.createElement("li");
    var texto = document.createTextNode(valor);
    node.appendChild(texto);
    valores.appendChild(node);
}

function ordenar () {
    var algoritmo = document.getElementById("algoritmo").value;
    var valores = document.getElementById("valores");
    var vetorValores = Array.from(valores.children).map(e => parseInt(e.innerHTML));
    eval(algoritmo + "(vetorValores)");
    valores.innerHTML = "";
    vetorValores.map(i => {
        var node = document.createElement("li");
        var texto = document.createTextNode(i);
        node.appendChild(texto);
        valores.appendChild(node);
    });
}

function misturar () {
    var valores = document.getElementById("valores");
    var vetorValores = Array.from(valores.children).map(e => parseInt(e.innerHTML));
    shuffle(vetorValores, vetorValores.length-1);
    valores.innerHTML = "";
    vetorValores.map(i => {
        var node = document.createElement("li");
        var texto = document.createTextNode(i);
        node.appendChild(texto);
        valores.appendChild(node);
    });
}

