AOS.init();

var mainSlider = new Swiper(".main-block__slider", {
    spaceBetween: 17,
    slidesPerView: 1.866,
    slidesPerGroup: 1,
    speed: 800,
    centeredSlides: true,
    initialSlide: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    breakpoints: {
        280: {
            slidesPerView: 1.2,
        },
        1024: {
            slidesPerView: 1.866,
        },
    }
});
var projectsGallery = new Swiper(".projects-gallery", {
    spaceBetween: 20,
    slidesPerView: 3,
    slidesPerGroup: 3,
    speed: 800,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
});

var projectsSlider = new Swiper(".projects-slider", {
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoHeight: true,
    loop: true,
    speed: 800,
    thumbs: {
        swiper: projectsGallery,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 14,
        },

        767: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    }
});

var modalSlider = new Swiper(".modal-slider", {
    spaceBetween: 20,
    slidesPerView: 4,
    slidesPerGroup: 2,
    observeParents: true,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    breakpoints: {
        280: {
            slidesPerView: 1.3,
            slidesPerGroup: 1,
        },
        500: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 2,
        },
        1250: {
            slidesPerView: 4,
            slidesPerGroup: 2,
        },
    },
});
var placesSlider = new Swiper(".places-slider", {
    spaceBetween: 90,
    slidesPerView: 4.2,
    loop: true,
    initialSlide: 2,
    centeredSlides: true,
    watchSlidesProgress: true,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    breakpoints: {
        280: {
            slidesPerView: 2.4,
            spaceBetween: 33,
        },
        540: {
            slidesPerView: 3.4,
            spaceBetween: 33,
        },
        767: {
            slidesPerView: 3.4,
            spaceBetween: 90,
        },
        1024: {
            slidesPerView: 4.2,
            spaceBetween: 90,
        },
    },
});
var gridSwiper = new Swiper(".places__images", {
    slidesPerView: 1,
    initialSlide: 2,
    loop: false,
    spaceBetween: 30,
    speed: 800,
    autoHeight: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    thumbs: {
        swiper: placesSlider,
    },
    //breakpoints: {
    //    280: {
    //        slidesPerView: 1.2,
    //    },
    //    550: {
    //        slidesPerView: 2,
    //    },
    //    800: {
    //        slidesPerView: 3,
    //    },
    //    1024: {
    //        slidesPerView: 3,
    //    },
    //}
});
var videoGallery = new Swiper(".video-gallery", {
    spaceBetween: 20,
    slidesPerView: 3,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
});
var videoSlider = new Swiper(".video-slider", {
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 800,
    thumbs: {
        swiper: videoGallery,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    breakpoints: {
        280: {
            slidesPerView: 1.3,
            spaceBetween: 14,
        },
        470: {
            slidesPerView: 2.3,
            spaceBetween: 14,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    }

});

window.addEventListener('resize', function () {
    mobileHeading();
    mobileButtons();

})
// Аккордион услуги

$('.services__head').click(function () {
    $(this).toggleClass('active')
    $(this).next('.services-body').slideToggle();
    $(this).next('.services-body').css('display', 'grid');
})
// Карта
function getYaMap() {
    var myMap = new ymaps.Map('map', {
        center: [55.764389, 37.853991],
        zoom: 14
    }, {
        searchControlProvider: 'yandex#search'
    }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/svg/marker.svg',
            iconImageSize: [25, 33],
            iconImageOffset: [-5, -38]
        })
    myMap.geoObjects.add(myPlacemark)
    myMap.behaviors.disable('scrollZoom')
}
// Закрыть инофрмацию на карте
$('.close-footer__info').click(function () {
    $('.footer__info').remove();
})
$('.burger').click(function () {
    $(this).toggleClass('open');
});
// Перенос заголовка
function mobileHeading() {
    if (window.innerWidth <= 1290) {
        $('.scene-heading').appendTo('.scene-mobile')
    } else {
        $('.scene-heading').appendTo('.hall__img-scene')
    }
}
mobileHeading();

// Параллакс

let bg = document.querySelector('.presentation');
let parallaxImg = document.querySelector('.presentation-img');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    parallaxImg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    if (window.innerWidth <= 1024) {
        parallaxImg.style.transform = 'translate(0)';
    }
});

// Якорь
$('.anchor[href^="#"]').click(function () {
    let anchor = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(anchor).offset().top - 120
    }, 800);
    if (window.innerWidth <= 1024) {
        $('.header-bottom').fadeOut();
        $('.burger').removeClass('open');
    }
});
// Маска
window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('input[type="tel"]'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    });
});
// Убираем автофокус
$('[data-fancybox=""]').fancybox({
    autoFocus: false
});

// Двигаем шесетеренки
$('.gear-text.one').click(function () {
    if ($('.gear-text.two').hasClass('active')) {
        $(this).removeClass('active')
        $(this).removeClass('move')
        $('.gear-text.two').removeClass('active');
        $('.gear-1__box').removeClass('active')
        $('.gear-2__box').removeClass('active')
        $('.gear-text.two').removeClass('move')
        $('.gear-2__content').removeClass('active')
    }
    if ($('.gear-2__content').hasClass('active')) {
        $('.gear-2__content').hide();
        $('.gear-1__content').show();
    }
    $(this).toggleClass('active')
    $(this).toggleClass('move')
    $('.gear-text.two').removeClass('active');
    $('.gear-1__box').toggleClass('active')
    $('.gear-2__box').toggleClass('active')
    $('.gear-text.one').show();
    $('.gear-text.two').toggleClass('move')
    $('.gear-1__content').toggleClass('active')
})
$('.gear-text.two').click(function () {
    if ($('.gear-text.one').hasClass('active')) {
        $(this).removeClass('active')
        $(this).removeClass('move')
        $('.gear-text.one').removeClass('move')
        $('.gear-text.one').removeClass('active');
        $('.gear-1__box').removeClass('active')
        $('.gear-2__box').removeClass('active')
        $('.gear-1__content').removeClass('active')
    }
    if ($('.gear-1__content').hasClass('active')) {
        $('.gear-1__content').hide();
        $('.gear-2__content').show();
    }
    $(this).toggleClass('active')
    $(this).toggleClass('move')
    $('.gear-text.one').toggleClass('move')
    $('.gear-text.one').removeClass('active');
    $('.gear-1__box').toggleClass('active')
    $('.gear-2__box').toggleClass('active')
    $('.gear-2__content').toggleClass('active')
})

// Мобильный аккордион первый экран

$('.main-accordion__head').click(function () {
    $(this).toggleClass('active')
    $(this).next('.main-accordion__body').slideToggle();
})
// Моб меню 
$('.burger').click(function () {
    $('.header-bottom').fadeToggle();
    $('.header-bottom').css('display', 'flex');
    $('.header-bottom').css('flex-direction', 'column');
})

// Перенос кнопок в бургер
function mobileButtons() {
    if (window.innerWidth <= 374) {
        $('.header__buttons a').appendTo('.mobile-buttons')
    } else {
        $('.mobile-buttons a').appendTo('.header__buttons')
    }
}
mobileButtons();

$('.button-pink').click(function () {
    $(this).addClass('active');
})
$('.button-white').click(function () {
    $(this).addClass('active');
})
$('.button-transparent').click(function () {
    $(this).addClass('active');
})
$('.contact-link').click(function () {
    $(this).addClass('active');
})