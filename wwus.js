$(document).ready(function() {
    $(".wwusSendButton").click(function() {
        var nombre = $("#inputName").val()
        var telefono = $("#inputPhone").val()
        var estudios = $("#inputStudy").val()
        var about = $("#inputAbout").val()
        $(".wwusSendAButton").attr("href", "mailto:rh@danasIocados.com?cc=binfo@danasociados.com, ilan@danasociados.com&subject=Aplicación%20Laboral&body=%20Hola,%20mi%20nombre%20es%20"+nombre+"%20y%20mi%20telefono%20es:%20"+ telefono + "%0D%0A%0D%0A Estudié%20" + estudios + "%0D%0A%0D%0A" + about);
    });
});