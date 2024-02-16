    import { testeRender } from './info.js'
    import { displayAcordes } from './acordes.js'
    export {displayTrastes};

    const { Chord } = require("tonal");
    const notas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
    const afinacao = ["E", "A", "D", "G", "B", "E"];
    const braco = document.querySelector(".braco");
    const openNoteContainer = document.querySelector(".openNote-container")
    const rangeHTML = document.querySelectorAll(".range-container > span")[1]
    const rangeDiminui = document.querySelectorAll(".range-container > span")[0]
    const rangeAumenta = document.querySelectorAll(".range-container > span")[2]
    const acordeResultadoHTML = document.querySelector(".acordeResultado");
    const acordeBTN = document.querySelector(".acordeBTN");
    const infoBTN = document.querySelector(".btn-info")
    const construtorBTN = document.querySelector(".btn-construtor")
    const acordesBTN = document.querySelector(".btn-acordes")
    const nomeInput = document.getElementsByName("nomeAcorde")[0]
    const btnInputNome = document.querySelector(".btn-inputNome")
    const btnSalva = document.querySelector(".btn-salvaAcorde")

    let arrayNotas = [[], [], [], [], [], []];
    let notasSelecionadas = [{}, {}, {}, {}, {}, {}];
    let cache;
    let btnAtual = construtorBTN;
    let range = 1;



function defineNota(cordaAtual, casaAtual) {
    let notaInicial = afinacao[cordaAtual - 1];

    if (range > 1) {
        let notaAfinacao = notaInicial;
        notaInicial = notas[notas.findIndex(el => el == notaAfinacao) + range - 1 < notas.length ? notas.findIndex(el => el == notaAfinacao) + range - 1 :
            notas.findIndex(el => el == notaAfinacao) + range - 1 - notas.length]
    }
    const nota = notas[notas.findIndex(el => el == notaInicial) + casaAtual < notas.length ? notas.findIndex(el => el == notaInicial) + casaAtual :
        notas.findIndex(el => el == notaInicial) + casaAtual - notas.length];

    return nota;
}


function atualizaNotas() {
    for (let i = 1; i < 6; i++) {
        for (let j = 1; j < 6; j++) {
            arrayNotas[i - 1][j - 1].replaceChild(document.createTextNode(defineNota(i, j)), arrayNotas[i - 1][j - 1].childNodes[0]);
            if (i === 5) {
                arrayNotas[5][j - 1].replaceChild(document.createTextNode(defineNota(6, j)), arrayNotas[5][j - 1].childNodes[0]);
            }
        }
    }
}


function atualizaCasas() {
    [...document.querySelectorAll(".numeroCasas-container > span")].forEach((el, i) => {
        el.textContent = i + range
    })

}

function atualizaSelecao() {
    notasSelecionadas.forEach((el, i) => {
        if (el.nota != undefined && el.casa != 6) {
            el.nota = el.elemento.textContent;
        }
    })
    displayNotasSelecionadas()
}

function desativarNotaVelha(coluna) {
    if (notasSelecionadas[coluna].casa != 6) {
        notasSelecionadas[coluna].elemento.classList.toggle("hidden");
    } else {
        notasSelecionadas[coluna].elemento.childNodes[1].classList.remove("dis-block");
        notasSelecionadas[coluna].elemento.childNodes[1].classList.add("dis-none");

    }
}

function displayNotasSelecionadas() {
    let holder = document.querySelector(".notasSelecionadas-holder")

    notasSelecionadas.forEach((el, i) => {
        let span = holder.children.length < 6 ? document.createElement("span") : holder.children[i];
        let txt = `Corda ${i + 1}: ` + (el.nota != undefined ? el.nota : "Sem nota");
        if (span.childNodes.length < 1) {
            span.append(txt);
            holder.append(span)
        } else {
            span.replaceChild(document.createTextNode(txt), span.childNodes[0]);
        }
    })
}


function selecionaOpenNote(coluna, nota, elemento) {

    if (elemento.childNodes[0].classList.contains("dis-none") && elemento.childNodes[1].classList.contains("dis-none")
        || elemento.childNodes[1].classList.contains("dis-none")) {
        if (notasSelecionadas[coluna].nota != undefined) {
            desativarNotaVelha(coluna);
        }

        elemento.childNodes[0].classList.add("dis-none")
        elemento.childNodes[1].classList.add("dis-block")
        elemento.childNodes[1].classList.remove("dis-none")
        let obj = notasSelecionadas[coluna];
        obj["nota"] = nota;
        obj["casa"] = 6;
        obj["elemento"] = elemento;
    } else {
        elemento.childNodes[0].classList.remove("dis-none")
        elemento.childNodes[1].classList.remove("dis-block")
        elemento.childNodes[1].classList.add("dis-none")
        notasSelecionadas[coluna] = {};
    }

    displayNotasSelecionadas();
}

function selecionaNota(coluna, casa, elementoNovo) {
    if (elementoNovo.classList.contains("hidden")) {
        elementoNovo.classList.toggle("hidden")

        if (notasSelecionadas[coluna].nota != undefined) {
            desativarNotaVelha(coluna);
        } else {
            document.querySelector(`.openNote-holder:nth-child(${coluna + 1}) .openNote-span`).classList.add("dis-none")
        }

        let obj = notasSelecionadas[coluna];
        obj["nota"] = elementoNovo.innerText;
        obj["casa"] = casa;
        obj["elemento"] = elementoNovo;



    } else {
        elementoNovo.classList.toggle("hidden");
        document.querySelector(`.openNote-holder:nth-child(${coluna + 1}) .openNote-span`).classList.remove("dis-none")
        notasSelecionadas[coluna] = {};
    }

    displayNotasSelecionadas();
}




function displayOpenNotes() {
    afinacao.forEach((el, i) => {
        let div = document.createElement("div")
        let sp = document.createElement("span")
        let spBola = document.createElement("span")
        let hidden = document.createElement("p")
        hidden.append(el);
        sp.append("X")
        sp.classList.add("openNote-span")
        hidden.classList.add("dis-none")
        sp.append(hidden)
        div.append(sp)
        div.classList.add("openNote-holder")
        spBola.classList.add("openNote-bola")
        spBola.classList.add("dis-none");
        div.append(spBola)
        openNoteContainer.append(div);



        div.addEventListener("click", () => {
            selecionaOpenNote(i, el, div);
        })



    })
}



function displayTrastes(pai,ehVisualizador,notas) {
    for (let i = 1; i < 6; i++) {
        let col = document.createElement("div")
        col.classList.add("coluna");

        for (let j = 1; j < 6; j++) {

            let casa = document.createElement("div");
            casa.classList.add("casa");

            let notaContainer = document.createElement("span");

            let nota = document.createElement("span");

            let notaTxt = defineNota(i, j);
            nota.append(notaTxt)

            arrayNotas[i - 1].push(nota);

            notaContainer.appendChild(nota);
            casa.appendChild(notaContainer);

            if(!ehVisualizador){
                notaContainer.classList.add("nota-container")
                notaContainer.addEventListener("click", () => {
                    selecionaNota(i - 1, j, nota)
                })
                nota.classList.add("nota", "hidden");
            }else{
                notaContainer.classList.add("nota-container-B")

                if(notas[i-1].casa != undefined && j === notas[i-1].casa){
                    nota.classList.add("nota");
                }else{
                    nota.classList.add("nota", "hidden");
                }
            }


            if (i === 5) {
                let notaContainerD = document.createElement("span");
                
                let notaD = document.createElement("span");
                let notaDTxt = defineNota(6, j);
                notaD.append(notaDTxt)
                
                arrayNotas[5].push(notaD);
                
                
                notaContainerD.appendChild(notaD);
                casa.appendChild(notaContainerD);
                
                if(!ehVisualizador){
                    notaContainerD.classList.add("nota-container-direita");
                    notaD.classList.add("nota", "hidden");
                    notaContainerD.addEventListener("click", () => {
                        selecionaNota(i, j, notaD)
                    })
                }else{
                    notaContainerD.classList.add("nota-container-direita-B")
    
                    if(notas[5].casa != undefined && j === notas[5].casa){
                        notaD.classList.add("nota");
                    }else{
                        notaD.classList.add("nota", "hidden");
                    }
                }

            }

            col.appendChild(casa);
        }


        pai.appendChild(col);
    }
}


function achaAcorde() {
    let notas = notasSelecionadas.map((obj) => {
        if (obj.nota != undefined) {
            return obj.nota
        }
    });

    let acordes = Chord.detect(notas)
    let txt;
    if (acordes.length != 0) {
        txt = "Acordes detectados: " + acordes.join(", ")
        nomeInput.value = acordes[0]

        if (document.querySelector(".listaInput") === null) {
            let ul = document.createElement("ul")
            ul.classList.add("listaInput", "dis-none")
            let holder = document.querySelector(".inputNome-holder")
            holder.append(ul)
            acordes.forEach((el) => {
                let li = document.createElement("li")
                li.append(el)
                ul.append(li)

                li.addEventListener("click", () => {
                    nomeInput.value = li.textContent
                })


            })
        }else{
            let ul = document.querySelector(".listaInput");
            ul.replaceChildren(...acordes.map((el)=>{
                let li = document.createElement("li")
                li.append(el)

                li.addEventListener("click", () => {
                    nomeInput.value = li.textContent
                })

                return li;
            }))
        }


    } else {
        txt = "Nenhum acorde foi detectado"
    }
    acordeResultadoHTML.replaceChildren(txt)

    console.log(notasSelecionadas)


}

function salvaAcorde(){

    let novoAcorde = {};
    novoAcorde["nome"] = nomeInput.value;
    novoAcorde["notas"] = notasSelecionadas;
    novoAcorde["range"] = range;

    let p = document.querySelector(".textoSave")

    if(!localStorage.getItem("acordes")){
        localStorage.setItem("acordes",JSON.stringify([novoAcorde]))
        p.replaceChildren("O acorde foi salvo!")
    }else{
        let arr = JSON.parse(localStorage.getItem("acordes"));
        if(!achaDupli(novoAcorde.nome)){
            arr.push(novoAcorde);
            localStorage.setItem("acordes",JSON.stringify(arr));
            p.replaceChildren("O acorde foi salvo!")
        }else{
            p.replaceChildren("Já foi salvo um acorde com o mesmo nome.")
        
        }
    }

}


function achaDupli(nome){
    let arrayAcordes = JSON.parse(localStorage.getItem("acordes"));
    for(let i = 0; i < arrayAcordes.length; i++){
        if(arrayAcordes[i].nome === nome)
            return true
    }
    return false
}

function salvaCache(){
    const ehPaginaConstrutor = document.querySelector((".builder-container")).children[0].classList.contains("range-container");

    if(ehPaginaConstrutor){
        const c = document.querySelector(".builder-container").childNodes
        cache = Array.from(c);
    }

}

function alteraAtual(targetBTN){
    if(targetBTN !== btnAtual){
        btnAtual.classList.toggle("atual");
        targetBTN.classList.toggle("atual");
        btnAtual = targetBTN;
    }
}




window.onload = () => {
    displayTrastes(braco);
    displayOpenNotes();
    displayNotasSelecionadas();
    rangeHTML.append(range)

}


acordeBTN.addEventListener("click", () => {
    achaAcorde();
})

rangeDiminui.addEventListener("click", (event) => {
    if (range > 1) {
        range = range - 1;
        rangeHTML.replaceChild(document.createTextNode(range), rangeHTML.childNodes[0]);
        atualizaCasas();
        atualizaNotas();
        atualizaSelecao();
    }
})

rangeAumenta.addEventListener("click", (event) => {
    if (range < 20) {
        range = range + 1;
        rangeHTML.replaceChild(document.createTextNode(range), rangeHTML.childNodes[0]);
        atualizaCasas();
        atualizaNotas();
        atualizaSelecao();

    }
})




infoBTN.addEventListener("click", (event) => {
    salvaCache();
    testeRender();
    alteraAtual(event.target)
})

construtorBTN.addEventListener("click", (event) => {
    if(cache){
        let c = document.querySelector(".builder-container")
        c.replaceChildren(...cache)
    }
    alteraAtual(event.target)
})

acordesBTN.addEventListener("click",(event)=>{
    salvaCache();
    displayAcordes();
    alteraAtual(event.target)
})



btnInputNome.addEventListener("click", () => {
    let li = document.querySelector(".listaInput")
    if(document.querySelector(".listaInput") != null){
        li.classList.toggle("dis-block")
        li.classList.toggle("dis-none")
    }
})

btnSalva.addEventListener("click",()=>{
    salvaAcorde();
});