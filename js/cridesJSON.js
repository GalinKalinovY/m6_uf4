/**
*  Funcio: loadDoc3 - la funcio la cridem quant volem mostrar els albums del artista en format json, ho fem amb httprequest la consulta.
*                     La primera part de la funcio el que fa es conectar-se i mirar si tot ha funcionat, sino enviara un error. Si tot funciona
*                     correctamement sen anira a dins de la funcio processarResposta() que es troba a dins i alla es posara totes les dades json 
*                     en la taula que cridarem desde el html.
*
* @param urlquery - tindrem la url del query que despres s'agafara per poder buscar el elements.
* @param txt - aqui tindrem tota la part de la taula que agafe els elements amb format json i els pose a dins dels td i els tr.
*
**/

function loadDoc3() {
  if (window.XMLHttpRequest) {
    // Mozilla, Safari, IE7+
    httpRequest = new XMLHttpRequest();
    console.log("Creat l'objecte a partir de XMLHttpRequest.");
  } else if (window.ActiveXObject) {
    // IE 6 i anteriors
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    console.log("Creat l'objecte a partir de ActiveXObject.");
  } else {
    console.error("Error: Aquest navegador no suporta AJAX.");
  }

  //	httpRequest.onload = processarResposta;
  httpRequest.onprogress = mostrarProgres;
  var urlquery = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=eadafa1e4ae708f5f7046192a4602074&artist=A$ap%20Rocky&album=AT.LONG.LAST.A$AP&format=json";
  httpRequest.onreadystatechange = processarCanviEstat;

  httpRequest.responseType = 'json';
  httpRequest.open('GET', urlquery, true);
  httpRequest.send();

  function processarCanviEstat() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
      console.log("Exit transmissio.");
      processarResposta(httpRequest.response);
    }
  }

  function processarResposta(dades) {
    var txt;
      txt += "<table border='1'><tr><th colspan='2'>A$ap Rocky</th></tr>" +
          "<tr><td width='321px'>" + dades.album.name + "</td><td><img src="+ dades.album.image[2]["#text"] + "/></td></tr>" +
          "<tr><td>"+ dades.album.tags.tag[0].url+"</td><td>"+ dades.album.tags.tag[0].name+"</td></tr>"+
          "<tr><td>"+ dades.album.tags.tag[1].url+"</td><td>"+ dades.album.tags.tag[1].name+"</td></tr>"+
          "<tr><td>"+ dades.album.tags.tag[2].url+"</td><td>"+ dades.album.tags.tag[2].name+"</td></tr>"+
          "<tr><td>"+ dades.album.tags.tag[3].url+"</td><td>"+ dades.album.tags.tag[3].name+"</td></tr>"+
          "<tr><td>"+ dades.album.tags.tag[4].url+"</td><td>"+ dades.album.tags.tag[4].name+"</td></tr>"+
          "<tr><td>"+ "Playcount"+"</td><td>"+dades.album.playcount+"</td></tr>"+
          "<tr><td>"+ "Published"+"</td><td>"+dades.album.wiki.published+"</td></tr></table>"
      ;

    document.getElementById("albumASAPROCKY").innerHTML = txt;
  }

  function mostrarProgres(event) {
    if (event.lengthComputable) {
      var progres = 100 * event.loaded / event.total;
      console.log("Completat: " + progres + "%");
    } else {
      console.log("No es pot calcular el progrés");
    }
  }
}

/************************************** SEGONA PETICIO ************************************************/
/**
*  Funcio: loadDoc4 - la funcio la cridem quant volem mostrar els albums del artista en format json, ho fem amb httprequest la consulta.
*                     La primera part de la funcio el que fa es conectar-se i mirar si tot ha funcionat, sino enviara un error. Si tot funciona
*                     correctamement sen anira a dins de la funcio processarResposta() que es troba a dins i alla es posara totes les dades json 
*                     en la taula que cridarem desde el html.
*
* @param urlquery - tindrem la url del query que despres s'agafara per poder buscar el elements.
* @param txt - aqui tindrem tota la part de la taula que agafe els elements amb format json i els pose a dins dels td i els tr.
*
**/

function loadDoc4() {
  if (window.XMLHttpRequest) {
    // Mozilla, Safari, IE7+
    httpRequest = new XMLHttpRequest();
    console.log("Creat l'objecte a partir de XMLHttpRequest.");
  } else if (window.ActiveXObject) {
    // IE 6 i anteriors
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    console.log("Creat l'objecte a partir de ActiveXObject.");
  } else {
    console.error("Error: Aquest navegador no suporta AJAX.");
  }

  //	httpRequest.onload = processarResposta;
  httpRequest.onprogress = mostrarProgres2;
  var urlquery = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=eadafa1e4ae708f5f7046192a4602074&artist=50%20Cent&album=Get%20Rich%20or%20Die%20Tryin%27&format=json";
  httpRequest.onreadystatechange = processarCanviEstat2;

  httpRequest.responseType = 'json';
  httpRequest.open('GET', urlquery, true);
  httpRequest.send();

  function processarCanviEstat2() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
      console.log("Exit transmissio.");
      processarResposta(httpRequest.response);
    }
  }

  function processarResposta(dades) {
    let txt;
    txt += "<table><tr><th colspan='2'>50 Cent</th></tr>" +
        "<tr><td width='335px'>" + dades.album.name + "</td><td><img src="+ dades.album.image[2]["#text"] + "/></td></tr>" +
        "<tr><td>"+ dades.album.tags.tag[0].url+"</td><td>"+ dades.album.tags.tag[0].name+"</td></tr>"+
        "<tr><td>"+ dades.album.tags.tag[1].url+"</td><td>"+ dades.album.tags.tag[1].name+"</td></tr>"+
        "<tr><td>"+ dades.album.tags.tag[2].url+"</td><td>"+ dades.album.tags.tag[2].name+"</td></tr>"+
        "<tr><td>"+ dades.album.tags.tag[3].url+"</td><td>"+ dades.album.tags.tag[3].name+"</td></tr>"+
        "<tr><td>"+ dades.album.tags.tag[4].url+"</td><td>"+ dades.album.tags.tag[4].name+"</td></tr>"+
        "<tr><td>"+ "Playcount"+"</td><td>"+dades.album.playcount+"</td></tr>"+
        "<tr><td>"+ "Published"+"</td><td>"+dades.album.wiki.published+"</td></tr></table>"
    ;

    document.getElementById("album50CENT").innerHTML = txt;
  }

  function mostrarProgres2(event) {
    if (event.lengthComputable) {
      var progres = 100 * event.loaded / event.total;
      console.log("Completat: " + progres + "%");
    } else {
      console.log("No es pot calcular el progrés");
    }
  }
}
