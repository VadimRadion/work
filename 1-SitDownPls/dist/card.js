"use strict";var burger=document.querySelector(".burger"),menu=document.querySelector(".header__nav"),menulinks=document.querySelector(".header__center-reference"),menuLinks=menu.querySelectorAll(".header__center-item");burger.addEventListener("click",(function(){burger.classList.toggle("burger--active"),menu.classList.toggle("header__nav--active"),document.body.classList.toggle("stop-scroll")})),menuLinks.forEach((function(e){e.addEventListener("click",(function(){burger.classList.remove("burger--active"),menu.classList.remove("header__nav--active"),document.body.classList.remove("stop-scroll")}))}));var element=document.querySelector("#select"),choices=new Choices(element,{searchEnabled:!1,shouldSort:!1,placeholder:!0,allowHTML:!0}),select=document.querySelector("#select-form"),choices2=new Choices(select,{searchEnabled:!1,shouldSort:!1,placeholder:!0,allowHTML:!0}),picture=document.querySelector(".card__images-one"),block=document.querySelector(".card__block-swiper"),button=document.querySelector(".card__button-swiper"),bodyOpen=document.querySelector(".body-fon");picture.addEventListener("click",(function(){block.classList.add("card__block-swiper--active"),document.body.classList.add("stop-scroll"),bodyOpen.classList.add("body-fon--active")})),button.addEventListener("click",(function(){block.classList.remove("card__block-swiper--active"),document.body.classList.remove("stop-scroll"),bodyOpen.classList.remove("body-fon--active")}));var swiper=new Swiper(".mySwiper",{spaceBetween:78,slidesPerView:"auto",slidesPerGroup:4,freeMode:!0,watchSlidesProgress:!0,loop:!1,navigation:{nextEl:".card-button-next",prevEl:".card-button-prev"},breakpoints:{320:{slidesPerView:1,slidesPerGroup:1},1022:{slidesPerView:"auto"},1026:{slidesPerView:3,slidesPerGroup:3},1250:{slidesPerView:"auto",slidesPerGroup:4}}}),swiper2=new Swiper(".mySwiper2",{spaceBetween:110,thumbs:{swiper:swiper}}),swiperProducts=new Swiper(".products__swiper",{slidesPerView:4,slidesPerGroup:4,spaceBetween:32,loop:!1,navigation:{prevEl:".products-button-prev",nextEl:".products-button-next"},breakpoints:{320:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},576:{slidesPerView:2,slidesPerGroup:2},768:{slidesPerView:2,slidesPerGroup:2},1024:{slidesPerView:3,slidesPerGroup:3},1250:{slidesPerView:4,slidesPerGroup:4}}}),selector=document.querySelector("input[type='tel']"),im=new Inputmask("+ 7 (999) 999 99 99");im.mask(selector),im.mask(selector),new JustValidate(".card__form",{colorWrong:"#FF6972",rules:{name:{required:!0,minLength:2,maxLength:30},tel:{required:!0,function:function(e,t){var r=selector.inputmask.unmaskedvalue();return Number(r)&&10===r.length}},email:{required:!0,email:!0}},messages:{tel:{required:"Недопустимый формат",function:"Недопустимый формат"},name:"Недопустимый формат"}});var feedback=document.querySelector(".card__freeback"),buttonSubmit=document.querySelector(".card__button-submit"),buttonOpen=document.querySelector(".card__button"),form=document.querySelector(".card__form"),feedbackModal=document.querySelector(".card__feedback"),buttonClose=document.querySelector(".card__form-button"),buttonFeedbackClose=document.querySelector(".card__feedback-button");buttonOpen.addEventListener("click",(function(){form.classList.add("card__form--active"),document.body.classList.add("stop-scroll"),bodyOpen.classList.add("body-fon--active")})),buttonClose.addEventListener("click",(function(){bodyOpen.classList.remove("body-fon--active"),form.classList.remove("card__form--active"),document.body.classList.remove("stop-scroll")})),buttonSubmit.addEventListener("click",(function(){feedback.classList.add("card__feedback--active"),form.classList.remove("card__form--active"),document.body.classList.add("stop-scroll")})),buttonFeedbackClose.addEventListener("click",(function(){feedback.classList.remove("card__feedback--active"),bodyOpen.classList.remove("body-fon--active"),document.body.classList.remove("stop-scroll")}));