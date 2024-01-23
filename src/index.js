const { Chord } = require("tonal");
const notas = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]
const afinacao = ["E","A","D","G","B","E"];
const braco = document.querySelector(".braco");
const openNoteContainer = document.querySelector(".openNote-container")
const rangeHTML = document.querySelectorAll(".range-container > span")[1]
const rangeDiminui = document.querySelectorAll(".range-container > span")[0]
const rangeAumenta = document.querySelectorAll(".range-container > span")[2]
const acordeResultadoHTML = document.querySelector(".acordeResultado");
const acordeBTN = document.querySelector(".acordeBTN");

let arrayNotas = [[],[],[],[],[],[]];
let notasSelecionadas = [{},{},{},{},{},{}];
let range = 1;


function defineNota(cordaAtual, casaAtual){
    let notaInicial = afinacao[cordaAtual-1];

    if(range > 1){
        let notaAfinacao = notaInicial;
        notaInicial = notas[notas.findIndex(el => el == notaAfinacao) + range - 1 < notas.length ? notas.findIndex(el => el == notaAfinacao) + range - 1 :
            notas.findIndex(el => el == notaAfinacao) + range - 1 - notas.length]
    }
    const nota = notas [ notas.findIndex(el => el == notaInicial) + casaAtual < notas.length ? notas.findIndex(el => el == notaInicial) + casaAtual : 
        notas.findIndex(el => el == notaInicial) + casaAtual - notas.length ];

    return nota;
}


function atualizaNotas(){
    for(let i = 1; i < 6;i++){
        for(let j = 1; j <6; j++){
            arrayNotas[i-1][j-1].replaceChild(document.createTextNode(defineNota(i,j)),arrayNotas[i-1][j-1].childNodes[0]);
            if(i === 5){
                arrayNotas[5][j-1].replaceChild(document.createTextNode(defineNota(6,j)),arrayNotas[5][j-1].childNodes[0]);
            }
        }
    }
}


function atualizaCasas(){
    [...document.querySelectorAll(".numeroCasas-container > span")].forEach((el,i)=>{
        el.textContent = i + range })

}

function atualizaSelecao(){
    notasSelecionadas.forEach((el,i)=>{
        if(el.nota != undefined && i != 5){
            el.nota = el.elemento.textContent;
        }
    })
    displayNotasSelecionadas()
}

function desativarNotaVelha(coluna){
    if(notasSelecionadas[coluna].casa != 6){
        notasSelecionadas[coluna].elemento.classList.toggle("hidden");
    }else{
        notasSelecionadas[coluna].elemento.childNodes[0].classList.toggle("dis-none");
        notasSelecionadas[coluna].elemento.childNodes[1].classList.toggle("dis-block");
    }
}

function displayNotasSelecionadas(){
    let holder = document.querySelector(".notasSelecionadas-holder")
  
    notasSelecionadas.forEach((el,i)=>{
            let span = holder.children.length < 6 ? document.createElement("span") : holder.children[i];
            let txt = `Corda ${i+1}: ` + (el.nota != undefined ? el.nota : "Sem nota");
            if(span.childNodes.length < 1){
                span.append(txt);
                holder.append(span)
            }else{
                span.replaceChild(document.createTextNode(txt),span.childNodes[0]);
            }
    })
}


function selecionaOpenNote(coluna,nota,elemento){
    if (elemento.childNodes[0].classList.contains("dis-none")){
        elemento.childNodes[0].classList.toggle("dis-none")
        elemento.childNodes[1].classList.toggle("dis-block")
        notasSelecionadas[coluna] = {};
        
    }else{

        if(notasSelecionadas[coluna].nota != undefined){
            desativarNotaVelha(coluna);
        }

        elemento.childNodes[0].classList.toggle("dis-none")
        elemento.childNodes[1].classList.toggle("dis-block")
        let obj = notasSelecionadas[coluna];
        obj["nota"] = nota;
        obj["casa"] = 6;
        obj["elemento"] = elemento;
    }

    displayNotasSelecionadas();
}

function selecionaNota(coluna,casa,elementoNovo){
    if(elementoNovo.classList.contains("hidden")){
        elementoNovo.classList.toggle("hidden")

        if(notasSelecionadas[coluna].nota != undefined){
            desativarNotaVelha(coluna);
        }

        let obj = notasSelecionadas[coluna];
        obj["nota"] = elementoNovo.innerText;
        obj["casa"] = casa;
        obj["elemento"] = elementoNovo;
        


    }else{
        elementoNovo.classList.toggle("hidden");
        notasSelecionadas[coluna] = {};
    }

    displayNotasSelecionadas();
}




function displayOpenNotes(){
    afinacao.forEach((el,i)=>{
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
        div.append(spBola)
        openNoteContainer.append(div);



        div.addEventListener("click",()=>{
            selecionaOpenNote(i,el,div);
        })

        

    })
}


function displayTrastes(){
    for(let i = 1; i < 6;i++){
        let col = document.createElement("div")
        col.classList.add("coluna");

        for(let j = 1; j <6; j++){
            
            let casa = document.createElement("div");
            casa.classList.add("casa");
           
            let notaContainer = document.createElement("span");
            notaContainer.classList.add("nota-container")

            let nota = document.createElement("span");
            nota.classList.add("nota","hidden");

            let notaTxt = defineNota(i,j);
            nota.append(notaTxt)

            arrayNotas[i-1].push(nota);

            notaContainer.appendChild(nota);
            casa.appendChild(notaContainer);

            notaContainer.addEventListener("click", ()=>{
                selecionaNota(i-1,j,nota)
            })
           
            if(i === 5){
            let notaContainerD = document.createElement("span");
            notaContainerD.classList.add("nota-container-direita");

            let notaD = document.createElement("span");
            notaD.classList.add("nota","hidden");
            let notaDTxt = defineNota(6,j);
            notaD.append(notaDTxt)

            arrayNotas[5].push(notaD);
            
            
            notaContainerD.appendChild(notaD);  
            casa.appendChild(notaContainerD);  
            
            notaContainerD.addEventListener("click", ()=>{
                selecionaNota(i,j,notaD)
            })

            }

            col.appendChild(casa);
        }

      
        braco.appendChild(col);
    }
}


function achaAcorde(){
   let notas = notasSelecionadas.map((obj)=>{ 
    if(obj.nota != undefined){
        return obj.nota
    }
   });

   let acordes = Chord.detect(notas)
   let txt;
   if(acordes.length != 0){
        txt = "Acordes detectados: "+ acordes.join(", ")
   }else{
        txt = "Nenhum acorde foi detectado"
   }
   acordeResultadoHTML.replaceChildren(txt)
}



window.onload = () => {
    displayTrastes();
    displayOpenNotes();
    displayNotasSelecionadas();
    rangeHTML.append(range)
}


acordeBTN.addEventListener("click",()=>{
    achaAcorde();
})

rangeDiminui.addEventListener("click",(event)=>{
    if(range > 1){
        range = range - 1;
        rangeHTML.replaceChild(document.createTextNode(range),rangeHTML.childNodes[0]);
        atualizaCasas();
        atualizaNotas();
        atualizaSelecao();
    }
})

rangeAumenta.addEventListener("click",(event)=>{
    if(range < 20){
        range = range + 1;
        rangeHTML.replaceChild(document.createTextNode(range),rangeHTML.childNodes[0]);
        atualizaCasas();
        atualizaNotas();
        atualizaSelecao();

    }
})
