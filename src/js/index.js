// 建立 Leaflet 地圖
const map = L.map('map', {
    maxZoom: 3,
    minZoom: 1,
    crs: L.CRS.Simple
}).setView([500, 500], 1);

const customIcon = L.icon({
    iconUrl: './src/images/pin.png',
    iconSize: [30, 45],
    popupAnchor: [0, -20],
    className: 'customIcon'
});

map.setMaxBounds(new L.LatLngBounds([0, 1000], [1000, 0]));

const imageUrl = './src/images/taipei_main_page.jpg';
const imageBounds = [[1000, 0], [0, 1000]];

L.imageOverlay(imageUrl, imageBounds).addTo(map);

const locationLayer = new L.FeatureGroup();
const coords = [
    { location: 'Cross of Huaining St. and Hankou St.', position: [379.75, 410.5], link: './src/pages/location_01.html' },
    { location: 'Raohe night market east', position: [419, 902.8125], link: './src/pages/location_02.html' },
    { location: 'Cross of Songren Rd. and Xinyi Rd.', position: [255.125, 830.875], link: './src/pages/location_03.html' },
];
let markerArray = [];

$.each(coords, function (i, target) {
    // create the button
    $('#controls').append('<button data-id=' + i + ' class="btn btn-gray mr-1">' + target.location + '</button>')

    const marker = L.marker(target.position, {
        id: i,
        icon: customIcon
    });

    marker.bindPopup('<strong class="m-1">' + target.location + '</strong>', { autoClose: false, closeOnClick: false });

    marker.on('mouseover', (e) => {
        e.target.openPopup();
    });

    marker.on('mouseout', (e) => {
        e.target.openPopup();
        // e.target.closePopup();
    });

    marker.on('click', (e) => {
        //location.href = target.link;
        $("body").append('<iframe id="panorama_dialog" src="' + target.link + '"></iframe > ');
    });

    locationLayer.addLayer(marker);

    markerArray[i] = marker;
});


locationLayer.addTo(map).eachLayer(marker => {
    marker.openPopup();
});

$('button').on('click', (e) => {
    map.setView(markerArray[$(e.target).data('id')].getLatLng(), 2);
});

// for resize
$(window).on("resize", function () { $("#map").height($(window).height()); map.invalidateSize(); }).trigger("resize");

// for position
map.on('click', function (e) {
    const coord = e.latlng;
    const lat = coord.lat;
    const lng = coord.lng;
    console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
});

function clickZoom(e) {
    map.setView(e.target.getLatLng(), 5);
}

// function setIconSize(e) {
//     var i;
//     var zoomLevel = map.getZoom();
//     var x = 100 * zoomLevel * 0.3;
//     var y = 150 * zoomLevel * 0.3;
//     var iconElements = document.getElementsByClassName('customIcon');
//     for (i = 0; i < iconElements.length; i++) {
//         iconElements[i].style.width = x + 'px';
//         iconElements[i].style.height = y + 'px';
//         console.log("width: " + iconElements[i].style.width);
//         console.log("height: " + iconElements[i].style.height);
//     }
// };

// map.on('zoomend', setIconSize);

function inertIframe(id, src) {
    console.log();
    $(id).attr('src', src);
}