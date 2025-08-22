// JavaScript để thay đổi hành vi khi click vào menu dropdown
document.querySelectorAll('.dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('click', function(event) {
        // Ngừng hành động mặc định
        event.stopPropagation();

        // Đóng các menu dropdown khác
        document.querySelectorAll('.dropdown-content').forEach(function(menu) {
            if (menu !== dropdown.querySelector('.dropdown-content')) {
                menu.style.display = 'none';
            }
        });

        // Chuyển trạng thái hiển thị menu
        var dropdownContent = dropdown.querySelector('.dropdown-content');
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});

// Đóng menu khi người dùng click bên ngoài
window.addEventListener('click', function() {
    document.querySelectorAll('.dropdown-content').forEach(function(menu) {
        menu.style.display = 'none';
    });
});
