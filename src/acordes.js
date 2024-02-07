
export{displayAcordes};



function displayAcordes(){
    let divContainer = document.createElement("div");
    divContainer.classList.add("container-acordes");
    document.querySelector(".builder-container").replaceChildren(divContainer)

    JSON.parse(localStorage.getItem("acordes")).forEach((acorde)=>{
        let div = document.createElement("div");
        let btn = document.createElement("button");
        btn.append(acorde.nome);
        btn.classList.add("btn-acorde");
        div.classList.add("div-acorde");
        div.append(btn)
        divContainer.append(div)
    })
}