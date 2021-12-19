(function($) {
  "use strict";

  // Load the page and then do rest of the work 
  window.addEventListener('load', (e) => {
    // scroll Down
    function ScrollDown() {
        setTimeout(() => {
            let scrollDown = document.querySelector('.package-area').offsetTop;
            window.scroll({
                top: scrollDown,
                left: 0,
                behavior: 'smooth'
            }); 
        }, 100);
    }

    // Video Functions
    function VideoFunction(device,second) {
        const timeInterVal = setInterval(() => {
            let getVideo = document.querySelector(device+' video');
            if (getVideo.muted !== true) {
                console.log(getVideo.currentTime)
                if (getVideo.currentTime >= second) { // if the video current time is equal or over 10 second 
                    localStorage.setItem('is_visited', 'yes') // set the value as yes on localStorage of the browser
                    document.querySelector('body').classList.add('visited') // and add a class called "Visited" to do other tasks
                    console.log('working')
                    clearInterval(timeInterVal) // and stop this interval
                    ScrollDown()
                }
            }
        }, 2000);
    }
 
    // View more
    $('.more').click(function () {
        $('.rl_blk').toggleClass('show')
    })
   
    // Load Pupup on page load
    $('#promoModal').modal('show');

    // Checking the visitor
    let this_user_visited = localStorage.getItem('is_visited');
    if (this_user_visited == 'yes') {
        document.querySelector('body').classList.add('visited')
    }else{ 
          
        let mediaQue = window.matchMedia("(max-width:844px)");
        if (mediaQue.matches) {
            // ====== For Mobile ==== 
            VideoFunction('.mobile_view ',10)
        }else{
            // ====== For Desktop ==== 
            VideoFunction('.desktop_view ',10)
        }
        
    }
 
})
  
 
})(jQuery);
