/**
 * Created by Administrator on 2018/1/23 0023.
 */
!function(){
    var view = document.querySelector('#mySlides')
    var controller = {
        view:null,
        swiper:null,
        swiperOptions:{
            loop: true,

            // If we need paginatison
            pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    },

        init:function(view){
            this.view = view
            this.initSwiper()
        },
        initSwiper:function(){
            this.swiper = new Swiper (
                this.view.querySelector('.swiper-container'),
                // Optional parameters
                this.swiperOptions
            )
        }
    }
    controller.init(view)
}.call()

