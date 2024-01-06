const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};
$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#clickMeButton").click(() => {
    clickMe();
  });
});

let socket = io();
socket.on("number", (msg) => {
  console.log("Random number " + msg);
});
