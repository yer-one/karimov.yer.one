window.addEventListener("load", Ready);

function Ready() {
  if (window.File && window.FileReader) { //These are the relevant HTML5 objects that we are going to use
    document.getElementById('UploadButton').addEventListener('click', StartUpload);
    document.getElementById('FileBox').addEventListener('change', FileChosen);
  } else {
    document.getElementById('UploadArea').innerHTML = "Your Browser Doesn't Support The File API Please Update Your Browser";
  }
}


var SelectedFile;
function FileChosen(evnt) {
  SelectedFile = evnt.target.files[0];
  document.getElementById('NameBox').value = SelectedFile.name;
}
