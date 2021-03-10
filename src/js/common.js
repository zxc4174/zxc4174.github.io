$(window).on('load', () => {
    $('.loading_box').fadeOut("slow").hide();
    $('#entry_modal').modal('show');
});

$("#entry_modal").on("hidden.bs.modal", () => {
    $('#bg_audio').get(0).play();
    $('.panorama-icon').fadeOut("slow").hide();
});

$('body').on('DOMSubtreeModified', '#poem', function () {
    $('#poem').show();
});

$('#download').on('click', () => {
    const content = $('#poem_content').text();
    console.log(content);
    $('#download').attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
});

$('#btn-close').on('click', () => {
    $('#panorama_dialog', window.parent.document).hide();
    $('audio').each(function () {
        this.pause(); // Stop playing
        this.currentTime = 0; // Reset time
    });
});


function appendHoverText(text) {
    const poem_content = document.getElementById('poem_content');
    poem_content.innerHTML += text;
    const div = document.getElementById('poem');
    div.scrollTop = div.scrollHeight;
}

function playTextAudio(targetId) {
    document.querySelector('#' + targetId).play();
}