
export{displayAcordes};
import {displayTrastes} from './index.js';



function displayAcordes(){
    let divContainer = document.createElement("div");
    divContainer.classList.add("container-acordes");
    document.querySelector(".builder-container").replaceChildren(divContainer)

    JSON.parse(localStorage.getItem("acordes")).forEach((acorde)=>{
        let div = document.createElement("div");
        let btn = document.createElement("button");
        btn.append(acorde.nome);
        btn.classList.add("btn-acorde","pointer");
        div.classList.add("div-acorde");
        div.append(btn)
        divContainer.append(div)
        btn.addEventListener('click',()=>{
            renderAcorde(acorde)
        })
    })
}


function renderAcorde(acorde){
    let divAcorde = document.createElement("div");
    divAcorde.classList.add("acorde-container");
    let divInformation = document.createElement("div")
    divInformation.classList.add("div-info")
    let divDisplay = document.createElement("div")
    divDisplay.classList.add("div-display")
    divAcorde.append(divInformation,divDisplay)

    let nomeAcorde = document.createElement("h2")
    nomeAcorde.append(acorde.nome);
    nomeAcorde.classList.add("white")
    divInformation.append(nomeAcorde)

    let h3 = document.createElement("h3")
    h3.append("Notas:")
    h3.classList.add("white")
    divInformation.append(h3)

    acorde.notas.forEach((el,i)=>{
        let p = document.createElement("p")
        let txt = `Corda ${i + 1}: ` + (el.nota != undefined ? el.nota : "Sem nota");
        p.classList.add("white")
        p.append(txt);
        divInformation.append(p)
    })

    construirAcorde(divDisplay,acorde)


    document.querySelector(".builder-container").replaceChildren(divAcorde)

}


function construirAcorde(pai,acorde){
    let divCasas = document.createElement("div")
    divCasas.classList.add("numeroCasas-container","c-default","padding-t")

    let i = 0;
    while(i < 5){
        let span = document.createElement("span")
        span.append(acorde.range+i)
        divCasas.append(span)
        i = i + 1;
    }

    pai.append(divCasas);
    displayTrastes(pai,true,acorde.notas)
    

}