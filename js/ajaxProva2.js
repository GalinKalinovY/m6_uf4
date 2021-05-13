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
      myFunction(this);
     //document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "artistes.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var xmlDoc2 = xml.responseXML;
  var xmlDoc3 = xml.responseXML;

  var mybid = xmlDoc.getElementsByTagName("mbid")[0].childNodes[0].nodeValue ;
  var table="<tr><th>Title</th><th>Artist</th></tr>";
  table += "<td>"+"mBID"+"</td>";
  table += "<td>" + mybid +    "</td>";


    var x = xmlDoc2.getElementsByTagName("album");
    for (i = 0; i <x.length; i++) {
      table += "<tr><td>" +
      x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("artist")[0].childNodes[0].nodeValue +
      "</td></tr>"+
      "<td>" +
      x[i].getElementsByTagName("url")[0].childNodes[0].nodeValue +
      "</td>" +
      x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue +
      "</td></tr>"+ "<td>" +
          x[i].getElementsByTagName("tracks")[0].getElementsByTagName("track")[0].getElementsByTagName("name")[0].childNodes[0].nodeValue +
          "</td>"
      ;
    }

  document.getElementById("demo").innerHTML = table;
}