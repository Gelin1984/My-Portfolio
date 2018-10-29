// TWITTER
 !function(d,s,id) {
   var js,fjs=d.getElementsByTagName(s)[0],
   p=/^http:/.test(d.location)?'http':'https';if
   (!d.getElementById(id)){js=d.createElement(s);
   js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
   fjs.parentNode.insertBefore(js,fjs);}}(document, 'script',
   'twitter-wjs');

 //FACEBOOK
 //<div id="fb-root"></div> From Index.HTML
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

   // Google Maps API JavaScript  52.417054, -0.722433

  var map;
  var myLatlng;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 52.417054, lng: -0.722433 },
          zoom: 16
        }); 
  var iconBase = 'http://maps.google.com/mapfiles/ms/icons/';
  var marker = new google.maps.Marker({
            position: {lat: 52.417054 , lng: -0.722433 },
            map: map,
            icon: iconBase + 'blue-dot.png'
          });
        // Bouncy Blue Sign on Google
        marker.addListener('click', function () {
          marker.setAnimation(google.maps.Animation.BOUNCE);
          return false;
        });
      }

 //when document ready
  $(document).ready(function(){


    //SMOOTH SCROLLING
    var $root = $('html, body');
    $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
    });

    //Stellar
    $(function(){
      $.stellar();
    });

    //Tooltips//
    $(function () {
      $('UK').tooltip();
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

    //Submit Button //
    $("#submit-button").on('click', function(){
      var comment = $('#message-box').val();
      if(comment === "") {
        $('#message-box').css("border", "2px solid red");
      } else {
        $('#visible-comment').html(comment);
        $('#message-box').hide();
      }
        return false;
    });

    // Textarea Character Count
    $('#message-box').on("keyup", function() {
      console.log("keyup happened");

      //here we make sure we're catching the keyup
      var charCount = $("#message-box").val().length; //here we set the length of the content of the textarea to a variable
      $("#char-count").html(charCount); //here we show a running character count to the user

      if(charCount > 50) {
         $("#char-count").css("color", "red");
       } else {
         $("#char-count").css("color", "white");
       };
     }) 

    // work section
    for(var i = 0; i < works.length; ++i ) {
      $("#work").append("\
       <div class='col-xs-12 col-sm-6 col-md-3 image'>\
        <a href='" + works[i].url + "' class='work-img'>\
          <img class='image-responsive' src='" + works[i].pic + "'>\
          <span class='info'>" + works[i].title + "</span>\
        </a>\
      </div>\
      ");
      var images = $("#work img");
      if(i%2 === 0){
        $(images[i]).css("border", "2px solid DodgerBlue");
      } else {
        $(images[i]).css("border", "2px solid salmon");
      };
    }


      $(".work-img").mouseenter( function() {
        $(".info", this).show();
      }).mouseleave( function () {
        $(".info", this).hide();
      });

    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 52.53762, lng: 13.39597},
     zoom: 8
      });
    }
$(document).ready(function(){
  $(".container").on("mouseover",'.social', function(){ 
    
    $(this).closest('.social').addClass('bigger');
    $(this).next('.social').addClass('medium');
    $(this).next('.social').next('.social').addClass('smaller');
    $(this).prev('.social').addClass('medium');
    $(this).prev('.social').prev('.social').addClass('smaller');
    
  }); 
  
  $(".container").on("mouseout",'.social',function(){
    
    $(this).closest('.social').removeClass('bigger');
    $(this).next('.social').removeClass('medium');
    $(this).next('.social').next('.social').removeClass('smaller');
    $(this).prev('.social').removeClass('medium');
    $(this).prev('.social').prev('.social').removeClass('smaller');
  
  }); 
  
});
});