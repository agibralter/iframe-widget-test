$(function () {
  var token;
  token = $("#token").text();
  $("#local-storage").text(localStorage.getItem("token"));

  // Borrowed from http://www.w3schools.com/js/js_cookies.asp.
  function setCookie(c_name, value, exdays) {
    var exdate, c_value;
    exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    c_value = encodeURIComponent(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
  }

  function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i += 1) {
      x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
      y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
      x = x.replace((/^\s+|\s+$/g), "");
      if (x === c_name) {
        return decodeURIComponent(y);
      }
    }
  }

  setCookie("foo", "bar-" + Math.random(), 5);
  $("#js-cookie").text(getCookie("foo"));
});
