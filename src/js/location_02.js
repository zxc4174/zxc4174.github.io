let panorama, viewer, container;

container = document.querySelector('#container');

panorama = new PANOLENS.ImagePanorama('../images/location_02/bg_02.jpg');

// can_or_not
let infospot = new PANOLENS.Infospot(600, '../images/location_02/can_or_not.png');
infospot.position.set(500, -700, 1000);
infospot.addEventListener('hover', (e) => {
    console.log(e);
    appendHoverText('不可以');
    document.querySelector('#can_or_not_audio').play();
});

// full
let infospot2 = new PANOLENS.Infospot(350, '../images/location_02/full.png');
infospot2.position.set(1300, 450, 1000);
infospot2.addEventListener('hover', () => {
    appendHoverText('吃飽了');
    document.querySelector('#full_audio').play();
});

// how_much
let infospot3 = new PANOLENS.Infospot(3000, '../images/location_02/how_much.png');
infospot3.position.set(-2800, 5500, 2000);
infospot3.addEventListener('hover', () => {
    appendHoverText('今天是賺多少錢');
    document.querySelector('#how_much_audio').play();
});

// later_tonight
let infospot4 = new PANOLENS.Infospot(3000, '../images/location_02/later_tonight.png');
infospot4.position.set(-8500, 2300, 2000);
infospot4.addEventListener('hover', () => {
    appendHoverText('今天好像比較晚');
    document.querySelector('#later_tonight_audio').play();
});

// what_drinks_you_want
let infospot5 = new PANOLENS.Infospot(4000, '../images/location_02/what_drinks_you_want.png');
infospot5.position.set(8000, 5000, 1000);
infospot5.addEventListener('hover', () => {
    appendHoverText('你要喝什麼飲料');
    document.querySelector('#what_drinks_you_want_audio').play();
});

// back_to_home
let infospot6 = new PANOLENS.Infospot(4000, '../images/location_02/back_to_home.png');
infospot6.position.set(4821.75, 273.38, 831.88);
infospot6.addEventListener('hover', () => {
    appendHoverText('回去再說');
    document.querySelector('#back_to_home_audio').play();
});

// did_not_notice
let infospot7 = new PANOLENS.Infospot(2300, '../images/location_02/did_not_notice.png');
infospot7.position.set(-2391.85, -346.04, 4369.99);
infospot7.addEventListener('hover', () => {
    appendHoverText('可能會有人沒注意');
    document.querySelector('#did_not_notice_audio').play();
});

// wait
let infospot8 = new PANOLENS.Infospot(2000, '../images/location_02/wait.png');
infospot8.position.set(-267.98, 2870.36, -4024.31);
infospot8.addEventListener('hover', () => {
    appendHoverText('我要在路邊等');
    document.querySelector('#wait_audio').play();
});

// win_or_lose
let infospot9 = new PANOLENS.Infospot(2000, '../images/location_02/win_or_lose.png');
infospot9.position.set(-2062.32, 3745.57, -2581.14);
infospot9.addEventListener('hover', () => {
    appendHoverText('要打到贏或是打到輸');
    document.querySelector('#win_or_lose_audio').play();
});

// yes_yes_yes
let infospot10 = new PANOLENS.Infospot(2000, '../images/location_02/yes_yes_yes.png');
infospot10.position.set(-4711.96, -277.88, -1627.51);
infospot10.addEventListener('hover', () => {
    appendHoverText('對對對');
    document.querySelector('#yes_yes_yes_audio').play();
});

panorama.add(infospot, infospot2, infospot3, infospot4, infospot5, infospot6, infospot7, infospot8, infospot9, infospot10);

viewer = new PANOLENS.Viewer({
    container: container,
    output: 'console'
});
viewer.add(panorama);