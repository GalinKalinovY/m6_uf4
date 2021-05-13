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
  xhttp.open("GET", "cd_catalog.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Artist</th><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
        x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}