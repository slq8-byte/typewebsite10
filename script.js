function forceRepaint(element) {
  element.style.display = 'none';
  // Access offsetHeight to force reflow
  element.offsetHeight;
  element.style.display = '';
}

// Add event listeners to both .ab-container and .sizes-container
document.querySelectorAll('.ab-container, .sizes-container').forEach(function(el) {
  el.addEventListener('click', function() {
    // Toggle the 'active' class which triggers bold in CSS
    this.classList.toggle('active');
    // Safari workaround: force repaint
    forceRepaint(this);
  });
});
