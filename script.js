const sub = document.getElementById('subtrair')
const add = document.getElementById('adicionar')
const zerar = document.getElementById('zerar')


let count = 0
const label = document.getElementById('minhalabel')

sub.addEventListener('click', () => {
    count--
    label.innerHTML = count
})
add.addEventListener('click', () => {
    count++
    label.innerHTML = count
})
zerar.addEventListener('click', () => {
    count = 0
    label.innerHTML = count
})
