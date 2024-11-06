$(document).ready(function() {
    function filterImages(category) {
        if (category === 'all') {
            $('.gallery .image').fadeIn();
        } else {
            $('.gallery .image').each(function() {
                $(this).toggle($(this).hasClass(category));
            });
        }
    }

    function openLightbox(imgSrc) {
        $('#lightbox .lightbox-image').attr('src', imgSrc);
        $('#lightbox').fadeIn();
    }

    function closeLightbox() {
        $('#lightbox').fadeOut();
    }

    $('.filters').on('click', 'button', function() {
        let category = $(this).data('filter');
        filterImages(category);
    });

    $('.gallery').on('click', '.image', function() {
        let imgSrc = $(this).find('img').attr('src');
        openLightbox(imgSrc);
    });

    $('#lightbox').on('click', function(event) {
        if (event.target === this || $(event.target).hasClass('close')) {
            closeLightbox();
        }
    });
});