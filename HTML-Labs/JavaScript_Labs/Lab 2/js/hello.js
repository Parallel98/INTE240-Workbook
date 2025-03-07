var today = new Date();
var hourNow = today.getHours();
var minutesNow = today.getMinutes();

var greeting;
if (hourNow > 18) {
 greeting = 'Good evening';
}
else if (hourNow > 12) {
 greeting = 'Good afternoon';
}
else if (hourNow > 0) {
 greeting = 'Good morning';
}
else {
 greeting = 'Welcome';
}
 {

}

var currentTime = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
 document.write(greeting);
 document.write("<br>");
 document.write("The time is " + "<br>" + currentTime);