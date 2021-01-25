var dark = window.document.getElementById('DarkMode')
dark.addEventListener('click',AlterarModo)
function AlterarModo(){
    window.document.body.style.background = 'black'
    window.document.body.style.color = 'white'
}