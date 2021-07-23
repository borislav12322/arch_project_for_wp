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



