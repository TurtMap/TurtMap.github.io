var ros = new ROSLIB.Ros({
 url : 'ws://10.7.16.70:9090'
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

var listener = new ROSLIB.Topic ({
    ros: ros,
    name : '/scan',
    messageType : 'sensor_msgs/LaserScan'
});

function startRobot() {
  document.getElementById("start").style.display = "none";document.getElementById("stop").style.display = "block";
  
  var cmdVel = new ROSLIB.Topic({
    ros : ros,
    name : '/cmd_vel',
    messageType : 'geometry_msgs/Twist'
  });

 
  listener.subscribe(function(message) {
    var ranges = new Array(180).fill(0);
    for (let i = 0; i < 180; i ++) {
        if (message.ranges[i+180] == 0) {
            ranges[i] = 100;
        }
        else {
          ranges[i] = message.ranges[i+ 180];
        }
    }
    var twist = new ROSLIB.Message({
      linear : {
        x : 0.0,
        y : 0.0,
        z : 0.0
      },
      angular : {
        x : 0.0,
        y : 0.0,
        z : 0.0
      }
    });
    var size = ranges.length;
    var distance = ranges[size - 1];
    if (distance < 0.4) {
      twist.linear.x = 0;
      var decider = Math.random();
      if (decider < 0.5) {
        twist.angular.z += 8.40;
      }
      else {
        twist.angular.z -= 8.40;
      }
    }
    else {
      twist.linear.x = 0.2;
      twist.angular.z = 0;
    }
    cmdVel.publish(twist);

  });
}

function stopRobot() {
  listener.unsubscribe()

  var cmdVel = new ROSLIB.Topic({
  ros : ros,
  name : '/cmd_vel',
  messageType : 'geometry_msgs/Twist'
  });

  var twist = new ROSLIB.Message({
    linear : {
      x : 0.0,
      y : 0.0,
      z : 0.0
    },
    angular : {
      x : 0.0,
      y : 0.0,
      z : 0.0
    }
  });

  cmdVel.publish(twist);
}
