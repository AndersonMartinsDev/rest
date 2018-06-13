


$(document).ready(function () {

    $("#ContactForm").submit(function (e) {
        var json = $(this).serializeArray();
        console.log(json);
        e.preventDefault();



    })
})
