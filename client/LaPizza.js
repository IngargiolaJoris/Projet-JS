Meteor.startup(function() {
    GoogleMaps.load({key: 'AIzaSyCODtw82KXZ5H2eo3A-IENihTVLi6vqLL0&language=fr'});
});
Template.LaPizza.helpers({
    mapOptions: function() {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(45.0430473, 3.8879865999999765),
                zoom: 18
            };
        }
    }
});
Template.LaPizza.onCreated(function ()
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