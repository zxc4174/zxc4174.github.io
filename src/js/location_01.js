var panorama, viewer, container, infospot, infospot2;

container = document.querySelector('#container');

panorama = new PANOLENS.ImagePanorama('../images/location_01/bg_01.png');

infospot = new PANOLENS.Infospot(600, '../images/location_01/i_just_know_that.png');
infospot.position.set(900, -1100, -1000);
infospot.addEventListener('hover', () => {
    document.querySelector('#i_just_know_that_audio').play();
});

panorama.add(infospot);

viewer = new PANOLENS.Viewer({
    container: container,
    autoRotate: true,
    autoRotateSpeed: 1,
    autoRotateActivationDuration: 5000
});
viewer.add(panorama);

$(window).on('load', () => {
    $('.loading_box').fadeOut("slow").hide();
});

