$(document).ready(function(){
    $(window).scroll(function(){       
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
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
});

  