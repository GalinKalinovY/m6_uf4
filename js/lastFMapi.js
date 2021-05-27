/**
*  @class lastFMapi - aquesta classe emmatagzema tota la informacio de la api, tant com els valors del usuari, com els tokens, session keys...etc.
*                     
*
* @param apikey - la nostra api key generada.
* @param token - token de la url al entrar.
* @param mySecret - la meva clau secreta generada.
* @param userName - nom d'usuari.
* @param sessionKey - la clau de sessio que despres es genera amb les funcions.
* @param id - id del usuari
* @param realName - nom real del usuari.
* @param urlUser - la url de last fm on hi ha el compte d'usuari.
* @param imageUser - la nostra imatge d'usuari.
* @param countryUser - el pais on vivim.
* @param ageUser - la edat que te l'usuari.
* @param genderUser - el genere de l'usuari, si es M/F.
* @param subscriberUser - els subscriptors del usuari.
* @param playcountUser - el numero de vegades que s'ha reproduit.
* @param bootstrapUser - usuaris bootstrap
* @param registeredUser - el usuari registrat
* @param login - la url de last fm on hi ha el compte d'usuari.
* @param urlAudio - la url del http://ws.audioscrobbler.com/2.0/?, a partir d'aquesta url farem la busqueda dels xml o json.
* @param myLastFMuser -  es la variable que es crida quant volem agafar la informacio de la classe, es instanciada aqui.
*
**/

const myAPI_key="eadafa1e4ae708f5f7046192a4602074";
const myshared_secret="b19b6efed21c4110264fa2393e26bd3a";
const urlAudio = "http://ws.audioscrobbler.com/2.0/?";
class lastFMapi {
    constructor() {
        this.apikey = myAPI_key;
        this.token = null;
        this.mySecret=myshared_secret;
        this.userName = null;
        this.sessionKey = null;
        this.id=null;
        this.realName = null;
        this.urlUser=null;
        this.imageUser=null;
        this.countryUser=null;
        this.ageUser=0;
        this.genderUser=null;
        this.subscriberUser=0;
        this.playcountUser=0;
        this.playlistsUser=0;
        this.bootstrapUser=0;
        this.registeredUser=0;
        this.login=0;
        this.urlAudio =urlAudio;
    }
}
var myLastFMuser = new lastFMapi();
