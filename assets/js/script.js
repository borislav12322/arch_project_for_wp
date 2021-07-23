const loginBtn = document.querySelector('.header__btn-signin');

loginBtn.addEventListener('click', (e) =>{
    const loginPopup = document.querySelector('.form-login');
    const closeBtn = document.getElementById('btnFormClose');
    loginPopup.classList.add('active');
    closeBtn.addEventListener('click',() =>{
        loginPopup.classList.remove('active');
        e.preventDefault()
    })
    e.preventDefault()
})
const signUpBtn = document.querySelector('.header__btn-signup');

signUpBtn.addEventListener('click', (e) =>{
    const loginPopup = document.querySelector('.form-signup');
    const closeBtn = document.getElementById('btnFormCloseRegister');
    loginPopup.classList.add('active');
    closeBtn.addEventListener('click',() =>{
        loginPopup.classList.remove('active');
        e.preventDefault()
    })
    e.preventDefault()
})

gsap.registerPlugin(ScrollTrigger);

const imgsScroll = gsap.timeline({
    scrollTrigger:{
        trigger: ".gallery__title",
        start: "center bottom",
        end: "center top",
        scrub: true,
    }
})



const scrollTriggerImg = () =>{
    imgsScroll.from('.gallery__link',{
        duration: 4,
    scale: 0.5, 
    opacity: 0, 
    delay: 3, 
    stagger: 0.2,
    ease: "elastic", 
    force3D: true
    })
}

const rowsScroll = gsap.timeline({
    scrollTrigger:{
        trigger: "#triggerBox",
        start: "center bottom",
        end: "center top",
        scrub: true,
    }
})

const scrollTriggerRows = () =>{
    rowsScroll.from('.about__box',{
    duration: 4,
    x: 0,
    opacity: 0, 
    delay: 3, 
    stagger: 0.2,
    ease: "elastic", 
    force3D: true
    })
}

scrollTriggerImg();
scrollTriggerRows();

gsap.registerPlugin(ScrollToPlugin);



document.querySelectorAll(".nav__link").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index + 1)}});
    });
  });

document.querySelector('.footer__logo').addEventListener('click', () =>{
    gsap.to(window, {duration: 1, scrollTo:{
        y:'.header'
    }})
})








        
        $(document).ready(function () {
            $('.slider').slick();
        });
    

    
        $(document).ready(function () {
            $('.gallery__photos').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function (item) {
                        return item.el.attr('title');
                    }
                }
            });
        });
    

    
        $(document).ready(function () {
            $('.header__btn-burger').click(function (event) {
                $('.header__btn-burger, .header__mobile-menu, .mobile-menu').toggleClass('active');
                $('body').toggleClass('lock');
            });
        });
    





