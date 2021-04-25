let panorama, viewer, container;

container = document.querySelector('#container');

panorama = new PANOLENS.ImagePanorama('../images/location_04/bg_04.jpg');

// a_little
let infospot = new PANOLENS.Infospot(900, '../images/location_04/a_little.png');
infospot.position.set(-2374.13, -138, -4393.16);
infospot.addEventListener('hoverenter', () => {
    appendHoverText('差一點點 ');
    playTextAudio('a_little_audio');
});

//come
let infospot2 = new PANOLENS.Infospot(700, '../images/location_04/come.png');
infospot2.position.set(2798.62, -2462.34, 3319.97);
infospot2.addEventListener('hoverenter', () => {
    appendHoverText('過來 ');
    playTextAudio('come_audio');
});

// do_not_need
let infospot3 = new PANOLENS.Infospot(700, '../images/location_04/do_not_need.png');
infospot3.position.set(2556.93, -524.49, -4278.86);
infospot3.addEventListener('hoverenter', () => {
    appendHoverText('就沒必要啊 ');
    playTextAudio('do_not_need_audio');
});

// feel_it
let infospot4 = new PANOLENS.Infospot(500, '../images/location_04/feel_it.png');
infospot4.position.set(-427.51, 1907.47, 4657.33);
infospot4.addEventListener('hoverenter', () => {
    appendHoverText('感覺一下 ');
    playTextAudio('feel_it_audio');
});

// good
let infospot5 = new PANOLENS.Infospot(1000, '../images/location_04/good.png');
infospot5.position.set(-4840.55, 1158.21, 440.55);
infospot5.addEventListener('hoverenter', () => {
    appendHoverText('那就好 ');
    playTextAudio('good_audio');
});

// irony
let infospot6 = new PANOLENS.Infospot(500, '../images/location_04/irony.png');
infospot6.position.set(-1399.95, 2205.52, -4259.83);
infospot6.addEventListener('hoverenter', () => {
    appendHoverText('好嘲諷 ');
    playTextAudio('irony_audio');
});

// not_bad
let infospot7 = new PANOLENS.Infospot(1080, '../images/location_04/not_bad.png');
infospot7.position.set(1516.92, -545.72, 4705.22);
infospot7.addEventListener('hoverenter', () => {
    appendHoverText('不錯啊 ');
    playTextAudio('not_bad_audio');
});

// not_listening
let infospot8 = new PANOLENS.Infospot(3800, '../images/location_04/not_listening.png');
infospot8.position.set(2051.78, 3005.45, 3421.72);
infospot8.addEventListener('hoverenter', () => {
    appendHoverText('你看你耳朵都沒有在聽 ');
    playTextAudio('not_listening_audio');
});

// see_you
let infospot9 = new PANOLENS.Infospot(600, '../images/location_04/see_you.png');
infospot9.position.set(4623.37, 796.72, 1571.85);
infospot9.addEventListener('hoverenter', () => {
    appendHoverText('再見 ');
    playTextAudio('see_you_audio');
});

// take_a_photo
let infospot10 = new PANOLENS.Infospot(700, '../images/location_04/take_a_photo.png');
infospot10.position.set(818.15, 2438.53, -4211.60);
infospot10.addEventListener('hoverenter', () => {
    appendHoverText('幫我拍一下 ');
    playTextAudio('take_a_photo_audio');
});

panorama.addEventListener('load', () => {
    $('.loading_box').fadeOut("slow").hide();
    $('#entry_modal').modal('show');
});

panorama.add(
    infospot,
    infospot2,
    infospot3,
    infospot4,
    infospot5,
    infospot6,
    infospot7,
    infospot8,
    infospot9,
    infospot10,
);

viewer = new PANOLENS.Viewer({
    container: container,
    output: 'console'
});
viewer.add(panorama);