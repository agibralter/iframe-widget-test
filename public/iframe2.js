$(function () {
  var token;
  token = $("#token").text();
  $("#local-storage").text(localStorage.getItem("token"));
});
