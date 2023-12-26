const { Note, Scale } = require("tonal");
const notas = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]
const afinacao = ["E","A","D","G","B","E"];
const braco = document.querySelector(".braco");
let range = 1;


function defineNota(cordaAtual, casaAtual){
    let notaInicial = afinacao[cordaAtual-1];

    if(range != 1){
        let notaAfinacao = notaInicial;
        notaInicial = notas[notas.findIndex(el => el == notaAfinacao) + range - 1]
    }
    console.log(notaInicial)
    const nota = notas [ notas.findIndex(el => el == notaInicial) + casaAtual < notas.length ? notas.findIndex(el => el == notaInicial) + casaAtual : 
        notas.findIndex(el => el == notaInicial) + casaAtual - notas.length ];

    return nota;
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

            nota.append(defineNota(i,j))

            notaContainer.appendChild(nota);
            casa.appendChild(notaContainer);
           
            if(i === 5){
            let notaContainerD = document.createElement("span");
            notaContainerD.classList.add("nota-container-direita");

            let notaD = document.createElement("span");
            notaD.classList.add("nota","hidden");

           

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
}

