
export {displayInfo};


function displayInfo(){
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let h2 = document.createElement('h2');
    let h2_contato = document.createElement('h2');
    let sec = document.createElement('section');
    let linkedin = document.createElement('a');
    let git = document.createElement('a')
    let email = document.createElement('a')
    let linkholder = document.createElement('div')
    linkholder.classList.add('link-holder')
    sec.classList.add('sec-info')
    h2_contato.append('Informações de contato');
    h2.append('Sobre o site')
    p.append("Nesse projeto pessoal de minha autoria você pode escolher as posições das notas no braço do violão, em formato de cifra, e então achar o nome do acorde digitado.")
    p2.append("Foi utilizado o empacotador web Parcel junto com Javascript, CSS, HTML e a biblioteca javascript de teoria musical 'tonal'.")
    linkedin.append("Linkedin")
    git.append("Github")
    email.append("arthurlacerda206@gmail.com")

    linkedin.href = "https://www.linkedin.com/in/arthurfl0"
    git.href = "https://github.com/arthurFL0"
    email.href = "mailto:arthurlacerda206@gmail.com"
    linkholder.append(linkedin,git,email)
    sec.append(h2,p,p2,h2_contato,linkholder)
        

    document.querySelector(".builder-container").replaceChildren(sec)
}