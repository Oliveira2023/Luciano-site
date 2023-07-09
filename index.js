let menuEl = document.getElementById("menu-principal")
let lang = document.querySelector("#lang")
let galeryBoton = document.getElementById("galeryboton")
let baloes = document.querySelector('#baloes')
let vale = document.querySelector('#vale')
let rio = document.querySelector('#rio')
let cassete = document.querySelector('#cassete')
let btnSend = document.querySelector('#send')


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
function btnGalery(){
    baloes.style.display = "block"
        galeryBoton.style.display = 'none'
        setTimeout(() => {
            baloes.style.display = "none"
            rio.style.display = 'block'
    
            setTimeout(() => {
                rio.style.display = 'none'
                vale.style.display = 'block'
                
                setTimeout(() => {
                    vale.style.display = 'none'
                    cassete.style.display = 'block'
                    
                    setTimeout(() => {
                        cassete.style.display = 'none'
                        penhasco.style.display = 'block'
    
                        setTimeout(() => {
                            penhasco.style.display = 'none'
                            galeryBoton.style.display = 'block'
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
}

function enviar(){
    let divDoP = document.querySelector('#limite-footer')
    divDoP.firstElementChild.style.visibility = 'visible'
    setTimeout(() => {
        location.reload()
    }, 1000);
}
