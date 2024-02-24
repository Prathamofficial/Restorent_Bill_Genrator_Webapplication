document.addEventListener('DOMContentLoaded', function() {
    const moonIcon = document.getElementById('moon');
    const sunIcon = document.getElementById('sun');

    moonIcon.addEventListener('click', function() {
        toggleDarkMode();
    });

    sunIcon.addEventListener('click', function() {
        toggleDarkMode();
    });

    function toggleDarkMode() {
        const darkModeDiv = document.querySelector('.dark_mode');

        if (darkModeDiv.classList.contains('dark')) {
            // Switch to light mode
            darkModeDiv.classList.remove('dark');
            moonIcon.style.display = 'inline-block';
            sunIcon.style.display = 'none';
        } else {
            // Switch to dark mode
            darkModeDiv.classList.add('dark');
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline-block';
        }
    }
});
