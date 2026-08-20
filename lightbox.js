// Click any case-study image to view it full size over a dimmed page; click again to return.
(function () {
  var images = document.querySelectorAll('.case-body img, .case-hero-banner img');
  if (!images.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.hidden = true;

  var full = document.createElement('img');
  overlay.appendChild(full);
  document.body.appendChild(overlay);

  function open(source) {
    full.src = source.currentSrc || source.src;
    full.alt = source.alt || '';
    overlay.hidden = false;
    document.body.classList.add('lightbox-open');
  }

  function close() {
    overlay.hidden = true;
    document.body.classList.remove('lightbox-open');
    full.removeAttribute('src');
  }

  images.forEach(function (img) {
    img.classList.add('zoomable');
    img.addEventListener('click', function () {
      open(img);
    });
  });

  overlay.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.hidden) close();
  });
})();
