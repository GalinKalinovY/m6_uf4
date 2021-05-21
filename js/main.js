const myAPI_key="eadafa1e4ae708f5f7046192a4602074";
const myshared_secret="b19b6efed21c4110264fa2393e26bd3a";
var url = window.location.href; // or window.location.href for current url
var captured = /token=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
var result = captured ? captured : 'myDefaultValue';
const urlAudio = "http://ws.audioscrobbler.com/2.0/?";

function loadData() {

    //Crec que només necessitem apikey, token i secret i no necessitem params, els podem treure de sessionStorage
    //Calcula l'apiSig a partir dels valors d'abans...

    var data = {
        'token':  Utf8.encode(captured),
        'api_key': myAPI_key,
        'method': 'auth.getSession'
    };

    data["api_sig"] = calculateApiSig(data);
    data["format"] = "json";


    var last_url = urlAudio;

    $.ajax({
        type: "GET",
        url: last_url,
        data: data,
        dataType: 'json',
        //"success" gets called when the returned code is a "200" (successfull request). "error" gets called whenever another code is returned (e.g. 404, 500).
        success: function (res) {

            console.log("Resposta: Name " + res.session.name);// Should return session key.
            console.log("Resposta: Key " + res.session.key);

        },
        error: function (xhr, status, error) {
            var errorMessage = xhr.status + ': ' + xhr.statusText
            console.log('Error - ' + errorMessage);
        }
    });
    //reset data o data2
    var data2 = {
        'user': 'Gkalinov',
        'api_key': myAPI_key
    };
    data2["method"] = "user.getInfo";
    data2["format"] = "json";

    $.ajax({
        user: "GET",
        url: last_url,
        data: data2,
        dataType: 'json',
        //"success" gets called when the returned code is a "200" (successfull request). "error" gets called whenever another code is returned (e.g. 404, 500).
        success: function (res) {

            console.log("Resposta: Name " + res.user.name);// Should return session key.
            console.log("Resposta: image " + res.user.country);
            console.log("Resposta: image " + res.user.image[2]['#text']);
           /* $('#artistName').html(res.user.name);
            $('#artistImage').html('<img src="' + res.user.image[2]['#text']+ '" />');
            $('#artistBio').html(res.user.country);*/

            document.getElementById("artistName").innerHTML = res.user.name;
            document.getElementById("artistBio").innerHTML = res.user.country;
            document.getElementById("artistImage").src= res.user.image[2]['#text'];
        },
        error: function (xhr, status, error) {
            var errorMessage = xhr.status + ': ' + xhr.statusText
            console.log('Error - ' + errorMessage);
        }
    });

}

function calculateApiSig( params) {

    //Crec que només necessitem apikey, token i secret i no necessitem params, els podem treure de sessionStorage
    //Calcula l'apiSig a partir dels valors d'abans...
    var stringActual = "";
    var arrayKeysParams = [];


    Object.keys(params).forEach(function (key) {
        arrayKeysParams.push(key); // Get list of object keys
    });
    arrayKeysParams.sort(); // Alphabetise it

    arrayKeysParams.forEach(function (key) {
        stringActual = stringActual + key + params[key]; // build string
    });

    console.log("Mi primer chorizo:", stringActual);

    stringActual = stringActual + myshared_secret;
    console.log("Mi primer chorizo con shared:", stringActual);

    console.log("Mi primer chorizo con shared limpio :", stringActual);


    var hashed_sec = md5(unescape(encodeURIComponent(stringActual)));
    console.log("La apiSig es: " + hashed_sec);

    return hashed_sec; // Returns signed POSTable objec */
}