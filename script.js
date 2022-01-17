$(document).ready(function(){
    $(window).scroll(function(){
        // // sticky navbar on scroll script
        // if(this.scrollY > 20){
        //     $('.navbar').addClass("sticky");
        // }else{
        //     $('.navbar').removeClass("sticky");
        // }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    // $('.scroll-up-btn').click(function(){
    //     $('html').animate({scrollTop: 0});
    //     // removing smooth scroll on slide-up button click
    //     $('html').css("scrollBehavior", "auto");
    // });

    $('.nav .nav-menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.nav-btn').click(function(){
        $('.nav .nav-menu').toggleClass("active");
        $('.nav-btn i').toggleClass("active");
    });

    // typing text animation script
    let typed = new Typed(".display", {
        strings: ["Software Engineer", "Full stack developer", "Freelancer", "GIS specialist"],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });


    // owl carousel script 
    // $('.carousel').owlCarousel({
    //     margin: 20,
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeOut: 2000,
    //     autoplayHoverPause: true,
    //     responsive: {
    //         0:{
    //             items: 1,
    //             nav: false
    //         },
    //         600:{
    //             items: 2,
    //             nav: false
    //         },
    //         1000:{
    //             items: 3,
    //             nav: false
    //         }
    //     }
    // });
});




var validations = {
    required: function(value){
      return value !== '';
    },
    email: function(value){
      return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
  }
  function validate() {
    var form = document.getElementById('form'),
        inputsArr = form.querySelectorAll('input'),
        errorMessage = document.querySelector(".ui.error.message"),
        successMessage = document.querySelector(".ui.success.message");
    
    form.addEventListener('submit', function(e){
      var i = 0;
      while (i < inputsArr.length) {
        var attr = inputsArr[i].getAttribute('data-validation'),
            rules = attr ? attr.split(' ') : '',
            parent = inputsArr[i].closest(".field"),
            j = 0;
        while (j < rules.length) {
          if(!validations[rules[j]](inputsArr[i].value)) {
            e.preventDefault();
            
            errorMessage.className = "ui error message";
            errorMessage.innerHTML = "Invalid rule '" + rules[j] + "' for input '" + inputsArr[i].name + "'";
            parent.className = "field error";
            return false;
          }
          errorMessage.className = "ui error message hidden";
          parent.className = "field";
          j++;
        }
        i++;
      }
      e.preventDefault();
      successMessage.className = "ui success message";
      form.outerHTML = "";
      delete form;
    }, false)
  }
  validate();
  