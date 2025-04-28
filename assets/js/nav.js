$(document).ready(function() {
    const $menuIcon = $('.menu-icon'); // Biểu tượng menu
    const $nav = $('.header .nav'); // Menu chính
    const $contactBtn = $('.nav .contact-btn'); // Nút liên hệ

    $menuIcon.on('click', function() {
        $nav.toggleClass('open'); // Hiển thị menu
        $contactBtn.toggleClass('open'); // Hiển thị nút liên hệ
        $menuIcon.toggleClass('open'); // Hiệu ứng cho biểu tượng menu
    });
});
