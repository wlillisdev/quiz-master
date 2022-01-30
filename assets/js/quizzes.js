// Tutorials on youtube form Traversy Media & Sam Codes were followed.


// Initialize and add the base google map
function initMap() {
  let options = {
    center: {
      lat: 53.3498,
      lng: -6.2603
    },
    zoom: 2
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
  {location:{lat: 46.8139, lng: -71.2080},content: `<h2>Quebec</h2><p>Small towns all over Quebec are responsible for almost 80% of the worlds maple syrup production</p>`},
    //Brazil fact
  {location:{lat: 3.4653, lng: -62.2159},content: `<h2>Brazil</h2><p>Brazil has 4 time zones</p>`},
   //South Africa fact
   {location:{lat: -33.9249, lng: 18.4241},content: `<h2>South Africa</h2><p>South Africa is the largest producer of platinum in the world</p>`},
   //Australia fact
   {location:{lat: -36.6795, lng: 148.1879},content: `<h2>Australia</h2><p>The Australian Alps get more snow than the Swiss Alps</p>`},
   //Russia fact
   {location:{lat: 61.5240, lng: 105.3188},content: `<h2>Russia</h2><p>20% Of the Earths Trees Are in Russia</p>`},
   //Italy fact
   {location:{lat: 40.8518, lng: 14.2681},content: `<h2>Napoli</h2><p> Pizza: was invented in Napoli around 1860</p>`},
   //India Fact
   {location:{lat: 28.6139, lng: 77.2090},content: `<h2>India</h2><p>India has the second largest population in the world, with just under 1.4 billion inhabitants</p>`}, 
   //China Fact
   {location:{lat: 39.9042, lng: 116.4074},content: `<h2>China</h2><p>China is home to the world’s largest canal,called the Grand canal it is 1776 km long</p>`},  
   //Moscow Fact
   {location:{lat: 55.7558, lng: 37.6173},content: `<h2>Moscow</h2><p>is home to the 200-tonne Tsar Bell, the largest bell in the world</p>`}, 
   //Mexico Fact
   {location:{lat: 19.4326, lng: -99.1332},content: `<h2>Mexico</h2><p>Mexico City was built on a lake,The city sinks around 12cm annually.</p>`},

  ]

   //creat a loop to run through markers

  for (let i = 0; i < MarkerArray.length; i++){
    addMarker(MarkerArray[i])
  }

  // Add Marker Function

  function addMarker(property) {
    // add location 
    const marker = new google.maps.Marker({
      position: property.location,
      map: map,

    });
    // add content and  listner to function
    if (property.content) {

      const detailWindow = new google.maps.InfoWindow({
        content: property.content
      });

      marker.addListener("click", () => {
        detailWindow.open(map, marker);
      })
    }
  }

}