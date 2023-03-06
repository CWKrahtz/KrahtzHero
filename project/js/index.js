$(document).ready(function() {

    console.log("Document is ready");
    var heroData = null;
    var accessToken = 3281815455417256;
    $.ajax({
        type: "GET",
        url: "https://superheroapi.com/api/3281815455417256/337/powerstats/",
        success: function(data){
            heroData = data;
            console.log(heroData);
        }
    });

});