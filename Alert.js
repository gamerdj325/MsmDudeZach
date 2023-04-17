var notification = new Notification("Hi there!", {body: "Remeber to be on fullscreen! "});
setTimeout(function() {notification.close()}, 1000);