// Initialize and add the map
function initMap() {
  // The location of Dublin
  const dublin = {
    lat: 53.3498,
    lng: -6.2603
  };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: dublin,
  });
  // The marker, positioned at Dublin
  let marker = new google.maps.Marker({
    position: dublin,
    map: map,
  });

  //InfoWindow
  const detailWindow = new google.maps.InfoWindow({
    content: `<h3>Dublin</h3><p>Did you know that</p>`
  });

  marker.addListener("mouseover", () => {
    detailWindow.open(map, marker);
  })


  // Add Marker
  function addMarker(property) {

    const marker = new google.maps.Marker({
      position: property.location,
      map: map,
      //icon: property.imageIcon
    });


  }










}