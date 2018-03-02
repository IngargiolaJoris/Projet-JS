Meteor.startup(function() {
    GoogleMaps.load({key: 'AIzaSyCODtw82KXZ5H2eo3A-IENihTVLi6vqLL0&language=fr'});
});
Template.NewWorld.helpers({
    mapOptions: function() {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(48.8206818, 2.363718699999936),
                zoom: 18
            };
        }
    }
});
Template.NewWorld.onCreated(function ()
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


