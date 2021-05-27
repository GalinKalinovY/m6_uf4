/**
*  Funcio: myLoginFunction - el que fa la funcio es quant es cridata es conecte a la api de last fm amb la api key i redireccione al mainpage.
*
* @param myapplication_name - nom de la app
* @param myAPI_key - el meu api key generat, el necessitarem després per generar el seassion key i a les altres funcions.
* @param myshared_secret - el meu secret key generat per last fm.
*
* @param url - aqui tindrem tota la url de la web, la primera part es on es conecte per fer el auth i la segona part es on ens redireccione.
* @param window.location.replace() - posem la url a dins perque quant s'executi ens reeinvi.
**/

var myapplication_name="api classe m6";
var myAPI_key="eadafa1e4ae708f5f7046192a4602074";
var myshared_secret="b19b6efed21c4110264fa2393e26bd3a";

function myLoginFunction(){
    /*
    params api_key ( my api key)
    cb the web that goes when user is authenticated relative path ( depends on the server is launched): http://localhost:3000/mainpage.ht*/
    var url= 'http://www.last.fm/api/auth/?api_key=eadafa1e4ae708f5f7046192a4602074&cb=http://localhost:63342/m6_uf4/mainpage.html';

    window.location.replace(url);
}
