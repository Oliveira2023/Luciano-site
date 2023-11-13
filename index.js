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

        lang.classList.toggle('EN')
        if (lang.classList == 'EN'){

            if(document.title == "Biografia"){
                window.open('#','_self')
            }
            if(document.title == "Luciano"){
                window.open('#','_self')
            }
            if(document.title == "Filosofia"){
                window.open('#','_self')
            }
            if(document.title == "Play"){
                window.open('#','_self')
            }
            if(document.title == "Contato"){
                window.open('#','_self')
            }
        }else{
            //lang.innerHTML = 'PT'
            if(document.title == 'Biography'){
            window.open('biografia.html','_self')
            }
            if(document.title == "Home"){
                window.open('index.html','_self')
            }
            if(document.title == "Philosophy"){
                window.open('filosofia.html','_self')
            }
            if(document.title == "PlayEng"){
                window.open('play.html','_self')
            }
            if(document.title == "Contact"){
                window.open('contato.html','_self')
            }
        }
        
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
}
