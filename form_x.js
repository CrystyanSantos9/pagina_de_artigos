let formulario = document.querySelector(".container")

for(var i=0 in formulario){
    console.log(i.item)
}

let entradas = document.querySelectorAll("input")

console.log(typeof(entradas))

entradas.forEach(function(e,i){
   let x = e.value
    e.addEventListener('blur',function(){
        if(e.value !==null && e.value.length > 0){
            console.log("valor do input "+ e.value)
            e.style.background ="green"
        }else{
            e.style.background ="red"
            e.focus()
        }
       
    })
})


let salvar = function () {
    let conteudo = []

    conteudo = JSON.parse(localStorage.getItem('conteudo'))

    // console.log(conteudo)

        if(conteudo==null){
           console.log(conteudo)
           console.log('First Register')

           conteudo = []

           let materia = {
            autor: formulario.childNodes.item(5).value,
            titulo: formulario.childNodes.item(9).value,
            data: formulario.childNodes.item(13).value,
            img: formulario.childNodes.item(17).value,
            texto: formulario.childNodes.item(21).value
        }

        conteudo.push(materia)
        localStorage.setItem('conteudo', JSON.stringify(conteudo))

        alert("Conteudo Salvo")

        formulario.childNodes.item(5).value = ""
        formulario.childNodes.item(9).value = ""
        formulario.childNodes.item(13).value = ""
        formulario.childNodes.item(17).value = ""
        formulario.childNodes.item(21).value = ""
        

        }else{

            let materia = {
                autor: formulario.childNodes.item(5).value,
                titulo: formulario.childNodes.item(9).value,
                data: formulario.childNodes.item(13).value,
                img: formulario.childNodes.item(17).value,
                texto: formulario.childNodes.item(21).value
            }
    
    
            conteudo.push(materia)
            localStorage.setItem('conteudo', JSON.stringify(conteudo))
    
            alert("Conteudo Salvo")
    
    
            formulario.childNodes.item(5).value = ""
            formulario.childNodes.item(9).value = ""
            formulario.childNodes.item(13).value = ""
            formulario.childNodes.item(17).value = ""
            formulario.childNodes.item(21).value = ""
        }
 

    }

// Para achar elemento do objeto formulario
// console.log(formulario.childNodes.item(21))

