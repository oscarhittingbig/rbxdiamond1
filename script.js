document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-feature');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove the 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Add the 'active' class to the clicked button
            button.classList.add('active');
        });
    });
});
