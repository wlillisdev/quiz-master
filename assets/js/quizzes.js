// Initialize and add the base google map
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
  
  //Add Markers and content to an Array

  let MarkerArray = [

    //Dublin fact
  {location:{lat: 53.3498, lng: -6.2603},content: `<h2>Dublin</h2><p>The famous MGM Lion was born in Dublin Zoo</p>`},
    //Norway fact
  {location:{lat: 60.9792, lng: 7.3922},content: `<h2>Lærdal Tunnel</h2><p>At 15 miles (24.5 km) long, the Lærdal Tunnel is the worlds longest</p>`},
    //Canada fact
  {location:{lat: 46.8139, lng: -71.2080},content: `<h2>Quebec </h2><p>Small towns all over Quebec are responsible for almost 80% of the worlds maple syrup production</p>`},

    

    





  
  ]

   //creat a loop to run through markers

  for (let i = 0; i < MarkerArray.length; i++){
    addMarker(MarkerArray[i])
  }

  // Add Marker Function

  function addMarker(property) {
    // add location and marker listner if .location property
    const marker = new google.maps.Marker({
      position: property.location,
      map: map,

    });
    // add content and marker listner if .content property
    if (property.content) {

      const detailWindow = new google.maps.InfoWindow({
        content: property.content
      });

      marker.addListener("mouseover", () => {
        detailWindow.open(map, marker);
      })
    }
  }

}