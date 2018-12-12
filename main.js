var express = require('express');
var app = express();



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(5000, function () {
  console.log('Example app listening on port 3000!');
});


var fs = require("fs");

var myObj = {

  "user": {
  
  "username": "paoluv_infinity",
  "full_name": "Paola Cristina Nieves Jimenez",
  "biography": "Catecumena"
 },
  
  "timeline_posts":{
    "count": 368,
  
  "post_list": [
        {
     "photo_url":"https://scontent-mia3-1.cdninstagram.com/vp/3547cd4639576a0ae9b514e4a940866e/5C9792A2/t51.2885-15/e35/36085132_1842867236019877_5762188520143716352_n.jpg",
     "text": "Happy Birthday to my beautiful cousin love u Elmo",
     "location" : "Miami",
  
  "user": {
  "username": "paoluv_infinity"}
  
}]}
};


//convert object to json string
var myJSON = JSON.stringify(myObj);
console.log(myJSON);


//convert string to Json Object
console.log(JSON.parse(myJSON)); 




 





fs.writeFile("./object.json", JSON.stringify(myObj, null, 4), (err) => {
  if (err) {
      console.error(err);
      return;
  };
  console.log("File has been created");
});




/*

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
xhr.responseType= 'json';
xhr.onreadystatechange = () =>{

  if (xhr.readyState === XMLHttpRequest.DONE) {
   return xhr.response;
}

}

xhr.open('GET',url);
xhr.send();
*/


