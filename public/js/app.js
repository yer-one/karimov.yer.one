// Init application
App = new Choy();

// Configure an application
App.setAppConf("Video uploaded application", "http://localhost:300/");
App.init();
App.setDebug(true);

// Configure a dropzone.js
var dropzone = new Dropzone("#drop", {
  maxFilesize: "100MB"
});

var message = getElementById('message');

dropzone.on("complete", (file) => {
  dropzone.removeFile(file);
  message.write();

});

function save() {
  App.HTTP.post("/video/upload", function(err, response) {
    if (err) return console.error(err);

    console.log(response);
  });
}
