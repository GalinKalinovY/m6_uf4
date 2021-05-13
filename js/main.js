var myAPI_key="eadafa1e4ae708f5f7046192a4602074";
var myshared_secret="b19b6efed21c4110264fa2393e26bd3a";

var url = window.location.href; // or window.location.href for current url
var captured = /token=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
var result = captured ? captured : 'myDefaultValue';
console.log(captured);


function calculateApiSignatureStack()
{

    // Set elsewhere but hacked into this example:
    var last_fm_data = {
        'last_token':captured,
        'user': 'Gkalinov',
        'secret': 'b19b6efed21c4110264fa2393e26bd3a'
    };

    // Kick it off.
    last_fm_call('auth.getSession', {'token': last_fm_data['last_token']});


    // Low level API call, purely builds a POSTable object and calls it.
    function last_fm_call(method, data){

        //data seria {'token': last_fm_data['last_token']} que seria captured o sessionStoragemyToken
        // param data - dictionary.Populate Values on the Object s you'll see below the Key values can be any object and are not limited to Strings.
        last_fm_data[method] = false;
        // Somewhere to put the result after callback.

        // Append some static variables
        data.api_key = "eadafa1e4ae708f5f7046192a4602074";
        //data['format'] = 'json';
        data['method'] = method;

        post_data = last_fm_calculate_apisig(data);
        /*
        .*/
        console.log("Post data: Last token " + post_data.token + "ApiKey: "+ post_data.api_key + "ApiSig: " + post_data.api_sig);
        sessionStorage.setItem("myApiSig",post_data.api_sig );

        var last_url="http://ws.audioscrobbler.com/2.0/?";
        $.ajax({
            type: "GET",
            url: last_url,
            data : 'method=auth.getSession' +
                '&token='+
                captured+
                '&api_key=eadafa1e4ae708f5f7046192a4602074' +
                '&api_sig='+
                post_data.api_sig+
                '&format=json',
            //data: post_data,
            dataType: 'json',
            //"success" gets called when the returned code is a "200" (successfull request). "error" gets called whenever another code is returned (e.g. 404, 500).
            success: function(res){
                //No caldria aquesta instrucció perque ja guaredem els que ens convé en sessionStorage
                last_fm_data[method] = res;
                //var	myresposta = JSON.parse(res);
                console.log("Resposta: Name " + res.session.name);// Should return session key.
                console.log("Resposta: Key " + res.session.key);

                //store session key for further authenticate operations...
                sessionStorage.setItem("mySessionUser", res.session.name);
                sessionStorage.setItem("mySessionKey", res.session.key);
            },
            error : function(xhr, status, error){
                var errorMessage = xhr.status + ': ' + xhr.statusText
                console.log('Error - ' + errorMessage);
            }
        });
    }

    function last_fm_calculate_apisig(params){

        //Crec que només necessitem apikey, token i secret i no necessitem params, els podem treure de sessionStorage
        //Calcula l'apiSig a partir dels valors d'abans...
        ss = "";
        st = [];
        so = {};
        so['api_key'] = params['api_key'];
        so['token'] = params['token'];
        Object.keys(params).forEach(function(key){
            st.push(key); // Get list of object keys
        });
        st.sort(); // Alphabetise it
        st.forEach(function(std){
            ss = ss + std + params[std]; // build string
        });
        ss += last_fm_data['secret'];
        // console.log(ss + last_fm_data['secret']);
        //Segons documentacio : https://www.last.fm/api/webauth
        //api signature = md5("api_keyxxxxxxxxmethodauth.getSessiontokenxxxxxxxmysecret")
        //OBJECTIU NOSTRE SERA ACONSEGUIR UNA LINEA COM AQUESTA
        // api_keyAPIKEY1323454formatjsonmethodauth.getSessiontokenTOKEN876234876SECRET348264386
        //hashed_sec = $.md5(unescape(encodeURIComponent(ss)));
        var hashed_sec = md5(unescape(encodeURIComponent(ss))); // "2063c1608d6e0baf80249c42e2be5804"
        console.log("La apiSig es: " + hashed_sec);
        so['api_sig'] = hashed_sec; // Correct when calculated elsewhere.
        return so; // Returns signed POSTable object
    }
}