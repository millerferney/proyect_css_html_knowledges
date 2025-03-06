document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.previousElementSibling;
            content.classList.toggle('show');
            this.textContent = content.classList.contains('show') ? 'Read less' : 'Read more';
        });
    });
});