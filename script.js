//primer carrusel
var swiper = new Swiper (".mySwiper-1",{
   slidesPerView:1,
   spaceBetween: 20,
   loop:true,
   pagination:{
    el:".swiper-pagination",
    clickable:false,
   } ,
   navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
   },
   autoplay: {
    delay: 3000, // El carrusel se moverá automáticamente cada 2 segundos (2000 milisegundos)
    disableOnInteraction: false, // Continúa el autoplay después de la interacción del usuario
    }
});
//segundo  carrusel
var swiper = new Swiper (".mySwiper-2",{
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,  
    loopFillGroupWithBlank:true,
    navigation:{
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView:1,
        },

        520: {
            slidesPerView:2,
        },

        950: {
            slidesPerView:3,
        }
    },
    autoplay: {
        delay: 2500, // El carrusel se moverá automáticamente cada 2 segundos (2000 milisegundos)
        disableOnInteraction: false, // Continúa el autoplay después de la interacción del usuario
        },
 });

 let tabInputs =  document.querySeñectprAll(".tabInput");

tabInputs.forEach(function(input){
    input.addEventListener('change', function(){
        let id = input.ariavaluemax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});

