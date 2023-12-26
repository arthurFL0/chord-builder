const { Note, Scale } = require("tonal");
const notas = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]
const afinacao = ["E","A","D","G","B","E"];
const braco = document.querySelector(".braco");
const rangeHTML = document.querySelectorAll(".range-container > span")[1]
const rangeDiminui = document.querySelectorAll(".range-container > span")[0]
const rangeAumenta = document.querySelectorAll(".range-container > span")[2]

let arrayNotas = [[],[],[],[],[],[]];
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
        el.innerText = i + range })

}

console.log(arrayNotas)



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

            nota.append(defineNota(i,j))

            arrayNotas[i-1].push(nota);

            notaContainer.appendChild(nota);
            casa.appendChild(notaContainer);
           
            if(i === 5){
            let notaContainerD = document.createElement("span");
            notaContainerD.classList.add("nota-container-direita");

            let notaD = document.createElement("span");
            notaD.classList.add("nota","hidden");
            notaD.append(defineNota(6,j))

            arrayNotas[5].push(notaD);

           

            notaContainerD.appendChild(notaD);  
            casa.appendChild(notaContainerD);  
            }

            col.appendChild(casa);
        }

      
        braco.appendChild(col);
    }
}



window.onload = () => {
    displayTrastes();
    rangeHTML.append(range)
}



rangeDiminui.addEventListener("click",(event)=>{
    if(range > 1){
        range = range - 1;
        rangeHTML.replaceChild(document.createTextNode(range),rangeHTML.childNodes[0]);
        atualizaCasas();
        atualizaNotas();
    }
})

rangeAumenta.addEventListener("click",(event)=>{
    if(range < 20){
        range = range + 1;
        rangeHTML.replaceChild(document.createTextNode(range),rangeHTML.childNodes[0]);
        atualizaCasas();
        atualizaNotas();
    }
})
