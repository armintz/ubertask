if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  });
  Template.body.helpers({
    exampleMapOptions: function() {
      // Make sure the maps API has loaded
      if (GoogleMaps.loaded()) {
        // Map initialization options
        return {
          center: new google.maps.LatLng(49.3115180, -123.0325920),
          zoom: 15
        };
      }
    }
  });
  Template.body.onCreated(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('exampleMap', function(map) {
      // Add a marker to the map once it's ready
      var myLatLng = {lat: 49.3115180, lng: -123.0325920};
      var myLatLng1 = {lat: 49.3118180, lng: -123.0355920};
      var myLatLng3 = {lat: 49.3112180, lng: -123.0383920};

      var marker = new google.maps.Marker({
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: myLatLng,
        title: "Need Help Moving",
        map: map.instance
      });

      var marker1 = new google.maps.Marker({
        draggable: true,
        animation: google.maps.Animation.BOUNCE,
        position: myLatLng1,
        title: "Need Delivery",
        map: map.instance
      });

      var marker3 = new google.maps.Marker({
        draggable: true,
        animation: google.maps.Animation.BOUNCE,
        position: myLatLng3,
        title: "Handyman!",
        map: map.instance
      });

    });
  });

  Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
