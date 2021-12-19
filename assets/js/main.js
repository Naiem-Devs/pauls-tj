(function($) {
  "use strict";
  
  window.addEventListener('load', (e) => {
    $('#promoModal').modal('show');
    // Checking the visitor
    let this_user_visited = localStorage.getItem('is_visited');
    if (this_user_visited == 'yes') {
        document.querySelector('body').classList.add('visited')
    }else{

        
        // ====== For Desktop ====

        // Find the clickable position 
        let toClick_desktop = document.querySelector('.desktop_view div#bmpui-id-8');
        if (toClick_desktop) {  // if that is avileable
            toClick_desktop.addEventListener('click', (e) => { // if clicked on that
                let getVideo = document.querySelector('.desktop_view video'); // finding the video
                const timeInterVal = setInterval(() => {// checking in each second the current time of the video
                    if (getVideo.currentTime >= 10) { // if the video current time is equal or over 10 second
                        console.log('it is over 10 second')
                        localStorage.setItem('is_visited', 'yes') // set the value as yes on localStorage of the browser
                        document.querySelector('body').classList.add('visited') // and add a class called "Visited" to do other tasks
                        clearInterval(timeInterVal) // and stop this interval
                    }
                }, 1000);
            })
        }


        // ====== For Mobile ====
        
        // Find the clickable position 
        let toClick_mobile = document.querySelector('.mobile_view div#bmpui-id-8');
        if (toClick_mobile) {  // if that is avileable
            toClick_mobile.addEventListener('click', (e) => { // if clicked on that
                let getVideo = document.querySelector('.mobile_view video'); // finding the video
                const timeInterVal = setInterval(() => {// checking in each second the current time of the video
                    if (getVideo.currentTime >= 10) { // if the video current time is equal or over 10 second
                        console.log('it is over 10 second')
                        localStorage.setItem('is_visited', 'yes') // set the value as yes on localStorage of the browser
                        document.querySelector('body').classList.add('visited') // and add a class called "Visited" to do other tasks
                        clearInterval(timeInterVal) // and stop this interval
                    }
                }, 1000);
            })
        }
    }
  })

 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  });

  // View more
  $('.more').click(function () {
    $('.rl_blk').toggleClass('show')
  })

  // Slider
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });

  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  }); 

 
})(jQuery);
