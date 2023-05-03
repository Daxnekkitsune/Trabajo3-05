let incrementar = 0;
let show =document.querySelector('.show')
let contenedor =document.querySelector('.container')

document.addEventListener('click',(e)=>{
    console.log(e)

    if(e.target.matches('#Decrementar')){
        incrementar--;
        show.innerHTML = incrementar;
        contenedor.style.backgroundColor= `rgba(234,${245 + increment+20},237,0.9)`;
        document.getElementById("")
    }
})