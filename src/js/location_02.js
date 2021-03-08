let panorama, viewer, container;

container = document.querySelector('#container');

panorama = new PANOLENS.ImagePanorama('../images/location_02/bg_02.jpg');

// can_or_not
let infospot = new PANOLENS.Infospot(600, '../images/location_02/can_or_not.png');
infospot.position.set(500, -700, 1000);
infospot.addEventListener('hoverenter', () => {
    appendHoverText('不可以 ');
    playTextAudio('can_or_not_audio');
});

// full
let infospot2 = new PANOLENS.Infospot(350, '../images/location_02/full.png');
infospot2.position.set(1300, 450, 1000);
infospot2.addEventListener('hoverenter', () => {
    appendHoverText('吃飽了 ');
    playTextAudio('full_audio');
});

// how_much
let infospot3 = new PANOLENS.Infospot(3000, '../images/location_02/how_much.png');
infospot3.position.set(-2800, 5500, 2000);
infospot3.addEventListener('hoverenter', () => {
    appendHoverText('今天是賺多少錢 ');
    playTextAudio('how_much_audio');
});

// later_tonight
let infospot4 = new PANOLENS.Infospot(3000, '../images/location_02/later_tonight.png');
infospot4.position.set(-8500, 2300, 2000);
infospot4.addEventListener('hoverenter', () => {
    appendHoverText('今天好像比較晚 ');
    playTextAudio('later_tonight_audio');
});

// what_drinks_you_want
let infospot5 = new PANOLENS.Infospot(4000, '../images/location_02/what_drinks_you_want.png');
infospot5.position.set(8000, 5000, 1000);
infospot5.addEventListener('hoverenter', () => {
    appendHoverText('你要喝什麼飲料 ');
    playTextAudio('what_drinks_you_want_audio');
});

// back_to_home
let infospot6 = new PANOLENS.Infospot(4000, '../images/location_02/back_to_home.png');
infospot6.position.set(4821.75, 273.38, 831.88);
infospot6.addEventListener('hoverenter', () => {
    appendHoverText('回去再說 ');
    playTextAudio('back_to_home_audio');
});

// did_not_notice
let infospot7 = new PANOLENS.Infospot(2300, '../images/location_02/did_not_notice.png');
infospot7.position.set(-2391.85, -346.04, 4369.99);
infospot7.addEventListener('hoverenter', () => {
    appendHoverText('可能會有人沒注意 ');
    playTextAudio('did_not_notice_audio');
});

// wait
let infospot8 = new PANOLENS.Infospot(2000, '../images/location_02/wait.png');
infospot8.position.set(-267.98, 2870.36, -4024.31);
infospot8.addEventListener('hoverenter', () => {
    appendHoverText('我要在路邊等 ');
    playTextAudio('wait_audio');
});

// win_or_lose
let infospot9 = new PANOLENS.Infospot(2000, '../images/location_02/win_or_lose.png');
infospot9.position.set(-2062.32, 3745.57, -2581.14);
infospot9.addEventListener('hoverenter', () => {
    appendHoverText('要打到贏或是打到輸 ');
    playTextAudio('win_or_lose_audio');
});

// yes_yes_yes
let infospot10 = new PANOLENS.Infospot(2000, '../images/location_02/yes_yes_yes.png');
infospot10.position.set(-4711.96, -277.88, -1627.51);
infospot10.addEventListener('hoverenter', () => {
    appendHoverText('對對對 ');
    playTextAudio('yes_yes_yes_audio');
});

// here_or_not
let infospot11 = new PANOLENS.Infospot(500, '../images/location_02/here_or_not.png');
infospot11.position.set(406.65, 774.90, -213.18);
infospot11.addEventListener('hoverenter', () => {
    appendHoverText('在不再 ');
    playTextAudio('here_or_not_audio');
});

// northern
let infospot12 = new PANOLENS.Infospot(2000, '../images/location_02/northern.png');
infospot12.position.set(-4339.58, 1786.74, -1459.56);
infospot12.addEventListener('hoverenter', () => {
    appendHoverText('靠北 ');
    playTextAudio('northern_audio');
});

// play_phone
let infospot13 = new PANOLENS.Infospot(2000, '../images/location_02/play_phone.png');
infospot13.position.set(0, 0, -3000);
infospot13.addEventListener('hoverenter', () => {
    appendHoverText('整天只會在那邊玩手機 ');
    playTextAudio('play_phone_audio');
});

// wait_an_hour
let infospot14 = new PANOLENS.Infospot(2000, '../images/location_02/wait_an_hour.png');
infospot14.position.set(-138.84, 2941.19, 4036.02);
infospot14.addEventListener('hoverenter', () => {
    appendHoverText('我等了一個小時 ');
    playTextAudio('wait_an_hour_audio');
});

// what
let infospot15 = new PANOLENS.Infospot(3000, '../images/location_02/what.png');
infospot15.position.set(-2258.27, -3500, -1887.33);
infospot15.addEventListener('hoverenter', () => {
    appendHoverText('甚麼東西 ');
    playTextAudio('what_audio');
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
    infospot13,
    infospot14,
    infospot15,
);

viewer = new PANOLENS.Viewer({
    container: container,
    output: 'console'
});
viewer.add(panorama);