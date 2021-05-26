function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 0){
      console.log("no s'ha inicialitzat el request");
    }else if(this.readyState == 1){
      console.log("conexio al servidor feta");
    }else if(this.readyState == 2){
      console.log("request recivida");
    }else if(this.readyState == 3){
      console.log("resposta recivida");
    }else if (this.readyState == 4 && this.status == 200) {
      console.log("request i la resposta han acabat.");
      processarResposta(this);
     //document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  var urlquery = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=eadafa1e4ae708f5f7046192a4602074&artist=Young%20Thug&album=Slime%20Season%203";
  xhttp.open("GET", urlquery, true);
  xhttp.send();
}
function processarResposta(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var xmlDoc2 = xml.responseXML;
  var xmlDoc3 = xml.responseXML;

  //var mybid = xmlDoc.getElementsByTagName("mbid")[0].childNodes[0].nodeValue ;
  var table="<tr><th colspan='2'>Young Thug</th></tr>";
 // table += "<td>"+"mBID"+"</td>";
 // table += "<td>" + mybid +    "</td>";


    var x = xmlDoc2.getElementsByTagName("album");
    for (i = 0; i <x.length; i++) {
      table += "<tr><td>" +
      x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
      "</td><td>" +
          "<img src=" + x[i].getElementsByTagName("image")[2].childNodes[0].nodeValue + "/>" +
      "</td></tr>"+
      "<td>" +
      "Playcount"+
      "</td>"+"<td>"+
          x[i].getElementsByTagName("playcount")[0].childNodes[0].nodeValue
          +"</td>"+"</tr>"+"<td>"+
          "Track Rank 1"
          +"</td>"+"<td>" +
          x[i].getElementsByTagName("tracks")[0].getElementsByTagName("track")[0].getElementsByTagName("name")[0].childNodes[0].nodeValue +
          "</td>"+"<tr><td>"+
          x[i].getElementsByTagName("tracks")[0].getElementsByTagName("track")[0].getElementsByTagName("artist")[0].getElementsByTagName("url")[0].childNodes[0].nodeValue +
          "</td><td>" +
          "Duration: "+x[i].getElementsByTagName("tracks")[0].getElementsByTagName("track")[0].getElementsByTagName("duration")[0].childNodes[0].nodeValue+
          "</td></tr>"+
          "<tr><td>"+ "Track Rank 2" +"</td>"+"<td>" +
          x[i].getElementsByTagName("tracks")[0].getElementsByTagName("track")[1].getElementsByTagName("name")[0].childNodes[0].nodeValue +
          "</td>"+"<tr><td>"+
          x[i].getElementsByTagName("tracks")[0].getElementsByTagName("track")[1].getElementsByTagName("artist")[0].getElementsByTagName("url")[0].childNodes[0].nodeValue +
          "</td><td>" +
          "Duration: "+x[i].getElementsByTagName("tracks")[0].getElementsByTagName("track")[1].getElementsByTagName("duration")[0].childNodes[0].nodeValue+
          "</td></tr>"+
          "<tr><td>"+ "Track Rank 3" +"</td>"+"<td>" +
          x[i].getElementsByTagName("tracks")[0].getElementsByTagName("track")[2].getElementsByTagName("name")[0].childNodes[0].nodeValue +
          "</td>"+"<tr><td>"+
          x[i].getElementsByTagName("tracks")[0].getElementsByTagName("track")[2].getElementsByTagName("artist")[0].getElementsByTagName("url")[0].childNodes[0].nodeValue +
          "</td><td>" +
          "Duration: "+x[i].getElementsByTagName("tracks")[0].getElementsByTagName("track")[2].getElementsByTagName("duration")[0].childNodes[0].nodeValue+
          "</td></tr>"+"<tr><td>"+ "Published" +"</td>"+"<td>" +
          x[i].getElementsByTagName("wiki")[0].getElementsByTagName("published")[0].childNodes[0].nodeValue +
          "</td>"+"</tr>"
      ;
    }
  document.getElementById("albumYoungThug").innerHTML = table;
}

/**************************  ARTISTA 2  ****************************************************/

function loadDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 0){
      console.log("no s'ha inicialitzat el request");
    }else if(this.readyState == 1){
      console.log("conexio al servidor feta");
    }else if(this.readyState == 2){
      console.log("request recivida");
    }else if(this.readyState == 3){
      console.log("resposta recivida");
    }else if (this.readyState == 4 && this.status == 200) {
      console.log("request i la resposta han acabat.");
      processarResposta2(this);
    }
  };
  var urlquery = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=eadafa1e4ae708f5f7046192a4602074&artist=Travis%20Scott&album=Birds%20in%20the%20Trap%20Sing%20McKnight";
  xhttp.open("GET", urlquery, true);
  xhttp.send();
}
function processarResposta2(xml) {
  var i;
  var xmlDoc2 = xml.responseXML;

  var table="<tr><th colspan='2'>Travis Scott</th></tr>";

  var x = xmlDoc2.getElementsByTagName("album");
  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
        x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
        "</td><td>" +
        "<img src=" + x[i].getElementsByTagName("image")[2].childNodes[0].nodeValue + "/>" +
        "</td></tr>"+
        "<td>" +
        "Playcount"+
        "</td>"+"<td>"+
        x[i].getElementsByTagName("playcount")[0].childNodes[0].nodeValue
        +"</td>"+"</tr>"+"<td>"+
        "Tag"
        +"</td>"+"<td>" +
        x[i].getElementsByTagName("tags")[0].getElementsByTagName("tag")[0].getElementsByTagName("name")[0].childNodes[0].nodeValue +
        "</td>"+"<tr><td>"+
        x[i].getElementsByTagName("tags")[0].getElementsByTagName("tag")[0].getElementsByTagName("url")[0].childNodes[0].nodeValue +
        "</td><td>" +
        "Published "+x[i].getElementsByTagName("wiki")[0].getElementsByTagName("published")[0].childNodes[0].nodeValue+
        "</td></tr>"+
        "<tr><td>"+ "Tag" +"</td>"+"<td>" +
        x[i].getElementsByTagName("tags")[0].getElementsByTagName("tag")[1].getElementsByTagName("name")[0].childNodes[0].nodeValue +
        "</td>"+"<tr><td>"+
        x[i].getElementsByTagName("tags")[0].getElementsByTagName("tag")[1].getElementsByTagName("url")[0].childNodes[0].nodeValue +
        "</td><td>"+
          x[i].getElementsByTagName("tags")[0].getElementsByTagName("tag")[3].getElementsByTagName("url")[0].childNodes[0].nodeValue +
        "</td></tr>"
    ;
  }
  document.getElementById("albumTravisScott").innerHTML = table;
}