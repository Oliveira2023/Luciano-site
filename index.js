let menuEl = document.getElementById("menu-principal")
let lang = document.querySelector("#lang")
let btnSend = document.querySelector('#send')
const menu = document.querySelector('#menu-mobile')
let menuli = document.querySelectorAll('.menuli')
const body = document.querySelector('body')

menuli.forEach(element => {
    if (window.innerWidth <= 600) {
    element.addEventListener('click', () => {
        menu.style.display = "none"
    }
    )
    }else {
        menu.style.display = "flex"
    }
})
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

    // menuEl.classList.toggle('active')
    if (menu.style.display == "flex"){
        menu.style.display = "none"
    }else{
        menu.style.display = "flex"
        // body.classList.toggle('blurred')
        // menu.classList.toggle('blurred')
    }
}
lang.addEventListener('click', ()=>{

        if (lang.classList == 'EN'){
            
            window.open('index.html','_self')
            
        }else{
                window.open('indexEN.html','_self')
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

