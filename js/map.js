function initialize() {

    var data_lat,data_lng,data_marker,data_zoom;

    data_lat = jQuery('#gmap').attr('data-latitude');

    data_lng = jQuery('#gmap').attr('data-longitude');

    data_zoom = jQuery('#gmap').attr('data-zoom');

    data_marker = jQuery('#gmap').attr('data-marker');

    // Create an array of styles.

    var styles = [

    {

        "featureType": "all",

        "elementType": "labels.text.fill",

        "stylers": [

            {

                "saturation": 36

            },

            {

                "color": "#333333"

            },

            {

                "lightness": 40

            }

        ]

    },

    {

        "featureType": "all",

        "elementType": "labels.text.stroke",

        "stylers": [

            {

                "visibility": "on"

            },

            {

                "color": "#ffffff"

            },

            {

                "lightness": 16

            }

        ]

    },

    {

        "featureType": "all",

        "elementType": "labels.icon",

        "stylers": [

            {

                "visibility": "off"

            }

        ]

    },

    {

        "featureType": "administrative",

        "elementType": "geometry.fill",

        "stylers": [

            {

                "color": "#fefefe"

            },

            {

                "lightness": 20

            }

        ]

    },

    {

        "featureType": "administrative",

        "elementType": "geometry.stroke",

        "stylers": [

            {

                "color": "#fefefe"

            },

            {

                "lightness": 17

            },

            {

                "weight": 1.2

            }

        ]

    },

    {

        "featureType": "landscape",

        "elementType": "geometry",

        "stylers": [

            {

                "color": "#f5f5f5"

            },

            {

                "lightness": 20

            }

        ]

    },

    {

        "featureType": "poi",

        "elementType": "geometry",

        "stylers": [

            {

                "color": "#f5f5f5"

            },

            {

                "lightness": 21

            }

        ]

    },

    {

        "featureType": "poi.park",

        "elementType": "geometry",

        "stylers": [

            {

                "color": "#dedede"

            },

            {

                "lightness": 21

            }

        ]

    },

    {

        "featureType": "road.highway",

        "elementType": "geometry.fill",

        "stylers": [

            {

                "color": "#ffffff"

            },

            {

                "lightness": 17

            }

        ]

    },

    {

        "featureType": "road.highway",

        "elementType": "geometry.stroke",

        "stylers": [

            {

                "color": "#ffffff"

            },

            {

                "lightness": 29

            },

            {

                "weight": 0.2

            }

        ]

    },

    {

        "featureType": "road.arterial",

        "elementType": "geometry",

        "stylers": [

            {

                "color": "#ffffff"

            },

            {

                "lightness": 18

            }

        ]

    },

    {

        "featureType": "road.local",

        "elementType": "geometry",

        "stylers": [

            {

                "color": "#ffffff"

            },

            {

                "lightness": 16

            }

        ]

    },

    {

        "featureType": "transit",

        "elementType": "geometry",

        "stylers": [

            {

                "color": "#f2f2f2"

            },

            {

                "lightness": 19

            }

        ]

    },

    {

        "featureType": "water",

        "elementType": "geometry",

        "stylers": [

            {

                "color": "#e9e9e9"

            },

            {

                "lightness": 17

            }

        ]

    }

];

    // Create a new StyledMapType object, passing it the array of styles,

    // as well as the name to be displayed on the map type control.

    var styledMap = new google.maps.StyledMapType(styles,

        {name: "Styled Map"});

    // Create a map object, and include the MapTypeId to add

    // to the map type control.

    var myLatlng = new google.maps.LatLng(data_lat, data_lng);

    var mapOptions = {

        zoom: parseInt(data_zoom),

        scrollwheel: false,

        center: myLatlng,

        disableDefaultUI: false,
        mapTypeControl: false

        // mapTypeControlOptions: {

        //     mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']

        // }

    };

    var map = new google.maps.Map(document.getElementById('gmap'),

        mapOptions);

    //Associate the styled map with the MapTypeId and set it to display.

    map.mapTypes.set('map_style', styledMap);

    map.setMapTypeId('map_style');

    // To add the marker to the map, use the 'map' property

    var marker = new google.maps.Marker({

        position: myLatlng,

        map: map,

        title: "",

        icon: data_marker

    });

    // To add the marker to the map, call setMap();

    marker.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);