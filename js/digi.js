window.addEventListener("load", () => {
    let header = document.getElementById("header");
    let mina = document.getElementById("mina");
    console.log(mina);
    
    
    
    var swiper = new Swiper(".swiper-story", {
        slidesPerView: 1,
        spaceBetween: 2,
        pagination: {
            el: ".mySwiperbreakpoints",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 10,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 12,
                spaceBetween: 10,
            },
        },
    });
    var swiper = new Swiper(".swiper-main", {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
    var swiper = new Swiper(".swiper-germezo", {
        slidesPerView: 1,
        spaceBetween: 10,
        center:true,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
       /* pagination: {
            el: ".mySwiperbreakpoints",
            clickable: true,
        },
        */
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 7,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });
    var swiper = new Swiper(".catSwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        center:true,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
       /* pagination: {
            el: ".mySwiperbreakpoints",
            clickable: true,
        },
        */
        breakpoints: {
            640: {
                slidesPerView: 4,
                spaceBetween: 7,
            },
            768: {
                slidesPerView: 6,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 8,
                spaceBetween: 0,
            },
        },
    });
    var swiper = new Swiper(".shayansisi", {
        slidesPerView: 1,
        spaceBetween: 10,
        center:true,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
       /* pagination: {
            el: ".mySwiperbreakpoints",
            clickable: true,
        },
        */
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop:true,
        breakpoints: {
            640: {
                slidesPerView: 4,
                spaceBetween: 7,
            },
            768: {
                slidesPerView: 6,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 8,
                spaceBetween: 0,
            },
        },
    });
    var swiper = new Swiper(".alirezasisi", {
        slidesPerView: 1,
        spaceBetween: 10,
        center:true,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
       /* pagination: {
            el: ".mySwiperbreakpoints",
            clickable: true,
        },
        */
      /*  autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },*/
        loop:true,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 7,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        },
    });
    
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 250){
            console.log(window.scrollY);
            header.classList.add("scroll");
        }else{
            header.classList.remove("scroll");
        }
        if(window.scrollY > 450 && window.scrollY < 850){
            mina.classList.remove("germezo");
            mina.classList.add("sabzo");
        }else if(window.scrollY > 850){
            mina.classList.add("germezo");
            mina.classList.remove("sabzo");
        }else{
            mina.classList.add("germezo");
            mina.classList.remove("sabzo");
        }
        
    })
})