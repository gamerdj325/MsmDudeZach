function message(msg){
    if (window.webkitNotifications) {
        if (window.webkitNotifications.checkPermission() == 0) {
        notification = window.webkitNotifications.createNotification(
          'picture.png', 'Title', msg);
                    notification.onshow = function() { // when message shows up
                        setTimeout(function() {
                            notification.close();
                        }, 1000); // close message after one second...
                    };
        notification.show();
      } else {
        window.webkitNotifications.requestPermission(); // ask for permissions
      }
    }
    else {
        alert(msg);// fallback for people who does not have notification API; show alert box instead