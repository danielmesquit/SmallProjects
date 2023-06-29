let num1 = document.querySelector('#one')
let num2 = document.querySelector('#two')
let num3 = document.querySelector('#three')
let num4 = document.querySelector('#four')
let num5 = document.querySelector('#five')
let num6 = document.querySelector('#six')
let num7 = document.querySelector('#seven')
let num8 = document.querySelector('#eight')
let num9 = document.querySelector('#nine')
let num0 = document.querySelector('#zero')
let period = document.querySelector('#period')
let result = document.querySelector('#finalResult')

let numeroInicial = "";

num1.addEventListener('click', () => {
    numeroInicial += '1'
    result.innerText = numeroInicial;
})
num2.addEventListener('click', () => {
    numeroInicial += '2'
    result.innerText = numeroInicial;
})
num3.addEventListener('click', () => {
    numeroInicial += '3'
    result.innerText = numeroInicial;
})
num4.addEventListener('click', () => {
    numeroInicial += '4'
    result.innerText = numeroInicial;
})
num5.addEventListener('click', () => {
    numeroInicial += '5'
    result.innerText = numeroInicial;
})
num6.addEventListener('click', () => {
    numeroInicial += '6'
    result.innerText = numeroInicial;
})
num7.addEventListener('click', () => {
    numeroInicial += '7'
    result.innerText = numeroInicial;
})
num8.addEventListener('click', () => {
    numeroInicial += '8'
    result.innerText = numeroInicial;
})
num9.addEventListener('click', () => {
    numeroInicial += '9'
    result.innerText = numeroInicial;
})
num0.addEventListener('click', () => {
    numeroInicial += '0'
    result.innerText = numeroInicial;
})
period.addEventListener('click', () => {
    numeroInicial += '.'
    result.innerText = numeroInicial;
})

let sum = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let divide = document.querySelector('#divide')
let multiply = document.querySelector('#x')
let equals = document.querySelector('#equal')
let erase = document.querySelector('#erase')
let operation = document.querySelector('#visorOperation')

let numeroArmazenado = document.querySelector('#numArmazenado')

erase.addEventListener('click',()=>{    
    numeroArmazenado.innerText = ''
    result.innerText = ''
    numeroInicial =''
    operation.innerText = ''
})
sum.addEventListener('click', () => {
    numeroArmazenado.innerText = numeroInicial    
    numeroInicial = ''
    operation.innerText = '+'
})
minus.addEventListener('click', () => {
    numeroArmazenado.innerText = numeroInicial
    numeroInicial = ''
    operation.innerText = '-'
})
divide.addEventListener('click', () => {
    numeroArmazenado.innerText = numeroInicial
    numeroInicial = ''
    operation.innerText = '/'    
})
multiply.addEventListener('click', () => {
    numeroArmazenado.innerText = numeroInicial
    numeroInicial = ''
    operation.innerText = '*'
})
equals.addEventListener('click', () => {
    let n = 0
    if (operation.innerText === '+') {
    //    n = (Number(numeroArmazenado.innerText) + Number(numeroInicial))
    //    result.innerText = Math.round(n)
    result.innerText = (Number(numeroArmazenado.innerText) + Number(numeroInicial))
    }else if (operation.innerText === '-') {
    //    n = (Number(numeroArmazenado.innerText) - Number(numeroInicial))
    //    result.innerText = n.toFixed(2)
    result.innerText = (Number(numeroArmazenado.innerText) - Number(numeroInicial))
    }else if (operation.innerText === '/') {
    //    n = (Number(numeroArmazenado.innerText) / Number(numeroInicial))
    //    result.innerText = n.toFixed(2)
    result.innerText = (Number(numeroArmazenado.innerText) / Number(numeroInicial))
    }else if (operation.innerText === '*') {
    //    n = (Number(numeroArmazenado.innerText) * Number(numeroInicial))
    //    result.innerText = n.toFixed(2)
    result.innerText = (Number(numeroArmazenado.innerText) * Number(numeroInicial))
    }
})