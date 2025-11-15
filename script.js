document.addEventListener('DOMContentLoaded', function() {
    const containers = ['ab-container', 'sizes']; 

    containers.forEach(id => {
        const container = document.getElementById(id);

        if (container) {
            function changeFont() {
                if (container.className === "regular") {
                    container.className = 'bold';
                } else {
                    container.className = 'regular';
                }
            }

            container.addEventListener('click', changeFont);
            container.style.cursor = 'pointer'; 
        }
    });


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


