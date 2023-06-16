$(document).ready(function() {
  $('.carousel-1').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

// -------------------------------------

$(document).ready(function() {
  $('.carousel-2').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

// -----------------------------------------map

function initialize() {
  var center = new google.maps.LatLng(48.091534,15.5116439);

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var markers = [];
  for (var i = 0; i < 100; i++) {
    var dataPhoto = data.photos[i];
    var latLng = new google.maps.LatLng(dataPhoto.latitude, dataPhoto.longitude);
    var marker = new google.maps.Marker({
      position: latLng
    });
    marker.setMap(map);
  }
}
google.maps.event.addDomListener(window, 'load', initialize);