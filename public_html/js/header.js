$(document).ready(function(){
    //get the html path to determine wich page is active
   var sPath = window.location.pathname;
   var sPage = sPath.substring(sPath.lastIndexOf('/') + 1, sPath.lastIndexOf('.'));
   
   if(sPage == 'contact'){ 
       $('#contact_us').addClass('active');
   } 
   
   $('#solutions_nav').mouseover(function(){ 
      $('#solutions_subnav').show(); 
   });
   
   $('#solutions_nav').mouseout(function(){ 
      $('#solutions_subnav').hide(); 
   });
   
});


