

$(document).ready(function () {
   $('.slide-section').click(function (e) {123

       var linkHref = $(this).attr('href');

       $('html, body').animate({
          scrollTop :  $(linkHref).offset().top -50
       }, 1000);

       e.preventDefault();
   });
});