// 建立 Leaflet 地圖
const map = L.map('map', {
    maxZoom: 24,
    minZoom: 1,
    crs: L.CRS.Simple
}).setView([1000, 0], 1);

map.setMaxBounds(new L.LatLngBounds([0, 1000], [1000, 0]));

const imageUrl = './src/images/taipei_main_page.jpg'
const imageBounds = [[1000, 0], [0, 1000]];

L.imageOverlay(imageUrl, imageBounds).addTo(map);

const locationLayer = new L.FeatureGroup();
const coords = [
    { location: 'Cross of Huaining St. and Hankou St.', position: [511, 307.5], link: './src/pages/location_01.html' },
    { location: 'Raohe night market east', position: [603, 877], link: './src/pages/location_02.html' }];
let markerArray = [];

$.each(coords, function (i, target) {
    // create the button
    $('#controls').append('<button data-id=' + i + ' class="btn btn-info mr-1">' + target.location + '</button>')

    const marker = L.marker(target.position, {
        id: i
    });

    marker.bindPopup('<strong>' + target.location + '</strong>', { autoClose: false, closeOnClick: false });

    marker.on('mouseover', (e) => {
        e.target.openPopup();
    });

    // marker.on('mouseout', (e) => {
    //     e.target.closePopup();
    // });

    marker.on('click', (e) => {
        location.href = target.link;
    });

    locationLayer.addLayer(marker);

    markerArray[i] = marker;
});


locationLayer.addTo(map).eachLayer(marker => {
    marker.openPopup();
});

$('button').on('click', (e) => {
    map.setView(markerArray[$(e.target).data('id')].getLatLng(), 1);
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