
const header = document.getElementById('header');
console.log(header)

const fileUploader = document.getElementById('file-upload');

fileUploader.addEventListener('change', (e) => {
    const files = e.target.files;
    console.log('files', files);
    const feedbackEl = document.getElementById('feedback');

    let message = `file ${files[0].name} uploaded!`;
    feedbackEl.textContent = message;
});








window.onload = function() {
    Particles.init({
      selector: '.background',
      connectParticles: true,
    });
  };


function hi() {
    console.log('hi');
}