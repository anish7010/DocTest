function getData(){
  var xmlHttp = new XMLHttpRequest();
  var url = "http://localhost:3000/db";
  xmlHttp.open("GET", url, true);
  xmlHttp.send();
  
  xmlHttp.onreadystatechange = function() { 
      if(this.readyState == 4 && this.status == 200){
        var myarr = JSON.parse(this.responseText);
        var dataObj = JSON.stringify(myarr);
        document.getElementById('content').innerHTML = dataObj;
    }  
  }
}