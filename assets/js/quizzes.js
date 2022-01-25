// Initialize and add the map
function initMap() {
  let options = {
    center: {
      lat: 53.3498,
      lng: -6.2603
    },
    zoom: 4
  }
  // The new map, centered at Dublin
  map = new google.maps.Map(document.getElementById("map"), options)


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

  //Add Markers and content to an Array

  let MarkerArray = [

    {
      location: {
        lat: 37.9922,
        lng: -1.1307
      },
      content: `<h2>Murcia City</h2><p>did you know that the</p>`
    }

    {
      location: {
        lat: 39.4699,
        lng: -0.3763,
      },
      content: `<h2>Murcia City</h2><p>did you know that the</p>`
    }






  
  
  ]



  for (let i = 0; i < MarkerArray.length; i++){
    addMarker(MarkerArray[i])
  }





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


  // addMarker({
  //   location: {
  //     lat: 37.9922,
  //     lng: -1.1307
  //   },
  //   content: `<h2>Murcia City</h2><p>did you know that the</p>`
  // });

  // addMarker({
  //   location: {
  //     lat: 39.4699,
  //     lng: -0.3763,
  //   },
  //   content: `<h2>Murcia City</h2><p>did you know that the</p>`
  // });















}