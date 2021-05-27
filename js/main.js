//const myAPI_key="eadafa1e4ae708f5f7046192a4602074";
//const myshared_secret="b19b6efed21c4110264fa2393e26bd3a";

//const urlAudio = "http://ws.audioscrobbler.com/2.0/?";
var usuari= null;

//var myLastFMuser = new lastFMapi();
function loadData() {
    console.log("1 "+myLastFMuser.login);
    if(sessionStorage.getItem("login") === null) {
        var url = window.location.href; // or window.location.href for current url
        var captured = /token=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
        var result = captured ? captured : 'myDefaultValue';
        myLastFMuser.token = Utf8.encode(captured);

        var data = {
            'token': myLastFMuser.token,
            'api_key': myLastFMuser.apikey,
            'method': 'auth.getSession'
        };

        data["api_sig"] = calculateApiSig(data);
        data["format"] = "json";


        $.ajax({
            type: "GET",
            url: urlAudio,
            data: data,
            dataType: 'json',
            //"success" gets called when the returned code is a "200" (successfull request). "error" gets called whenever another code is returned (e.g. 404, 500).
            success: function (res) {

                console.log("Resposta: Name " + res.session.name);// Should return session key.
                console.log("Resposta: Key " + res.session.key);
                myLastFMuser.sessionKey = res.session.key;
                sessionStorage.setItem("mySessionKey",res.session.key);
                myLastFMuser.userName = res.session.name;
                carregarUsuari(res.session.name);
            },
            error: function (xhr, status, error) {
                var errorMessage = xhr.status + ': ' + xhr.statusText
                console.log('Error - ' + errorMessage);
            }
        });
        //reset data o data2
    }else if(sessionStorage.getItem("login") === '1'){
        console.log("2"+myLastFMuser.login);
        mostrarUsuari();
    }else{
        console.log("erorr al carregar l'usuari");
    }

}
function mostrarUsuari(){
    document.getElementById("artistName").innerHTML = sessionStorage.getItem("usuari");
    document.getElementById("artistBio").innerHTML = sessionStorage.getItem("pais");
    document.getElementById("artistImage").src= sessionStorage.getItem("imatge");
}

function carregarUsuari(usuari){
    var data2 = {
        'user': usuari,
        'api_key': myAPI_key
    };
    console.log(usuari);
    data2["method"] = "user.getInfo";
    data2["format"] = "json";

    $.ajax({
        user: "GET",
        url: urlAudio,
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
            myLastFMuser.imageUser = res.user.image[2]['#text'];

            document.getElementById("artistName").innerHTML = res.user.name;
            document.getElementById("artistBio").innerHTML = res.user.country;
            document.getElementById("artistImage").src= res.user.image[2]['#text'];
            usuari = res.user.name;
            sessionStorage.setItem("usuari",usuari);
            sessionStorage.setItem("pais",res.user.country);
            sessionStorage.setItem("imatge",res.user.image[2]['#text']);
            sessionStorage.setItem("login","1");

            myLastFMuser.login = 1;
            console.log("3"+myLastFMuser.login);
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

/********************************** CARREGA AUTOR AMB JQUERY *************************************/

function jqueryLoadDoc() {
    if (sessionStorage.getItem("mySessionKey") == null) {
        console.log("Error no estas authenticat");
    } else {
        var last_url = "http://ws.audioscrobbler.com/2.0/";

        var dadestl = {
            method: 'track.Love',
            artist: Utf8.encode('Muse'),
            track: Utf8.encode('Take a Bow'),
            api_key: myAPI_key,
            token: myLastFMuser.token,
            sk: sessionStorage.getItem("mySessionKey")
        };

        var myapisiglove = calculateApiSig(dadestl);
        console.log("La apiSig de Track love es: " + myapisiglove['api_sig']);
        //delete dadestl["token"];
        dadestl['api_sig'] = myapisiglove['api_sig'];

        $.ajax({
            type: "POST", //both are same, in new version of jQuery type renamed to method
            url: urlAudio,
            data: dadestl,
            dataType: "xml", //datatype especifica el tipus de dada que s'espera rebre del servidor
            success: function (res) {
                processarRespostaLoveTrackJquery(res);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("Error en Love Track to track" + res.track + "de l'artista" + res.artist);
                document.getElementById("demo2").innerHTML = "<h2>Failure</h2>";
            }
        });

        function processarRespostaLoveTrackJquery(xml) {
            txt = $(xml).find('lfm').attr('status');
            if (txt == "ok") {
                document.getElementById("demo2").innerHTML = "<h2>Added Track Love Correct</h2>";
            } else document.getElementById("demo2").innerHTML = "<h2>Failure Track Love</h2>";
        }
    }
}