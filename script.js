$(document).ready(function(){
    $(window).scroll(function(){       
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.nav .nav-menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
    $('.nav-btn').click(function(){
        $('.nav .nav-menu').toggleClass("active");
        $('.nav-btn i').toggleClass("active");
    });
    let typed = new Typed(".display", {
        strings: ["Software Engineer", "Full stack developer", "Freelancer", "GIS specialist"],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });    
});

  