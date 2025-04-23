document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon'); // Biểu tượng menu
    const nav = document.querySelector('.header .nav'); // Menu chính
    const contactBtn = document.querySelector('.nav .contact-btn'); // Nút liên hệ

    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('open'); // Hiển thị menu
        contactBtn.classList.toggle('open'); // Hiển thị nút liên hệ
        menuIcon.classList.toggle('open'); // Hiệu ứng cho biểu tượng menu
    });
});