var markers = [];

function initialize() {

    var beaches = [
        ['Project 1', -33.867, 151.195, 1],
        ['Project 2', -33.865143, 151.209900, 1],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: new google.maps.LatLng(-33.867, 151.195),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    for (var i = 0; i < beaches.length; i++) {

        var newMarker = new google.maps.Marker({
            position: new google.maps.LatLng(beaches[i][1], beaches[i][2]),
            map: map,
            title: beaches[i][0]
        });

        google.maps.event.addListener(newMarker, 'click', (function (newMarker, i) {
            return function () {
                infowindow.setContent(beaches[i][0]);
                infowindow.open(map, newMarker);
            }
        })(newMarker, i));

        markers.push(newMarker);
    }
}

initialize();