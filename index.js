$( document ).on( "load", function() {
  $.mobile.loader.prototype.options.text = "loading";
  $.mobile.loader.prototype.options.textVisible = false;
  $.mobile.loader.prototype.options.theme = "a";
  $.mobile.loader.prototype.options.html = "";
});

$.mobile.loading( "show", {
  text: "foo",
  textVisible: true,
  theme: "z",
  html: ""
});
