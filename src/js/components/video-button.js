const videoButtons = document.querySelectorAll('[data-video-btn]');

if(videoButtons.length >= 1 ) {
  videoButtons.forEach(btn => {
    btn.addEventListener('click', (e)=>{
      const src = e.target.dataset.src;

      e.target.closest('[data-video-wrapper]').querySelector('iframe').src = src;
      e.target.closest('[data-video-wrapper]').querySelector('[data-video-decor]').classList.add('d-none');
    });
  });
}
