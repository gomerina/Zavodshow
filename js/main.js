AOS.init();var mainSlider=new Swiper(".main-block__slider",{spaceBetween:17,slidesPerView:1.866,slidesPerGroup:1,speed:800,centeredSlides:!0,initialSlide:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},breakpoints:{280:{slidesPerView:1.2},1024:{slidesPerView:1.866}}}),projectsGallery=new Swiper(".projects-gallery",{spaceBetween:20,slidesPerView:3,slidesPerGroup:3,speed:800,watchSlidesProgress:!0,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0}}),projectsSlider=new Swiper(".projects-slider",{spaceBetween:0,slidesPerView:1,slidesPerGroup:1,autoHeight:!0,loop:!0,speed:800,thumbs:{swiper:projectsGallery},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},breakpoints:{280:{slidesPerView:1,spaceBetween:14},767:{slidesPerView:1,spaceBetween:0}}}),modalSlider=new Swiper(".modal-slider",{spaceBetween:20,slidesPerView:4,slidesPerGroup:2,observeParents:!0,speed:800,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},breakpoints:{280:{slidesPerView:1.3,slidesPerGroup:1},500:{slidesPerView:2,slidesPerGroup:2},1024:{slidesPerView:3,slidesPerGroup:2},1250:{slidesPerView:4,slidesPerGroup:2}}}),placesSlider=new Swiper(".places-slider",{spaceBetween:90,slidesPerView:4.2,loop:!0,initialSlide:2,centeredSlides:!0,watchSlidesProgress:!0,speed:800,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},breakpoints:{280:{slidesPerView:2.4,spaceBetween:33},540:{slidesPerView:3.4,spaceBetween:33},767:{slidesPerView:3.4,spaceBetween:90},1024:{slidesPerView:4.2,spaceBetween:90}}}),gridSwiper=new Swiper(".places__images",{slidesPerView:1,initialSlide:2,loop:!1,spaceBetween:30,speed:800,autoHeight:!0,pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},thumbs:{swiper:placesSlider}}),videoGallery=new Swiper(".video-gallery",{spaceBetween:20,slidesPerView:3,speed:800,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0}}),videoSlider=new Swiper(".video-slider",{spaceBetween:0,slidesPerView:1,speed:800,thumbs:{swiper:videoGallery},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},breakpoints:{280:{slidesPerView:1.3,spaceBetween:14},470:{slidesPerView:2.3,spaceBetween:14},767:{slidesPerView:1,spaceBetween:0}}});function getYaMap(){var e=new ymaps.Map("map",{center:[55.764389,37.853991],zoom:14},{searchControlProvider:"yandex#search"}),t=(ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),new ymaps.Placemark(e.getCenter(),{},{iconLayout:"default#image",iconImageHref:"img/svg/marker.svg",iconImageSize:[25,33],iconImageOffset:[-5,-38]}));e.geoObjects.add(t),e.behaviors.disable("scrollZoom")}function mobileHeading(){window.innerWidth<=1290?$(".scene-heading").appendTo(".scene-mobile"):$(".scene-heading").appendTo(".hall__img-scene")}window.addEventListener("resize",(function(){mobileHeading(),mobileButtons()})),$(".services__head").click((function(){$(this).toggleClass("active"),$(this).next(".services-body").slideToggle(),$(this).next(".services-body").css("display","grid")})),$(".close-footer__info").click((function(){$(".footer__info").remove()})),$(".burger").click((function(){$(this).toggleClass("open")})),mobileHeading();let bg=document.querySelector(".presentation"),parallaxImg=document.querySelector(".presentation-img");function mobileButtons(){window.innerWidth<=374?$(".header__buttons a").appendTo(".mobile-buttons"):$(".mobile-buttons a").appendTo(".header__buttons")}window.addEventListener("mousemove",(function(e){let t=e.clientX/window.innerWidth,i=e.clientY/window.innerHeight;parallaxImg.style.transform="translate(-"+50*t+"px, -"+50*i+"px)",window.innerWidth<=1024&&(parallaxImg.style.transform="translate(0)")})),$('.anchor[href^="#"]').click((function(){let e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top-120},800),window.innerWidth<=1024&&($(".header-bottom").fadeOut(),$(".burger").removeClass("open"))})),window.addEventListener("DOMContentLoaded",(function(){[].forEach.call(document.querySelectorAll('input[type="tel"]'),(function(e){var t;function i(e){e.keyCode&&(t=e.keyCode),this.selectionStart<3&&e.preventDefault();var i="+7 (___) ___-__-__",s=0,a=i.replace(/\D/g,""),n=this.value.replace(/\D/g,""),o=i.replace(/[_\d]/g,(function(e){return s<n.length?n.charAt(s++)||a.charAt(s):e}));-1!=(s=o.indexOf("_"))&&(s<5&&(s=3),o=o.slice(0,s));var l=i.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(l=new RegExp("^"+l+"$")).test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=o),"blur"==e.type&&this.value.length<5&&(this.value="")}e.addEventListener("input",i,!1),e.addEventListener("focus",i,!1),e.addEventListener("blur",i,!1),e.addEventListener("keydown",i,!1)}))})),$('[data-fancybox=""]').fancybox({autoFocus:!1}),$(".gear-text.one").click((function(){$(".gear-text.two").hasClass("active")&&($(this).removeClass("active"),$(this).removeClass("move"),$(".gear-text.two").removeClass("active"),$(".gear-1__box").removeClass("active"),$(".gear-2__box").removeClass("active"),$(".gear-text.two").removeClass("move"),$(".gear-2__content").removeClass("active")),$(".gear-2__content").hasClass("active")&&($(".gear-2__content").hide(),$(".gear-1__content").show()),$(this).toggleClass("active"),$(this).toggleClass("move"),$(".gear-text.two").removeClass("active"),$(".gear-1__box").toggleClass("active"),$(".gear-2__box").toggleClass("active"),$(".gear-text.one").show(),$(".gear-text.two").toggleClass("move"),$(".gear-1__content").toggleClass("active")})),$(".gear-text.two").click((function(){$(".gear-text.one").hasClass("active")&&($(this).removeClass("active"),$(this).removeClass("move"),$(".gear-text.one").removeClass("move"),$(".gear-text.one").removeClass("active"),$(".gear-1__box").removeClass("active"),$(".gear-2__box").removeClass("active"),$(".gear-1__content").removeClass("active")),$(".gear-1__content").hasClass("active")&&($(".gear-1__content").hide(),$(".gear-2__content").show()),$(this).toggleClass("active"),$(this).toggleClass("move"),$(".gear-text.one").toggleClass("move"),$(".gear-text.one").removeClass("active"),$(".gear-1__box").toggleClass("active"),$(".gear-2__box").toggleClass("active"),$(".gear-2__content").toggleClass("active")})),$(".main-accordion__head").click((function(){$(this).toggleClass("active"),$(this).next(".main-accordion__body").slideToggle()})),$(".burger").click((function(){$(".header-bottom").fadeToggle(),$(".header-bottom").css("display","flex"),$(".header-bottom").css("flex-direction","column")})),mobileButtons(),$(".button-pink").click((function(){$(this).addClass("active")})),$(".button-white").click((function(){$(this).addClass("active")})),$(".button-transparent").click((function(){$(this).addClass("active")})),$(".contact-link").click((function(){$(this).addClass("active")}));