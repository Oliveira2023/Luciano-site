let menuEl = document.getElementById("menu-principal")
let lang = document.querySelector("#lang")
function menuClick(){
    if (menuEl.style.display == "block"){
        menuEl.style.display = "none"
    }else{
        menuEl.style.display = "block"
    }
}
lang.addEventListener('click', ()=>{
    lang.innerHTML = 'EN'
})