$(document).ready(function(){
  
  // map
  
  var latlng = new google.maps.LatLng(42.280841,-83.748575);
  var myOptions = {
    zoom: 16,
    scaleControl: false,
    navigationControl: false,
    mapTypeControl: false,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  var workantile = new google.maps.Marker({
      position: latlng,
      map: map
  });
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map_canvas");
    
  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
  } 
  
  $('.photos').nivoSlider({
    effect:'fade'
  });
  
  //$(".scroll_to_workflow").click(function() {$.scrollTo($("#workflow").position().top+30, 300)});
  // $('.i-want-to-belong').click(function(){
  //   $.scrollTo('#join-us', {
  //     duration: 500
  //   });
  //   return false;
  // });
});