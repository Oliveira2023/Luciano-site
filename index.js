let menuEl = document.getElementById("menu-principal")
let lang = document.querySelector("#lang")
let galeryBoton = document.getElementById("galeryboton")
let baloes = document.querySelector('#baloes')
let vale = document.querySelector('#vale')
let rio = document.querySelector('#rio')
let cassete = document.querySelector('#cassete')
let btnSend = document.querySelector('#send')
let js = document.getElementById('js')

window.onload = ()=>{
    js.innerHTML = 'JS'
}

let options= {
    root: null,
    rootMargin: '0px',
    threshold: .5,
}

let observer = new IntersectionObserver(callback, options)

// let target = document.querySelector('#habilidades')
// observer.observe(target)

let target = document.querySelectorAll('.barra')
// let target = document.querySelectorAll('.tec') 
target.forEach(element => {
    observer.observe(element)
})

function callback(entries){
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
            if (entry.isIntersecting) observer.unobserve(entry.target)
        }else{
            entry.target.classList.remove('show')
        }
    })
}
let options2 = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
}
// let alvo = document.querySelector('#experiencia')
// let target3 = document.querySelectorAll('.comp-iqqj6loz')

let alvo = document.querySelectorAll('.comp-iqqj6loz')

let observer2 = new IntersectionObserver(callback2, options2)
alvo.forEach(element => {
    observer2.observe(element)
})
// observer2.observe(alvo)


function callback2(entries){
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('line-efect')
            // target3.forEach(element => {
            //     element.classList.add('line-efect')
                if (entry.isIntersecting) observer2.unobserve(entry.target)
            // });
        }else{
            // entry.target.classList.remove('')
            // target3.forEach(element => {
                // element.classList.remove('line-efect')
            // })
        }
    })
}

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

