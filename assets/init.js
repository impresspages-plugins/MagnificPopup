$(document).ready(function () {
    "use strict";

    if (ip.isManagementState) {
        return;
    }

    $.each($('.ipWidget'), function (key, widget){


        $(widget).magnificPopup({
            delegate: 'a[rel*=lightbox]', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
            }
        });


    });

    $('a[rel=standaloneLightbox]').magnificPopup();


});
