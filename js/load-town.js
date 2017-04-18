$(".search-box select").on('change', function () {
    $(".search-box form").submit();
});

$.getJSON("../assets/json/kota.json", function (data) {
    $.each(data, function (key, val) {
        $("<option>").attr("value", key).html(val).appendTo("#kota");
    });
    $("#kota").prop("disabled", false); 
});