$(function () {
  var token;

  token = $("#token").text();

  $("#cookies").text(document.cookie);

  localStorage.setItem("token", token);
  $("#local-storage").text(localStorage.getItem("token"));

  $.get("/ajax", function (response) {
    $("#ajax").text(response);
  });
});
