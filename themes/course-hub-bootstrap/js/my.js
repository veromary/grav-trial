$(document).ready(function(){
   $("a.newwindow").attr("target","_blank");
   $("a.topwindow").attr("target","_top");

  $('.container').on('click', 'a:not(.external-link):not([href^="#"])', function(e){
      e.preventDefault();
      var url  = window.location.href;
      var newurl = $(this).attr('href');

      if (url.indexOf("chromeless:true") >= 0) {
          newurl = newurl + "/chromeless:true";
      }

      if (url.indexOf("hidepagetitle:true") >= 0) {
          newurl = newurl + "/hidepagetitle:true";
      }

      window.location.href = newurl;
  });
});
