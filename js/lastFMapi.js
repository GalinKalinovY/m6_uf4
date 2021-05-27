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