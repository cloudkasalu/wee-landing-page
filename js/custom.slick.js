



$(document).ready(function(){
    $('.service-slider').slick({infinite: true,slidesToShow: 3,variableWidth: false,autoplay: true,autoplaySpeed: 2000,arrows: false,speed: 900,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1
        }
      }

    ]
    })})


    $(document).ready(function(){
      $('.testimony-slider').slick({infinite: true,slidesToShow: 3,variableWidth: false,autoplay: true,autoplaySpeed: 2000,arrows: false,speed: 900,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
      })})