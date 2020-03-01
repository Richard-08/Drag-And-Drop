const dropArea = document.querySelector('.drop-area');


/* /////////////// Handle events //////////////// */

const events = ['dragenter', 'dragover', 'dragleave', 'drop'];
function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

events.forEach(event => {
    dropArea.addEventListener(event, preventDefaults, false);
});

/* ////////////// Visualisation Drop Area ///////////// */

function highlight() {
    dropArea.classList.add('highlight');
}

function unhighlight() {
    dropArea.classList.remove('highlight');
}

['dragenter', 'dragover'].forEach(event => {
    dropArea.addEventListener(event, highlight, false);
});

['dragleave', 'drop'].forEach(event => {
    dropArea.addEventListener(event, unhighlight, false);
});


/* /////////////////// Progress bar //////////////////// */

let filesDone = 0;
let filesToDo = 0;
const progressBar = document.querySelector('.progress-bar');

function initializeProgress(numFiles) {
    progressBar.value = 0;
    filesDone = 0;
    filesToDo = numFiles;
}

function progressDone() {
    filesDone += 1;
    progressBar.value = filesDone / filesToDo * 100;
}


/* /////////////////// Handling files ////////////////// */

function handleFiles(files) {
    files = [...files];
    initializeProgress(files.length);
    files.forEach(uploadFile);
}

function handleDrop(event) {
    const data = event.dataTransfer;
    const files = data.files;
    handleFiles(files);
}

function uploadFile(file) {
    const url = 'url for load files'; /* ??? */
    let formData = new FormData();

    formData.append('file', file);

    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(progressDone)
        .catch(() => {/* Error */});
}

dropArea.addEventListener('drop', handleDrop, false);