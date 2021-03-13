let panorama, viewer, container;

container = document.querySelector('#container');

panorama = new PANOLENS.ImagePanorama('../images/location_03/bg_03.jpg');

// all_ok
let infospot = new PANOLENS.Infospot(1900, '../images/location_03/all_ok.png');
infospot.position.set(-1454.99, -1097.26, -4650.98);
infospot.addEventListener('hoverenter', () => {
    appendHoverText('反正我們都可以 ');
    playTextAudio('all_ok_audio');
});

//back_home_audio
let infospot2 = new PANOLENS.Infospot(3500, '../images/location_03/back_home.png');
infospot2.position.set(-2400.57, 2546.07, -3439.65);
infospot2.addEventListener('hoverenter', () => {
    appendHoverText('回去再說 ');
    playTextAudio('back_home_audio');
});

// cannot_see
let infospot3 = new PANOLENS.Infospot(1000, '../images/location_03/cannot_see.png');
infospot3.position.set(-3963.64, 1319.61, 2732.23);
infospot3.addEventListener('hoverenter', () => {
    appendHoverText('看不到路 ');
    playTextAudio('cannot_see_audio');
});

// excuse
let infospot4 = new PANOLENS.Infospot(1200, '../images/location_03/excuse.png');
infospot4.position.set(2173.74, -342.08, 4467.45);
infospot4.addEventListener('hoverenter', () => {
    appendHoverText('不好意思 ');
    playTextAudio('excuse_audio');
});

// four_months
let infospot5 = new PANOLENS.Infospot(1300, '../images/location_03/four_months.png');
infospot5.position.set(4366.34, 2427.18, 12.22);
infospot5.addEventListener('hoverenter', () => {
    appendHoverText('四個月而已 ');
    playTextAudio('four_months_audio');
});

// funny
let infospot6 = new PANOLENS.Infospot(3500, '../images/location_03/funny.png');
infospot6.position.set(3090.22, 2200.46, 2636.30);
infospot6.addEventListener('hoverenter', () => {
    appendHoverText('真的蠻好笑的 ');
    playTextAudio('funny_audio');
});

// no_way
let infospot7 = new PANOLENS.Infospot(1800, '../images/location_03/no_way.png');
infospot7.position.set(-2154.99, 3344.24, 3011.77);
infospot7.addEventListener('hoverenter', () => {
    appendHoverText('沒辦法 ');
    playTextAudio('no_way_audio');
});

// run
let infospot8 = new PANOLENS.Infospot(1000, '../images/location_03/run.png');
infospot8.position.set(4269.88, -120.82, 2585.36);
infospot8.addEventListener('hoverenter', () => {
    appendHoverText('快跑 ');
    playTextAudio('run_audio');
});

// so_great
let infospot9 = new PANOLENS.Infospot(1000, '../images/location_03/so_great.png');
infospot9.position.set(-795.11, 1269.54, 4760.60);
infospot9.addEventListener('hoverenter', () => {
    appendHoverText('好厲害 ');
    playTextAudio('so_great_audio');
});

// summer_vacation
let infospot10 = new PANOLENS.Infospot(3200, '../images/location_03/summer_vacation.png');
infospot10.position.set(-4441.42, 2283.72, 112.77);
infospot10.addEventListener('hoverenter', () => {
    appendHoverText('我那時暑假也覺得 ');
    playTextAudio('summer_vacation_audio');
});

// weird
let infospot11 = new PANOLENS.Infospot(4000, '../images/location_03/weird.png');
infospot11.position.set(-849.63, -4500, 91.18);
infospot11.addEventListener('hoverenter', () => {
    appendHoverText('她是不是怪怪的 ');
    playTextAudio('weird_audio');
});

// your_fault
let infospot12 = new PANOLENS.Infospot(3000, '../images/location_03/your_fault.png');
infospot12.position.set(-2909.96, 4500, 1758.66);
infospot12.addEventListener('hoverenter', () => {
    appendHoverText('都是你害得 ');
    playTextAudio('your_fault_audio');
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
    infospot11,
    infospot12,
);

viewer = new PANOLENS.Viewer({
    container: container,
    output: 'console'
});
viewer.add(panorama);