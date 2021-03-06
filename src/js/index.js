$(window).on('load', () => {
    $('.loading_box').fadeOut("slow").hide();
    $('#entry_modal').modal('show');
});

$("#entry_modal").on("hidden.bs.modal", () => {
    $('#bg_audio').get(0).play();
});

$('body').on('DOMSubtreeModified', '#poem', function () {
    $('#poem').show();
});

function appendHoverText(text) {
    const div = document.getElementById('poem');
    div.innerHTML += text;
    div.scrollTop = div.scrollHeight;
}