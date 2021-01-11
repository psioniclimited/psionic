$( document ).ready(function() {
    var productSlider = $('.my_slider').slick({
        centerMode: true,
        centerPadding: '0',
        draggable: false,
        dots: true,
        // autoplay: true,
        // autoplaySpeed:3000,
        slidesToShow: 5,
        speed: 1000,
        focusOnSelect: true,
        useTransform: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    // autoplay: true,
                    // autoplaySpeed:3000,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // autoplay: true,
                    // autoplaySpeed:3000,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    function setCssScaleProperty() {
        var slideNumber = $($('.product-slide.slick-center')[0]).attr('slide-number');

        if(slideNumber === '0') {
            var sliderContent01 = '12';
            var sliderContent02 = 'CLIENTS';
            var sliderContent03 = '4<sub> years</sub>';
            var sliderContent04 = 'LEGACY';
            var sliderContent05 = '4.5<sub>crore</sub>';
            var sliderContent06 = 'TK COLLECTED';


            $('.slide-content-left .slide-content-text01').html(sliderContent01);
            $('.slide-content-left .slide-content-text02').html(sliderContent02);
            $('.slide-content-middle .slide-content-text01').html(sliderContent03);
            $('.slide-content-middle .slide-content-text02').html(sliderContent04);
            $('.slide-content-right .slide-content-text01').html(sliderContent05);
            $('.slide-content-right .slide-content-text02').html(sliderContent06);

            $('.slide-text').removeClass( 'active0 active1 active2 active3 active-1 active-2');
            $('.slide-text').addClass( 'active0');

            $('.product-slide img').removeClass('center-activate close-center-activate01 close-center-activate-left02 close-center-activate-right02');

            $('.slide0 img').addClass('center-activate');

            $('.slide-1 img').addClass('close-center-activate01');
            $('.slide1 img').addClass('close-center-activate01');

            $('.slide-2 img').addClass('close-center-activate-left02');
            $('.slide2 img').addClass('close-center-activate-right02');
        }
        else if(slideNumber === '1') {

            var sliderContent01 = 'Digital';
            var sliderContent02 = 'MARKETING';
            var sliderContent03 = 'Brand';
            var sliderContent04 = 'CONSULTANCY';
            var sliderContent05 = '360';
            var sliderContent06 = 'DIGITAL SOLUTIONS';

            $('.slide-text').removeClass( 'active0 active1 active2 active3 active-1 active-2');
            $('.slide-text').addClass( 'active1');

            $('.slide-content-left .slide-content-text01').html(sliderContent01);
            $('.slide-content-left .slide-content-text02').html(sliderContent02);
            $('.slide-content-middle .slide-content-text01').html(sliderContent03);
            $('.slide-content-middle .slide-content-text02').html(sliderContent04);
            $('.slide-content-right .slide-content-text01').html(sliderContent05);
            $('.slide-content-right .slide-content-text02').html(sliderContent06);


            $('.product-slide img').removeClass('center-activate close-center-activate01 close-center-activate-left02 close-center-activate-right02');

            $('.slide1 img').addClass('center-activate');

            $('.slide0 img').addClass('close-center-activate01');
            $('.slide2 img').addClass('close-center-activate01');

            $('.slide-1 img').addClass('close-center-activate-left02');
            $('.slide3 img').addClass('close-center-activate-right02');
        }
        else if(slideNumber === '2') {
            var sliderContent01 = 'CAS';
            var sliderContent02 = 'INTEGRATION';
            var sliderContent03 = '4<sub> years</sub>';
            var sliderContent04 = 'LEGACY';
            var sliderContent05 = 'Customer';
            var sliderContent06 = 'MANAGEMENT';

            $('.slide-text').removeClass( 'active0 active1 active2 active3 active-1 active-2');
            $('.slide-text').addClass( 'active2');

            $('.slide-content-left .slide-content-text01').html(sliderContent01);
            $('.slide-content-left .slide-content-text02').html(sliderContent02);
            $('.slide-content-middle .slide-content-text01').html(sliderContent03);
            $('.slide-content-middle .slide-content-text02').html(sliderContent04);
            $('.slide-content-right .slide-content-text01').html(sliderContent05);
            $('.slide-content-right .slide-content-text02').html(sliderContent06);


            $('.product-slide img').removeClass('center-activate close-center-activate01 close-center-activate-left02 close-center-activate-right02');

            $('.slide2 img').addClass('center-activate');

            $('.slide1 img').addClass('close-center-activate01');
            $('.slide3 img').addClass('close-center-activate01');

            $('.slide0 img').addClass('close-center-activate-left02');
            $('.slide-2 img').addClass('close-center-activate-right02');
        }
        else if(slideNumber === '3') {

            var sliderContent01 = 'Payroll';
            var sliderContent02 = 'MANAGEMENT';
            var sliderContent03 = 'Cloud';
            var sliderContent04 = 'BASED';
            var sliderContent05 = 'Customized';
            var sliderContent06 = 'SOLUTION';

            $('.slide-text').removeClass( 'active0 active1 active2 active3 active-1 active-2');
            $('.slide-text').addClass( 'active3');

            $('.slide-content-left .slide-content-text01').html(sliderContent01);
            $('.slide-content-left .slide-content-text02').html(sliderContent02);
            $('.slide-content-middle .slide-content-text01').html(sliderContent03);
            $('.slide-content-middle .slide-content-text02').html(sliderContent04);
            $('.slide-content-right .slide-content-text01').html(sliderContent05);
            $('.slide-content-right .slide-content-text02').html(sliderContent06);


            $('.product-slide img').removeClass('center-activate close-center-activate01 close-center-activate-left02 close-center-activate-right02');

            $('.slide3 img').addClass('center-activate');

            $('.slide2 img').addClass('close-center-activate01');
            $('.slide-2 img').addClass('close-center-activate01');

            $('.slide1 img').addClass('close-center-activate-left02');
            $('.slide-1 img').addClass('close-center-activate-right02');
        }
        else if(slideNumber === '-1') {

            var sliderContent01 = 'Online';
            var sliderContent02 = 'STORE';
            var sliderContent03 = 'iOS & Android';
            var sliderContent04 = 'COMPATIBLE';
            var sliderContent05 = 'Inventory';
            var sliderContent06 = 'MANAGEMENT';

            $('.slide-text').removeClass( 'active0 active1 active2 active3 active-1 active-2');
            $('.slide-text').addClass( 'active-1');

            $('.slide-content-left .slide-content-text01').html(sliderContent01);
            $('.slide-content-left .slide-content-text02').html(sliderContent02);
            $('.slide-content-middle .slide-content-text01').html(sliderContent03);
            $('.slide-content-middle .slide-content-text02').html(sliderContent04);
            $('.slide-content-right .slide-content-text01').html(sliderContent05);
            $('.slide-content-right .slide-content-text02').html(sliderContent06);


            $('.product-slide img').removeClass('center-activate close-center-activate01 close-center-activate-left02 close-center-activate-right02');

            $('.slide-1 img').addClass('center-activate');

            $('.slide0 img').addClass('close-center-activate01');
            $('.slide-2 img').addClass('close-center-activate01');

            $('.slide3 img').addClass('close-center-activate-left02');
            $('.slide1 img').addClass('close-center-activate-right02');
        }
        else if(slideNumber === '-2') {

            var sliderContent01 = 'Demurrage';
            var sliderContent02 = 'CALCULATION';
            var sliderContent03 = 'Remote';
            var sliderContent04 = 'MANAGEMENT';
            var sliderContent05 = 'WTC';
            var sliderContent06 = 'RATES COMPLIANT';

            $('.slide-text').removeClass( 'active0 active1 active2 active3 active-1 active-2');
            $('.slide-text').addClass( 'active1');

            $('.slide-content-left .slide-content-text01').html(sliderContent01);
            $('.slide-content-left .slide-content-text02').html(sliderContent02);
            $('.slide-content-middle .slide-content-text01').html(sliderContent03);
            $('.slide-content-middle .slide-content-text02').html(sliderContent04);
            $('.slide-content-right .slide-content-text01').html(sliderContent05);
            $('.slide-content-right .slide-content-text02').html(sliderContent06);

            $('.product-slide img').removeClass('center-activate close-center-activate01 close-center-activate-left02 close-center-activate-right02');

            $('.slide-2 img').addClass('center-activate');

            $('.slide3 img').addClass('close-center-activate01');
            $('.slide-1 img').addClass('close-center-activate01');

            $('.slide2 img').addClass('close-center-activate-left02');
            $('.slide0 img').addClass('close-center-activate-right02');
        }
        // console.log(slideNumber);
    }

    setCssScaleProperty();

    $('.product-slide , .slick-arrow, .slick-dots li').click(function () {
        setCssScaleProperty();
    });

    $('.product-slide').on('swipe', function(slick, direction){
        setCssScaleProperty();
    });

    var pauseInterval = false;
    var autoLoopInterval = setInterval(function() {
        if(!pauseInterval) {
            $('.slick-next').trigger('click');
        }

    }, 5000);

    $( '.slider-wr' )
        .mouseover(function() {
            pauseInterval = true;
        })
        .mouseout(function() {
            pauseInterval = false;
        });
});