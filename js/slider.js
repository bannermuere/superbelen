
new Glider (document.querySelector('.slider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '#resp-dots',
    arrows: {
        prev: '.sliderAnterior',
        next: '.slideSiguiente'
    },
    responsive: [{
        breakpoint: 775,
        settings: {
          slidesToShow: 'auto',
          slidesToScroll: 'auto',
          itemWidth: 150,
          duration: 0.25
        }
    },{
        breakpoint: 1024,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            itemWidth: 150,
            duration: 0.25
        }
    }]
});

