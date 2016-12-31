// CowHeberg and Hugo Hérisson Copyright 2016-2018



//jQuery is required to run this code

$( window ).scroll(function() {
  var scrollLocate = $(window).scrollTop();
  
  if(scrollLocate == 0){
    $( ".navbar" ).css({ "background-color": "black" });
  }else if(scrollLocate > 0){
    $( ".navbar" ).css({ "background-color": "red" });
  }
  
});
var animateBlack = $( ".navbar" ).animate({ "background-color": "black" }, "slow");
var animateClear = $( ".navbar" ).animate({ "background-color": "transparent" }, "slow");

// This part is the curation of videos for the main background
var myvid = document.getElementById('myvideo');
var myvids = [
  "http://goo.gl/c1skKR",
  "http://goo.gl/ejm9Dl"
];
var activeVideo = 0;

myvid.addEventListener('ended', function(e) {
  // update the active video index
  activeVideo = (++activeVideo) % myvids.length;

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
});

$(window).scroll(function() {
  var scrollLocation = $(window).scrollTop();

  if (scrollLocation <= 30) {
    $("nav").css({
      "background-color": "transparent"
    }, {
      "color": "white"
    });
    $("#brandName").css({
      "color": "white"
    });
    $(".navSelect").css({
      "color": "white"
    });
  } else if (scrollLocation > 30) {
    $(".navbar").css({
      "background-color": "rgba(255,255,255,0.9)"
    }, {
      "color": "black"
    });
    $("#brandName").css({
      "color": "black"
    });
    $("#myNavbar a").css({
      "color": "black"
    });
  }
});

$(document).ready(function() {
  
  /**** START OVERVIEW SECTION ****/
  /**** START OVERVIEW SECTION ****/
  $("#scheduleContent").hide();
  $("#receiveContent").hide();

  $("#scheduleButton").click(function() {
    $("#scheduleButton").addClass("active");
    $("#chooseButton").removeClass("active");
    $("#receiveButton").removeClass("active");
    $("#chooseContent").hide();
    $("#receiveContent").hide();
    $("#scheduleContent").show();
  });

  $("#chooseButton").click(function() {
    $("#chooseButton").addClass("active");
    $("#scheduleButton").removeClass("active");
    $("#receiveButton").removeClass("active");
    $("#scheduleContent").hide();
    $("#receiveContent").hide();
    $("#chooseContent").show();
  });

  $("#receiveButton").click(function() {
    $("#receiveButton").addClass("active");
    $("#chooseButton").removeClass("active");
    $("#scheduleButton").removeClass("active");
    $("#chooseContent").hide();
    $("#scheduleContent").hide();
    $("#receiveContent").show();
  });
  /**** END OVERVIEW SECTION ****/
  /**** END OVERVIEW SECTION ****/
    
   /**** START ABOUT SECTION ****/
  /****
 $("#vpn").hide();
 $("#cloud").hide();
 $("#web").show();
    
    $("#webButton").click(function(){
      $("#webButton").addClass("active");
      $("#vpnButton").removeClass("active");
      $("#cloudButton").removeClass("active");
      
      $("#web").show();
      $("#vpn").hide();
      $("#cloud").hide();
    });
    
     $("#vpnButton").click(function(){
      $("#vpnButton").addClass("active");
      $("#webButton").removeClass("active");
      $("#cloudButton").removeClass("active");
       
       
      $("#vpn").show();
      $("#cloud").hide();
      $("#web").hide();
    });
    
    $("#cloudButton").click(function(){
      $("#cloudButton").addClass("active");
      $("#webButton").removeClass("active");
      $("#vpnButton").removeClass("active");
      
      $("#cloud").show();
      $("#web").hide();
      $("#vpn").hide();
    });
   ****/
  /**** END ABOUT SECTION ****/

  scaleVideoContainer();

  initBannerVideoSize('.video-container .poster img');
  initBannerVideoSize('.video-container .filter');
  initBannerVideoSize('.video-container video');

  $(window).on('resize', function() {
    scaleVideoContainer();
    scaleBannerVideoSize('.video-container .poster img');
    scaleBannerVideoSize('.video-container .filter');
    scaleBannerVideoSize('.video-container video');
  });

});

function scaleVideoContainer() {

  var height = $(window).height() + 5;
  var unitHeight = parseInt(height) + 'px';
  $('.homepage-hero-module').css('height', unitHeight);

}

function initBannerVideoSize(element) {

  $(element).each(function() {
    $(this).data('height', $(this).height());
    $(this).data('width', $(this).width());
  });

  scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element) {

  var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

  console.log(windowHeight);

  $(element).each(function() {
    var videoAspectRatio = $(this).data('height') / $(this).data('width');

    $(this).width(windowWidth);

    if (windowWidth < 1000) {
      videoHeight = windowHeight;
      videoWidth = videoHeight / videoAspectRatio;
      $(this).css({
        'margin-top': 0,
        'margin-left': -(videoWidth - windowWidth) / 2 + 'px'
      });

      $(this).width(videoWidth).height(videoHeight);
    }

    $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

  });
}