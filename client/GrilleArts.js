Meteor.startup(function() {
    GoogleMaps.load({key: 'AIzaSyCODtw82KXZ5H2eo3A-IENihTVLi6vqLL0&language=fr'});
});
Template.GrilleArts.helpers({
    mapOptions: function() {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(45.0963668, 5.683448300000009),
                zoom: 18
            };
        }
    }
});
Template.GrilleArts.onCreated(function ()
{
    GoogleMaps.ready('map', function (map)
    {
        var marker = new google.maps.Marker
        ({
            position: map.options.center,
            map: map.instance
        });
    });
});