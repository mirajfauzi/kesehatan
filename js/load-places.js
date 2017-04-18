var $_GET = {};

// Read GET
document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
});

$.getJSON("../assets/json/alamat.json", function(data) {
    console.log(data.length);
    if (isNaN($_GET["kota"])) {
        
    } else {
        if (data[$_GET["kota"]] == null) {
            $("<button>").attr("onclick","requestCity("+$_GET["kota"]+")").text("Request Rumah Singgah");
        } else {
            
        }
    }
});
