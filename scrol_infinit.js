var listElm = document.querySelector("#infinite-list")
let array = JSON.parse(localStorage.getItem('conteudo'))
var nextItem =1;
var loadMore = function(){
    for (var i=0;i<array.length;i++){
        var item=document.createElement('article')
        var titulo = document.createElement('h1')
        titulo.innerText = array[i].titulo
        var autor = document.createElement('p')
        autor.draggable ="true"
        autor.innerText = array[i].autor
        var data = document.createElement('span')
        data.innerText = array[i].data
        var texto = document.createElement('p')
        texto.innerText = array[i].texto
        // item.innerText = 'Item' + nextItem++;
        item.appendChild(titulo)
        item.appendChild(autor)
        item.appendChild(data)
        item.appendChild(texto)
        listElm.appendChild(item)
    }
}

// //Detectando quando o Scroll é acionado
// listElm.addEventListener('scroll',function(){
//     if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight){
//         loadMore()
//     } 
// })
loadMore()

function login(){
    window.location.href="form.html"
}

