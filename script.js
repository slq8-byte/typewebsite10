document.addEventListener('DOMContentLoaded', function() {
  const containers = ['ab-container', 'sizes'];

  containers.forEach(id => {
    const container = document.getElementById(id);
    if (!container) return;

    // ensure starting state
    if (!container.classList.contains('regular') && !container.classList.contains('bold')) {
      container.classList.add('regular');
    }

    container.addEventListener('click', function () {
      // toggle bold class
      container.classList.toggle('bold');
      container.classList.toggle('regular');

      // Force repaint in Safari: two-step reflow without visible flicker
      // (safe, minimal)
      container.style.transform = 'translateZ(0)'; // promote to its own layer
      // small no-op reflow
      void container.offsetWidth;
      // remove the temporary transform to stay consistent
      container.style.transform = '';
    });

    container.style.cursor = 'pointer';
  });

  // Dropdown code unchanged
  const dropdownButton = document.getElementById('dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  if (dropdownButton && dropdownContent) {
    dropdownButton.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
      if (!event.target.closest('.dropdown')) {
        if (dropdownContent.classList.contains('show')) {
          dropdownContent.classList.remove('show');
        }
      }
    });
  }
});
