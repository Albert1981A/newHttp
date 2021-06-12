let latitude, longitude;

navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);
    console.log(position.coords.latitude, position.coords.longitude);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
});

console.log(latitude + ", " + longitude); 

