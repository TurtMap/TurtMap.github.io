var ros = new ROSLIB.Ros({
  url : 'ws://10.7.120.73:9090'
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

var cmdVel = new ROSLIB.Topic({
ros : ros,
name : '/cmd_vel',
messageType : 'geometry_msgs/Twist'
});

var twist = new ROSLIB.Message({
linear : {
  x : 0.1,
  y : 0.2,
  z : 0.3
},
angular : {
  x : -0.1,
  y : -0.2,
  z : -0.3
}
});
cmdVel.publish(twist);
