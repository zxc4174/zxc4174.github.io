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

$('#download').on('click', () => {
    const content = $('#poem_content').text();
    console.log(content);
    $('#download').attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
});

function appendHoverText(text) {
    const div = document.getElementById('poem_content');
    div.innerHTML += text;
    div.scrollTop = div.scrollHeight;
}