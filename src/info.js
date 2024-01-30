
export {testeRender};


function testeRender(){
    let p = document.createElement("p");
    p.append("palavras palvras apenas palavras")
    document.querySelector(".builder-container").replaceChildren(p)
}