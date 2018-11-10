window.addEventListener("load", connect());
var socket;
function connect() {
    // create websocket instance
    socket = new WebSocket("ws://" + location.hostname + ":8888/ws");
    // add event listener reacting when message is received
    socket.onmessage = function (event) {
        // put text into our output div
        console.log(event.data);
        var msg = new SpeechSynthesisUtterance();
        window.speechSynthesis.speak(msg);
        var newmessage = JSON.parse(event.data);
        console.log(newmessage);
        if (newmessage.type == "chat") {
            getMessage(newmessage);
         }if(newmessage.type == "tabs"){
             tabs = newmessage;
             cleartabs();
             buildtabs();
         }
     };
     socket.onclose = function (e) {
         console.log("Connection closed");
         togglechat(false);
         console.log("Try to reconnect");
         connect();
     };
     socket.onopen = function (){
         console.log("Connected to Websocket");
         togglechat(true);
     };
 }
function sendsocket(type,message) {
    var jsontext = {type: type,message:message};
    jsontext = JSON.stringify(jsontext);
    console.log(jsontext);
    
    socket.send(jsontext);
}