document.addEventListener('DOMContentLoaded', function() {
    const containerIds = ['ab-container', 'sizes']; // match IDs exactly

    function forceRepaint(element) {
        element.style.display = 'none';
        element.offsetHeight; // Force reflow
        element.style.display = '';
    }

    containerIds.forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.addEventListener('click', function() {
                this.classList.toggle('active');
                forceRepaint(this); // Safari workaround
            });
            container.style.cursor = 'pointer';
        }
    });

    // Dropdown logic remains unchanged
    const dropdownButton = document.getElementById('dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropdownButton && dropdownContent) {
        dropdownButton.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdownContent.classList.toggle('show');
        });

        window.addEventListener('click', function(event) {
            if (!event.target.closest('.dropdown')) {
                dropdownContent.classList.remove('show');
            }
        });
    }
});
