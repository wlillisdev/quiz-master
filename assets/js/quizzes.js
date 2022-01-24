// Initialize and add the map
function initMap() {
  // // The location of Dublin
  // const dublin = {
  //   lat: 53.3498,
  //   lng: -6.2603
  // };

  let options = {
    center: {
      lat: 53.3498,
      lng: -6.2603
    },
    zoom: 2
  }
  // The new map, centered at Dublin
  map = new google.maps.Map(document.getElementById("map"), options)
  // // The marker, positioned at Dublin
  // let marker = new google.maps.Marker({
  //   position: dublin,
  //   map: map,
  // });

  // //InfoWindow
  // const detailWindow = new google.maps.InfoWindow({
  //   content: `<h3>Dublin</h3><p>Did you know that</p>`
  // });

  // marker.addListener("mouseover", () => {
  //   detailWindow.open(map, marker);
  // })

  // function addMarker(property) {

  //   const marker = new google.maps.Marker({
  //     position: property.location,
  //     map: map,
  //     //icon: property.imageIcon
  //   });

  // const marker = new google.maps.Marker({
  //   position: {
  //     lat: 37.9922,
  //     lng: -1.1307
  //   },
  //   map: map,
  // });

  // //InfoWindow
  // const detailWindow = new google.maps.InfoWindow({
  //   content: `<h2>Murcia City</h2>`
  // });
  // marker.addListener("mouseover", () => {
  //   detailWindow.open(map, marker);
  // })

  function addMarker(property) {

    const marker = new google.maps.Marker({
      position: property.location,
      map: map,

    });
    if (property.content) {

      const detailWindow = new google.maps.InfoWindow({
        content: property.content
      });

      marker.addListener("mouseover", () => {
        detailWindow.open(map, marker);
      })
    }
  }


  addMarker({
    location: {
      lat: 37.9922,
      lng: -1.1307
    },
    content: `<h2>Murcia City</h2><p>did you know that the</p>`
  });

  addMarker({
    location: {
      lat: 39.4699,
      lng: -0.3763,
    },
    content: `<h2>Murcia City</h2><p>did you know that the</p>`
  });















}