mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});
// console.log(coordinates);

const marker = new mapboxgl.Marker({ color: "red" }) // Initialize a new marker
  .setLngLat(listing.geometry.coordinates) // Marker [lng, lat] coordinates
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML(
    `<h3>${listing.location}</h3><p>Exact Location will be Provided after booking</p>`
  )
)
  .addTo(map); // Add the marker to the map
