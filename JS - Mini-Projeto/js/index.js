const cores = ["#000080", "#008000", "#8B008B"];
let contCor = 0;

function adicionar() {
    const nota = document.getElementById("nota_add").value;
    const urgente = document.getElementById("check_urgente").checked;
    const nao_urgente = document.getElementById("check_nurgente").checked;

    const novo = document.createElement("li");
    novo.textContent = nota;
    novo.style.color = cores[contCor];
    contCor = (contCor + 1) % cores.length;

    if (urgente == true && nao_urgente == true)
    {
        alert("Selecione apenas uma opção")
        return
    }

    if (urgente== false && nao_urgente == false)
    {
        alert("Selecione uma opção")
        return
    }
    
    if(nota=="")
    {
        alert("É necessário preencher o campo sugerido") 
        return  
    }

    else if (nao_urgente)
    {
        const listaNaoUrgente = document.getElementById("ListaNurgentes");
        listaNaoUrgente.appendChild(novo);
        document.getElementById("nota_add").value= ""

    } 

    else if (urgente) 
    {
        const listaUrgente = document.getElementById("ListaUrgentes");
        listaUrgente.appendChild(novo);
        document.getElementById("nota_add").value= ""
    } 
}


function excluir_notan() {
    const lista = document.getElementById("ListaNurgentes");
    if (lista.children.length > 0) /*lenght - quantidade de itens*/
     {
        lista.removeChild(lista.lastChild);
    } else {
        alert("Não há nota para remover");
    }
}

function excluir_nota_urg() {
    const lista = document.getElementById("ListaUrgentes");
    if (lista.children.length > 0) {
        lista.removeChild(lista.lastChild);
    } else {
        alert("Não há nota para remover");
    }
}

function excluir_todasn() {
    const lista = document.getElementById("ListaNurgentes");
    if (lista.children.length === 0) {
        alert("Não há notas para remover");
    } else {
        while (lista.firstChild) /*retorna o primeiro filho em relação ao elemento pai*/
        {
            lista.removeChild(lista.firstChild);
        }
    }
}

function excluir_todas_urg() {
    const lista = document.getElementById("ListaUrgentes");
    if (lista.children.length === 0) {
        alert("Não há notas para remover");
    } else {
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    }
}
 

