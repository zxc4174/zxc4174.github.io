let panorama, viewer, container;

container = document.querySelector('#container');

panorama = new PANOLENS.ImagePanorama('../images/location_02/bg_02.png');

// can_or_not
let infospot = new PANOLENS.Infospot(600, '../images/location_02/can_or_not.png');
infospot.position.set(500, -700, 1000);
infospot.addEventListener('hover', () => {
    document.querySelector('#can_or_not_audio').play();
});

// full
let infospot2 = new PANOLENS.Infospot(350, '../images/location_02/full.png');
infospot2.position.set(1300, 450, 1000);
infospot2.addEventListener('hover', () => {
    document.querySelector('#full_audio').play();
});

// how_much
let infospot3 = new PANOLENS.Infospot(3000, '../images/location_02/how_much.png');
infospot3.position.set(-2800, 5500, 2000);
infospot3.addEventListener('hover', () => {
    document.querySelector('#how_much_audio').play();
});

// later_tonight
let infospot4 = new PANOLENS.Infospot(3000, '../images/location_02/later_tonight.png');
infospot4.position.set(-8500, 2300, 2000);
infospot4.addEventListener('hover', () => {
    document.querySelector('#later_tonight_audio').play();
});

// what_drinks_you_want
let infospot5 = new PANOLENS.Infospot(4000, '../images/location_02/what_drinks_you_want.png');
infospot5.position.set(8000, 5000, 1000);
infospot5.addEventListener('hover', () => {
    document.querySelector('#what_drinks_you_want_audio').play();
});

panorama.add(infospot, infospot2, infospot3, infospot4, infospot5);

viewer = new PANOLENS.Viewer({
    container: container,
    // autoRotate: true,
    // autoRotateSpeed: 1,
    // autoRotateActivationDuration: 5000
});
viewer.add(panorama);

$(window).on('load', () => {
    $('.loading_box').fadeOut("slow").hide();
    $('#entry_modal').modal('show');
});

$("#entry_modal").on("hidden.bs.modal", () => {
    $('#bg_audio').get(0).play();
});

