// This is where it all goes :)
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



function openFirstPanel(){
  $('.accordion > dt:first-child').next().addClass('active').slideDown();
}

(function($) {
    
  var allPanels = $('.accordion > dd').hide();
  
    
  $('.accordion > dt > a').click(function() {
      $this = $(this);
      $target =  $this.parent().next();
      
    
      if($target.hasClass('active')){
        $target.removeClass('active').slideUp(); 
      }else{
        allPanels.removeClass('active').slideUp();
        $target.addClass('active').slideDown();
      }
      
    return false;
  });

})(jQuery);




$click =  $('.expand');   // Click selector 
  $click.click(function () {
    
    $clicked = $(this);
    $expand = $(this).parent('.header').next();  // Expand and collapse content selector
    
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        $expand.slideToggle(500, function () {
            //execute this after slideToggle is done
            //change text of header based on visibility of content div
            $clicked.text(function () {
                //change text based on condition
                return $expand.is(":visible") ? "Collapse" : "Expand Feature";
            });
        });
    
    });





$click =  $('.grow');   // Click selector 
  $click.click(function () {
    
    $clicked = $(this);
    $expand = $(this).parent('.expander').next();  // Expand and collapse content selector
    
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        $expand.slideToggle(500, function () {
            //execute this after slideToggle is done
            //change text of header based on visibility of content div
            $clicked.text(function () {
                //change text based on condition
                return $expand.is(":visible") ? "Hide" : "Filters (2)";
            });
        });
    
    });


$(document).ready(function(){
  $(".single-item").slick({
    dots: true
  });
  $('.next').click(function(){
    $("#slider").slick('slickNext');
  });

});



$(document).ready(function(){
  $(".nct-intro").slick({
    dots: true,
  arrows: true,
  speed: 300,
  infinite: false
  });

});

$(document).ready(function(){
  $(".projects").slick({
    dots: true,
  arrows: true,
  speed: 300,
  infinite: false
  });

});

$(document).ready(function(){
  $(".prequit-carousel").slick({
    dots: true,
  arrows: true,
  speed: 300,
  infinite: false
  });

});

$(document).ready(function(){
  $(".setup-carousel").slick({
    dots: true,
  arrows: true,
  speed: 300,
  infinite: false
  });
  setTimeout(function(){
  $('.next').click(function(){
    $("#slider.setup-carousel").slick('slickNext');
  });
  $('.prev').click(function(){
    $("#slider.setup-carousel").slick('slickPrev');
  });
  },1000);
});



function popupOpenClose(popup) {
  
  /* Add div inside popup for layout if one doesn't exist */
  if ($(".wrapper").length == 0){
    $(popup).wrapInner("<div class='wrapper'></div>");
  }
  
  /* Open popup */
  $(popup).show();

  /* Close popup if user clicks on background */
  $(popup).click(function(e) {
    if ( e.target == this ) {
      if ($(popup).is(':visible')) {
        $(popup).hide();
      }
    }
  });

  /* Close popup and remove errors if user clicks on cancel or close buttons */
  $(popup).find("button[name=close]").on("click", function() {
    if ($(".formElementError").is(':visible')) {
      $(".formElementError").remove();
    }
    $(popup).hide();
  });
}

$(document).ready(function () {
  $("[data-js=open]").on("click", function() {
    popupOpenClose($(".popup"));
  });
});




function openNav() {
    document.getElementById("nav").style.left = "0";
}

function closeNav() {
    document.getElementById("nav").style.left = "-100%";
}

function openMilestone() {
    document.getElementById("milestone").style.top = "0";
}

function closeMilestone() {
    document.getElementById("milestone").style.top = "100vh";
}

function openMission() {
    document.getElementById("mission").style.top = "0";
}

function closeMission() {
    document.getElementById("mission").style.top = "100vh";
}

function openMood() {
    document.getElementById("mood").style.top = "0";
}

function closeMood() {
    document.getElementById("mood").style.top = "100vh";
}

function openDiary() {
    document.getElementById("diary").style.top = "0";
}

function closeDiary() {
    document.getElementById("diary").style.top = "100vh";
}

function openImage() {
    document.getElementById("image").style.top = "0";
}

function closeImage() {
    document.getElementById("image").style.top = "100vh";
}

function openSmoke() {
    document.getElementById("smoke").style.top = "0";
}

function closeSmoke() {
    document.getElementById("smoke").style.top = "100vh";
}

function openDiary() {
    document.getElementById("diary").style.top = "0";
}

function closeDiary() {
    document.getElementById("diary").style.top = "100vh";
}

function openProfile() {
    document.getElementById("profile").style.left = "0";
}

function closeProfile() {
    document.getElementById("profile").style.left = "100%";
}

function openQuitdate() {
    document.getElementById("quitdate").style.top = "0";
}

function closeQuitdate() {
    document.getElementById("quitdate").style.top = "100vh";
}

function openCosts() {
    document.getElementById("costs").style.top = "0";
}

function closeCosts() {
    document.getElementById("costs").style.top = "100vh";
}

function openType() {
    document.getElementById("type").style.top = "0";
}
function closeType() {
    document.getElementById("type").style.top = "100vh";
}

function openShare() {
    document.getElementById("share").style.top = "0";
}
function closeShare() {
    document.getElementById("share").style.top = "100vh";
}





function openFeatures() {
    document.getElementById("features").style.top = "0";
}
function closeFeatures() {
    document.getElementById("features").style.top = "100vh";
}

function openPrequit() {
    document.getElementById("prequit").style.top = "0";
}
function closePrequit() {
    document.getElementById("prequit").style.top = "100vh";
}

function openSetup() {
    document.getElementById("setup").style.top = "0";
}
function closeSetup() {
    document.getElementById("setup").style.top = "100vh";
}


