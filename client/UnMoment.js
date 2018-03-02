Meteor.startup(function() {
    GoogleMaps.load({key: 'AIzaSyCODtw82KXZ5H2eo3A-IENihTVLi6vqLL0&language=fr'});
});
Template.UnMoment.helpers({
    mapOptions: function() {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(45.752804, 4.831772699999988),
                zoom: 18
            };
        }
    }
});
Template.UnMoment.onCreated(function ()
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