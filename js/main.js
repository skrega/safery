$(function(){

    $('select, input[type="file"]').styler({

    });

    $("#user-rate").rateYo({
        rating: 4,
        starWidth: "15px",
        normalFill: "#C4C4C4",
        ratedFill: "#FABB6F",
        readOnly: true
    });

    $(".confirmation-success__rate").rateYo({
        rating: 2,
        starWidth: "23px",
        normalFill: "#C4C4C4",
        ratedFill: "#FABB6F",
    });
    
    // $("#profile-partner__rate").rateYo({
    //     rating: 4,
    //     starWidth: "15px",
    //     normalFill: "#C4C4C4",
    //     ratedFill: "#FABB6F",
    //     readOnly: true
    // });
    $(".rate-star").rateYo({
        rating: 4,
        starWidth: "15px",
        normalFill: "#C4C4C4",
        ratedFill: "#FABB6F",
        readOnly: true
    });
   
    $(".profile-partner__rate").rateYo({
        rating: 4,
        starWidth: "23px",
        normalFill: "#C4C4C4",
        ratedFill: "#FABB6F",
        readOnly: true
    });
    

    $('.profile__tabs .tab, .profile-partner__tab, .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.profile__tabs, .profile-partner__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.profile__tabs .tabs, .profile-partner__tab, .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.profile__navigatin-box').hover(
        function() {
            $(this).find('a').addClass('visible');
        },
        function() {
            $(this).find('a').removeClass('visible');
        }
    );

    $('.details-btn').on('click', function () {
        $('.profile__tab-descr, .profile__tab-info, .profile__tab-options').toggleClass('active');
    });

    $('.profile__output-label').click(function(){
        $('.profile__output-label').removeClass('active');
        $(this).addClass('active');
      });


    $('.header__btn-menu').on('click', function () {
        $('.header__box').toggleClass('active');
    });

    const arrOpts = [
        {},{},{},{},{},{},{},{},{},{},{}
    ];
    
    const items = document.querySelectorAll('.button__wrapper');
    items.forEach((el, pos) => {
        const bttn = el.querySelector('a.particles-button');
        const bttnBack = el.querySelector('a.action');
        
        let particlesOpts = arrOpts[pos];
        particlesOpts.complete = () => {
            if ( !buttonVisible ) {
                anime.remove(bttnBack);
                anime({
                    targets: bttnBack,
                    duration: 300,
                    easing: 'easeOutQuint',
                    opacity: 1,
                    scale: [0,1]
                });
                bttnBack.style.pointerEvents = 'auto';
            }
        };
        const particles = new Particles(bttn, particlesOpts);
        
        let buttonVisible = true;
        bttn.addEventListener('click', () => {
            if ( !particles.isAnimating() && buttonVisible ) {
                particles.disintegrate();
                buttonVisible = !buttonVisible;
            }
        });
        bttnBack.addEventListener('click', () => {
            if ( !particles.isAnimating() && !buttonVisible ) {
                anime.remove(bttnBack);
                anime({
                    targets: bttnBack,
                    duration: 300,
                    easing: 'easeOutQuint',
                    opacity: 0,
                    scale: 0
                });
                bttnBack.style.pointerEvents = 'none';

                particles.integrate({
                    duration: 800,
                    easing: 'easeOutSine'
                });
                buttonVisible = !buttonVisible;
            }
        });
    });
    
});




// $(function(){

//     $('select, input[type="file"], input[type="radio"]').styler({

//     });

//     $("#user-rate").rateYo({
//         rating: 4,
//         starWidth: "15px",
//         normalFill: "#C4C4C4",
//         ratedFill: "#FABB6F",
//         readOnly: true
//     });

//     $(".confirmation-success__rate").rateYo({
//         rating: 2,
//         starWidth: "15px",
//         normalFill: "#C4C4C4",
//         ratedFill: "#FABB6F",
//     });
    
//     $('.profile__tabs .tab, .settings__tabs, .tab').on('click', function (event) {
//         var id = $(this).attr('data-id');
//         $('.profile__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
//         $('.profile__tabs .tabs, .settings__tabs, .tabs').find('.tab').removeClass('active');
//         $(this).addClass('active');
//         $('#' + id).addClass('active-tab').fadeIn();
//         return false;
//     });

//     $('.profile__navigatin-box').hover(
//         function() {
//             $(this).find('a').addClass('visible');
//         },
//         function() {
//             $(this).find('a').removeClass('visible');
//         }
//     );

//     $('.profile__balance-btn').on('click', function () {
//         $('.profile__deal, .profile__tabs, .profile__tab-options').addClass('inactive');
//         $('.profile__output').addClass('active');
//     });


//     $('.header__btn-menu').on('click', function () {
//         $('.header__box').toggleClass('active');
//     });


//     $('.profile__output-label').click(function(){
//         $('.profile__output-label').removeClass('active');
//         $(this).addClass('active');
//       });

//     const arrOpts = [
//         {},{},{},{},{},{},{},{},{},{},{}
//     ];
    
//     const items = document.querySelectorAll('.button__wrapper');
//     items.forEach((el, pos) => {
//         const bttn = el.querySelector('a.particles-button');
//         const bttnBack = el.querySelector('a.action');
        
//         let particlesOpts = arrOpts[pos];
//         particlesOpts.complete = () => {
//             if ( !buttonVisible ) {
//                 anime.remove(bttnBack);
//                 anime({
//                     targets: bttnBack,
//                     duration: 300,
//                     easing: 'easeOutQuint',
//                     opacity: 1,
//                     scale: [0,1]
//                 });
//                 bttnBack.style.pointerEvents = 'auto';
//             }
//         };
//         const particles = new Particles(bttn, particlesOpts);
        
//         let buttonVisible = true;
//         bttn.addEventListener('click', () => {
//             if ( !particles.isAnimating() && buttonVisible ) {
//                 particles.disintegrate();
//                 buttonVisible = !buttonVisible;
//             }
//         });
//         bttnBack.addEventListener('click', () => {
//             if ( !particles.isAnimating() && !buttonVisible ) {
//                 anime.remove(bttnBack);
//                 anime({
//                     targets: bttnBack,
//                     duration: 300,
//                     easing: 'easeOutQuint',
//                     opacity: 0,
//                     scale: 0
//                 });
//                 bttnBack.style.pointerEvents = 'none';

//                 particles.integrate({
//                     duration: 800,
//                     easing: 'easeOutSine'
//                 });
//                 buttonVisible = !buttonVisible;
//             }
//         });
//     });
    
// });

