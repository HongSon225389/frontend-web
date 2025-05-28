// Thông tin đăng nhập giả định
const validUsername = "user123";
const validPassword = "password123";

const loginForm = document.getElementById("loginForm");
const userProfile = document.getElementById("userProfile");
const loginFormElement = document.getElementById("loginFormElement");
const usernameDisplay = document.getElementById("usernameDisplay");
const logoutBtn = document.getElementById("logoutBtn");
const errorMessage = document.getElementById("errorMessage");

// Kiểm tra trạng thái đăng nhập khi tải trang
function checkLoginStatus() {
    const username = localStorage.getItem("username");
    if (username) {
        usernameDisplay.textContent = username;
        loginForm.style.display = "none";
        userProfile.style.display = "block";
    } else {
        loginForm.style.display = "block";
        userProfile.style.display = "none";
    }
}

// Xử lý đăng nhập
loginFormElement.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        localStorage.setItem("username", username); // Lưu thông tin đăng nhập vào localStorage
        checkLoginStatus(); // Kiểm tra lại trạng thái đăng nhập
        window.location.href = "home.html"; // Chuyển hướng đến trang home sau khi đăng nhập
    } else {
        errorMessage.textContent = "Tên người dùng hoặc mật khẩu không chính xác!";
    }
});

// Xử lý đăng xuất
logoutBtn.addEventListener("click", function() {
    localStorage.removeItem("username"); // Xóa thông tin người dùng
    checkLoginStatus(); // Cập nhật lại giao diện sau khi đăng xuất
    window.location.href = "index.html"; // Quay lại trang đăng nhập
});

// Kiểm tra trạng thái đăng nhập khi tải trang
checkLoginStatus();
