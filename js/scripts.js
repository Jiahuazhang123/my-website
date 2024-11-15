// 获取弹出框元素
var modal = document.getElementById("contactModal");

// 获取关闭按钮
var span = document.getElementsByClassName("close")[0];

// 显示弹出框的函数
function showContact() {
    modal.style.display = "block";
}

// 点击关闭按钮关闭弹出框
span.onclick = function() {
    modal.style.display = "none";
}

// 点击弹出框外部关闭弹出框
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
