$(function () {
  var dyn_iframe_post, dyn_iframe_get, dyn_form, dyn_form_html, token;

  token = $("#token").text();

  dyn_form_html = "<form " + _.inject({
    id:     "form-dyn",
    target: "iframe-dyn-post",
    action: "http://iframe-widget-test-3:9393/iframe-xdomain",
    method: "POST"
  }, function (memo, v, k) {
    return memo.concat([k + "=\"" + v + "\""]);
  }, []).join(" ") + ">";

  dyn_form_html += '<input type="hidden" value="' + token + '" name="token"/>';
  dyn_form_html += "</form>";

  dyn_form = $(dyn_form_html);
  dyn_iframe_post = $("<iframe>", {
    name:        "iframe-dyn-post",
    "data-next": "http://iframe-widget-test-3:9393/iframe-xdomain2",
    border:      "1px"
  });
  dyn_iframe_get = $("<iframe>", {
    name:        "iframe-dyn-get",
    "data-next": "http://iframe-widget-test-4:9393/iframe-xdomain2",
    border:      "1px",
    src:         "http://iframe-widget-test-4:9393/iframe-xdomain?token=" + token
  });

  $("body").append(dyn_form);
  $("#dyn-get").append(dyn_iframe_get);
  $("#dyn-post").append(dyn_iframe_post);

  // Submit forms to load POST iframes
  $("#form").submit();
  dyn_form.submit();

  setTimeout(function () {
    $("iframe").each(function () {
      var $this = $(this);
      $this.after($("<iframe>", {
        name:   "iframe-dyn-get",
        border: "1px",
        src:    $this.data("next")
      }));
    });
  }, 2000);
});
