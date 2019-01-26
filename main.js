$(document).ready(function(){
  $(".click").click(function(){
      $("#shadow").fadeIn(500);
      $(".container").fadeIn(500);
  });
});


$(".submitBtn , #shadow" ).click(function(){
 $( "#shadow").click(function(){
     $("#shadow").fadeOut(500);
     $(".container").fadeOut(500);
 });
});



