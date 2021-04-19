let panorama, viewer, container;

container = document.querySelector('#container');

panorama = new PANOLENS.ImagePanorama('../images/location_01/bg_01.jpg');

// i_just_know_that_audio
let infospot = new PANOLENS.Infospot(600, '../images/location_01/i_just_know_that.png');
infospot.position.set(900, -1100, -1000);
infospot.addEventListener('hoverenter', () => {
    appendHoverText('我才知道 ');
    playTextAudio('i_just_know_that_audio');
});

// do_not_be_afraid
let infospot2 = new PANOLENS.Infospot(530, '../images/location_01/do_not_be_afraid.png');
infospot2.position.set(-1150, 1080, 1000);
infospot2.addEventListener('hoverenter', () => {
    appendHoverText('不用怕 ');
    playTextAudio('do_not_be_afraid_audio');
});

// do_you_need_receipt
let infospot3 = new PANOLENS.Infospot(130, '../images/location_01/do_you_need_receipt.png');
infospot3.position.set(-80, -400, -1000);
infospot3.addEventListener('hoverenter', () => {
    appendHoverText('請問載具需要嗎 ');
    playTextAudio('do_you_need_receipt_audio');
});

// boss
let infospot4 = new PANOLENS.Infospot(2500, '../images/location_01/boss.png');
infospot4.position.set(-2780.04, 962.12, -3783.63);
infospot4.addEventListener('hoverenter', () => {
    appendHoverText('我跟老闆講一下 ');
    playTextAudio('boss_audio');
});

// nothing
let infospot5 = new PANOLENS.Infospot(400, '../images/location_01/nothing.png');
infospot5.position.set(-550, 800, 1000);
infospot5.addEventListener('hoverenter', () => {
    appendHoverText('沒有啦 ');
    playTextAudio('nothing_audio');
});

// real_or_fake
let infospot6 = new PANOLENS.Infospot(280, '../images/location_01/real_or_fake.png');
infospot6.position.set(1050, 310, -1000);
infospot6.addEventListener('hoverenter', () => {
    appendHoverText('真的假的 ');
    playTextAudio('real_or_fake_audio');
});

// wait_me
let infospot7 = new PANOLENS.Infospot(270, '../images/location_01/wait_me.png');
infospot7.position.set(-1169.34, 469.62, 983.02);
infospot7.addEventListener('hoverenter', () => {
    appendHoverText('等一下 ');
    playTextAudio('wait_me_audio');
});

// you_are_stingy
let infospot8 = new PANOLENS.Infospot(500, '../images/location_01/you_are_stingy.png');
infospot8.position.set(840, 950, -1000);
infospot8.addEventListener('hoverenter', () => {
    appendHoverText('你真小氣 ');
    playTextAudio('you_are_stingy_audio');
});

// why_are_you_alone
let infospot9 = new PANOLENS.Infospot(450, '../images/location_01/why_are_you_alone.png');
infospot9.position.set(1000, 500, 1000);
infospot9.addEventListener('hoverenter', () => {
    appendHoverText('怎麼只有你一個人 ');
    playTextAudio('why_are_you_alone_audio');
});

// look
let infospot10 = new PANOLENS.Infospot(700, '../images/location_01/look.png');
infospot10.position.set(-3756.54, 3290.27, -108.88);
infospot10.addEventListener('hoverenter', () => {
    appendHoverText('你要不要看 ');
    playTextAudio('look_audio');
});

// rain
let infospot11 = new PANOLENS.Infospot(2000, '../images/location_01/rain.png');
infospot11.position.set(4152.55, 2777.75, 4.34);
infospot11.addEventListener('hoverenter', () => {
    appendHoverText('有飄雨嗎 ');
    playTextAudio('rain_audio');
});

// sleep
let infospot12 = new PANOLENS.Infospot(4000, '../images/location_01/sleep.png');
infospot12.position.set(127.99, -60, 4960.26);
infospot12.addEventListener('hoverenter', () => {
    appendHoverText('進入睡眠狀態 ');
    playTextAudio('sleep_audio');
});

panorama.addEventListener('load', () => {
    $('.loading_box').fadeOut("slow").hide();
    $('#entry_modal').modal('show');
});

panorama.add(infospot,
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


