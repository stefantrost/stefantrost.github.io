/**
 * Created by trost on 27/09/16.
 */
function sendContactMail() {
    $.ajax({
        type: 'POST',
        url: 'mail/',
        async: false,
        data: $('#contactForm').serialize(),
        success: function () {
            $('#contact>header').append("<span>Thank you for contacting me. I'll get to you as soon as possible. </span>")
            $('#contactForm')[0].reset();
        },
        error: function () {
            $('#contact>header').append("<span>Sorry, something went wrong. Please try again or write an email to " +
                "<a href='mailto:hello@stefantrost.co'>hello@stefantrost.co</a></span>")
        }
    });
}