const btnCreatPass = document.querySelector('button')
const passArea = document.querySelector('input')

let letters = '09sayugf8qh2i9ad9has9d8ga8fq3ui9rh2893qrga987dfg8a9s7dag76efq246aw8yefva8796fe784283gb82ybf78b76agsd7avsd7yav7gv37vbyur3vb8avd79av'


btnCreatPass.addEventListener('click',()=>{
    let numRandom = Math.round(Math.random()*20)
    let numRandom2 = Math.round(Math.random()*20)
    let numRandom3 = Math.round(Math.random()*20)
    let numRandom4 = Math.round(Math.random()*20)
    let numRandom5 = Math.round(Math.random()*20)
    let numRandom6 = Math.round(Math.random()*20)
    let numRandom7 = Math.round(Math.random()*20)
    let numRandom8 = Math.round(Math.random()*20)
    let password = letters[numRandom]+letters[numRandom2]+letters[numRandom3]+letters[numRandom4]+letters[numRandom5]+letters[numRandom6]+letters[numRandom7]+letters[numRandom8]
    passArea.value = password
})
