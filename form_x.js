let formulario = document.querySelector(".container")

let salvar = function () {
    let conteudo = []

       
    conteudo = JSON.parse(localStorage.getItem('conteudo'))

  
    let materia = {
        autor: formulario.childNodes.item(3).value,
        titulo: formulario.childNodes.item(5).value,
        data: formulario.childNodes.item(7).value,
        img: formulario.childNodes.item(9).value,
        texto: formulario.childNodes.item(11).value
    }

    if(conteudo==null){
        conteudo = []
        
        conteudo.push(materia)
     }
 


    conteudo.push(materia)

    localStorage.setItem('conteudo', JSON.stringify(conteudo))

    alert("Conteudo Salvo")


    formulario.childNodes.item(3).value = ""
    formulario.childNodes.item(5).value = ""
    formulario.childNodes.item(7).value = ""
    formulario.childNodes.item(9).value = ""
    formulario.childNodes.item(11).value = ""

}


