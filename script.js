const container = document.createElement('div')
container.classname = 'container'

const header = document.createElement('div')
header.classname = 'header'
container.appendChild(header)

const title = document.createElement('h1')
title.innerHTML = 'ASD1'
header.appendChild(title)

const main = document.createElement('div')//Main Div
main.classname = 'main'
container.appendChild(main)

const descricao = document.createElement('h3')//Digite seu RA
descricao.innerHTML = 'Digite seu RA'
main.appendChild(descricao)

var inputBox = document.createElement('input')//Entrada do RA
inputBox.type = 'text'
inputBox.id = 'inputBox'
main.appendChild(inputBox)

var resultado = document.createElement('input')//Saida com o Calculo
resultado.type = 'text'
container.appendChild(resultado)

const btn = document.createElement('button')//Botao função do calculo
btn.classname = 'btn'
btn.type = 'button'
btn.innerText = 'Calcular'
btn.addEventListener('click', () => {
    
   var RA = parseInt(document.getElementById('inputBox').value)
    //var RA = Event.inputBox
    //let RA = parseInt(document.getElementById('.inputBox'))
    //console.log(RA)
    for (cont = 1; cont <= RA; cont ++){ 
        if(RA % cont == 0){
           resultado = cont //(cont +' ')
           console.log(cont)
           resultado = document.getElementById('cont')
        }
    }
    
})
main.appendChild(btn)

resultado = document.getElementById('cont')

document.body.appendChild(container)





// var inputBox = parseInt(('Digite seu RA: '));

// for(cont = 1; cont <= inputBox; cont ++){
//     if (inputBox%cont == 0){
//         resultado = (cont);
//     }
// }
// const resultado = document.createElement('input')
// resultado.type = 'text'
// container.appendChild(resultado)

// var n = parseInt(prompt("Digite um numero"))
// function resposta(){
//    for(i = 1; i <= n; i++){
//        if(n % i == 0){
//         alert(i+" ");
//       }
//    }
// }
// resultado = resposta();