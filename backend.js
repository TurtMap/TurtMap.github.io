  var ros = new ROSLIB.Ros({
    url : 'wss://10.7.16.70:44539/'
  });

  ros.on('connection', function() {
    console.log('Connected to websocket server.');
  });

  ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
  });

  ros.on('close', function() {
    console.log('Connection to websocket server closed.');
  });


function myFunction() {
    document.getElementById("demo").style.color = "red";
}
