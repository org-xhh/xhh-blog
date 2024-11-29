### swiper3.4.2

```
// 引入
let Swiper = ''
if (!process.server) {
  Swiper = require('swiper')
}
import 'swiper/dist/css/swiper.min.css'

// 实例化
new Swiper('#supplierSwiper', {
    direction: 'horizontal',
    slidesPerView: 3, // 默认显示几张图
    centeredSlides: true, // 中间显示第一个
    spaceBetween: 21,
    grabCursor: true,
    autoplay: 3000,
    autoplayDisableOnInteraction: false, // grab移开可以继续轮播
    loop: true,
    loopAdditionalSlides: 1, // 不补的话左滑有空白
    // initialSlide: 1,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    pagination: '.swiper-pagination',
    onClick: (swiper, event) => {
        // 触发点击事件
        let slideIndex = parseInt(swiper.clickedSlide && swiper.clickedSlide.dataset.swiperSlideIndex)

        consolelog(this.list[slideIndex])
    }
})

// dom
<div id="supplierSwiper" class="swiper-container">
    <ul class="swiper-wrapper">
        <li
            v-for="item in list"
            :key="item.id"
            class="swiper-slide"
            >
            {{ item.title }}
        </li>
    </ul>
    <div class="swiper-button-prev" />
    <div class="swiper-button-next" />
    <div class="swiper-pagination" />
    </div>
</div>

// 中间大两边小
.swiper-slide-next {
    transform: scale(0.9);
}
.swiper-slide-prev {
    transform: scale(0.9);
}
```

效果图：

![alt text](swiper.jpg)

### swiper7.4.1
```
// 引入
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper'
Swiper.use([Autoplay, Navigation, Pagination])
import 'swiper/swiper-bundle.min.css'

// 实例化
new Swiper('#supplierSwiper', {
    direction: 'horizontal',
    slidesPerView: 3, // 默认显示几张图
    centeredSlides: true, // 中间显示第一个
    spaceBetween: 21,
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    loop: true,
    // loopAdditionalSlides: 1, // 不补的话左滑有空白
    // initialSlide: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    on: {
        click: function(swiper) {
            console.log('你点了Swiper', swiper.clickedSlide && swiper.clickedSlide.dataset.swiperSlideIndex)
        }
    }
})

Swiper默认容器由.swiper-container改为.swiper
```