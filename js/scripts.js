//Google fonts
WebFontConfig = {
  google: { families: [ 'PT+Sans:400,400italic,700:latin', 'Lato:400,700:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();


//Carousel
function large_jcarousel_initCallback(carousel) {
  jQuery("#slider-large").on('click', 'li', function() {
    carousel.scroll(jQuery.jcarousel.intval(jQuery("#slider-large li").index(this) + 1));
    large_jcarousel_Current(carousel);
    return false;
  });

  carousel.clip.hover(function() {
    carousel.stopAuto();
  }, function() {
    carousel.startAuto();
  });

  $("#slider-large").hover(function() {
    carousel.stopAuto();
  }, function() {
    carousel.startAuto();
  });

  $('.slider-controll-container').on('click', '.next', function() {
    carousel.next();
    return false;
  });
  $('.slider-controll-container').on('click', '.prev', function() {
    carousel.prev();
    return false;
  }); 

};

function large_jcarousel_Current (carousel) {
  $("#slider-large li.current").removeClass("current");
  $("#slider-large li").eq(carousel.last - 1).addClass("current");
};


//Simple carousel
(function($) {
  var defaults = {
    container: '.sl',
    itemContainer: '.sl-text',
    item: '.sl-i',
    buttonPrev: '.sl-text-prev',
    buttonNext: '.sl-text-next'
  };

  $.fn.simpleCarousel = function(params){

    var options = $.extend({}, defaults, params);

    return this.each(function(i) {

      var $container = $(options.container).eq(i);
      var $itemContainer = $container.find(options.itemContainer);
      var $item = $container.find(options.item);
      var $buttonPrev = $container.find(options.buttonPrev);
      var $buttonNext = $container.find(options.buttonNext);
      var itemLength = $item.length;

      if ( itemLength == 0 ){
        $container.addClass('noDisplay');
      }

      if ( itemLength == 1 ){
        $buttonPrev.addClass('noDisplay');
        $buttonNext.addClass('noDisplay');
      }      

      $container.attr('unselectable', 'on')
                .css('user-select', 'none')
                .on('selectstart', false);

      if ( $item.first().not(".current") ){
        //$item.first().addClass("current").css('display', 'block');
        $item.first().addClass("current");
      }

      $buttonNext.click(function() {
        var currentIndex = $itemContainer.find(".current").index();
        if( currentIndex != itemLength-1 ){
          currentIndex++;
        } else{
          currentIndex = 0;
        }
        /*$item.removeClass('current').fadeOut(1000)
              .eq(currentIndex).addClass("current").fadeIn(1000);*/
        $item.removeClass('current').eq(currentIndex).addClass("current");
      });

      $buttonPrev.click(function() {
        var currentIndex = $itemContainer.find(".current").index();
        if( currentIndex != 0 ){
          currentIndex--;
        } else{
          currentIndex = itemLength-1;
        }
        /*$item.removeClass('current').fadeOut(1000)
              .eq(currentIndex).addClass("current").fadeIn(1000);*/
        $item.removeClass('current').eq(currentIndex).addClass("current");
      });

      /*var timer = setInterval(function(){
        $buttonNext.trigger('click');
      }, 5000);*/
    
    });

  };
})(jQuery);


/*----------------------------Google map*/
function initialize() {
  var styles = [
    {
      stylers: [
        { lightness: 5 },
        { saturation: -13 },
        { hue: "#ffef98" }
      ]
    }
  ];

  var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

  var myOptions = {
    zoom: 17,
    scrollwheel: false,
    center: new google.maps.LatLng(49.701494,5.964111),
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeId: [google.maps.MapTypeId.ROADMAP, 'map_style'],
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.BOTTOM_CENTER
    },
    panControl: true,
    panControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.LEFT_CENTER
    },
    scaleControl: false,
    scaleControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT
    },
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    }
  }
  
  var map = new google.maps.Map(document.getElementById("GMapContainer"), myOptions);

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(49.701494,5.964111),
    map: map,
    icon: 'images/img-gmap-marker.png',
    title:"г. Донецк, Куйбышевский район, ул. Умова 1ц"
  });

  var contentString = 
    '<div id="map-marker-content">'+
      '<div id="siteNotice">' + '</div>'+
      '<h4 id="firstHeading" class="firstHeading">Unison</h4>'+
      '<span>г. Донецк, Куйбышевский район, ул. Умова 1ц'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var flightPlanCoordinates = [];


  var flightPath2 = new google.maps.Polyline({
    path: flightPlanCoordinates,
    strokeColor: '#5F920B',
    strokeOpacity: 0.6,
    strokeWeight: 24,
    clickable: true
  });

  flightPath2.setMap(map);

  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    strokeColor: '#ffffff',
    strokeOpacity: 0.4,
    strokeWeight: 14,
    clickable: true
  });

  flightPath.setMap(map);
}
/*---------------------------/Google map*/


/*--------------------------- forward to downloading content*/
(function($, undefined){
  $(function(){
    if(document.getElementById('GMapContainer') != undefined) { window.onload = initialize; }
  });
})(jQuery);
/*--------------------------- /forward to downloading content*/


//document.ready function
(function($, undefined) {
  $(function() {

    /* script */
    /*lang-menu*/
    $('#lang').on('click', 'a', function(){
      if( $(this).hasClass("active") ) return false;
      $(this).closest('#lang').find('a').removeClass("active").end().end().addClass("active");
      return false;
    });


    //large carousel init
    $('#jcarousel-large').jcarousel({
      auto: 3,
      scroll: 1,
      buttonNextHTML: null,
      buttonPrevHTML: null,
      wrap: 'last',
      itemLoadCallback: {
        onBeforeAnimation: large_jcarousel_Current
      },
      initCallback: large_jcarousel_initCallback
    });

    //small carousel init
    $('#jcarousel-small').jcarousel({
        scroll: 1
    });

    //small-content carousel init
    $('#jcarousel-content').jcarousel({
        scroll: 1
    });

    //text simple carousel init
    $(".sl").simpleCarousel();

    //fancyBox for Google Map
    $("a.fancy-map").fancybox({
      padding             : 0,
      closeClick          : false,
      openEffect          : 'none',
      closeEffect         : 'none',
      nextEffect          : 'none',
      prevEffect          : 'none',
      closeBtn            : true,
      openSpeed           : 0,
      closeSpeed          : 0,
      nextSpeed           : 0,
      prevSpeed           : 0,
      titleShow           : true,
      hideOnContentClick  : false, // so you can handle the map
      autoDimensions      : true, // the selector #mapcontainer HAS css width and height
      beforeShow          : function(){
        //fix to show google map in fancyfox
       $(window).trigger('load');
      }
    }); 

  });
})(jQuery);