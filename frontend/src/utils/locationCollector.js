export default function LocationSnap() {
    var pos = {
        longitude:0,
        latitude:0
    }
    

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        pos.longitude = longitude
        pos.latitude = latitude
      }
    
      function error() {
        console.log( 'Unable to retrieve your location');
      }
    
      if(!navigator.geolocation) {
        console.log( 'Geolocation is not supported by your browser');
        return {undefined}
      } else {
        console.log( 'Locating…');
        navigator.geolocation.getCurrentPosition(success, error);
    }
    return pos;
}