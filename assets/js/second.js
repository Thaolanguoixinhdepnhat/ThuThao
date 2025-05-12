// document.addEventListener("DOMContentLoaded", function () {
//     const groupTitles = document.querySelectorAll(".group-title");

//     groupTitles.forEach(title => {
//         const above = title.parentElement.querySelector(".above");
//         const iconImg = title.querySelector(".icon img");

//         // Gán trạng thái ban đầu cho mũi tên (hướng lên)
//         iconImg.style.transform = "rotate(180deg)";

//         title.addEventListener("click", function () {
//             // Toggle hiển thị nội dung
//             if (above.style.maxHeight) {
//                 above.style.maxHeight = null;
//                 above.style.opacity = 0;
//                 iconImg.style.transform = "rotate(180deg)"; // hướng lên khi đóng
//             } else {
//                 above.style.maxHeight = above.scrollHeight + "px";
//                 above.style.opacity = 1;
//                 iconImg.style.transform = "rotate(0deg)"; // hướng xuống khi mở
//             }
//         });
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    const groupTitles = document.querySelectorAll(".group-title");

    groupTitles.forEach(title => {
        const groupItem = title.closest(".group-item");
        const above = groupItem.querySelector(".above");
        const iconImg = title.querySelector(".icon img");

        // Gán trạng thái ban đầu (ẩn)
        above.classList.remove("open");
        iconImg.style.transform = "rotate(0deg)";

        title.addEventListener("click", function () {
            const isOpen = above.classList.contains("open");

            if (isOpen) {
                above.classList.remove("open");
                iconImg.style.transform = "rotate(0deg)";
            } else {
                above.classList.add("open");
                iconImg.style.transform = "rotate(180deg)";
            }
        });
    });
});

