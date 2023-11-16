// script.js
let so_lan_click = 0;

function jump() {
    var button = document.getElementById('jumpButton');
    var maxX = window.innerWidth - button.clientWidth;
    var maxY = window.innerHeight - button.clientHeight;

    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);

    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}

function stop() {
    var name_stop = document.getElementById('stopButton');
    name_stop.textContent = 'Trả thêm';
    var resultContainer = document.getElementById('result');
    var resultImage = document.getElementById('resultImage');
    var resultText = document.getElementById('resultText');
    
    so_lan_click++;

    // Hiển thị kết quả
    resultContainer.style.display = 'block';
    resultImage.src = 'https://www.bing.com/th/id/OGC.1469a4ad6386d6b6ab90c7b39371d00c?pid=1.7&rurl=https%3a%2f%2fimg2.thuthuatphanmem.vn%2fuploads%2f2019%2f03%2f02%2fhinh-anh-khan-gia-reo-ho-vo-tay-dep_013559420.gif&ehk=RE0Llt94%2bxsBLosoXsXDCtxmmDOE%2bUxxcnXqmGw5vEg%3d'; // Đặt đường dẫn ảnh GIF thực tế
    
    if (so_lan_click >= 2 ) {
        resultText.textContent = `Trả mày thêm ${so_lan_click} triệu`;
    }
    else {
        resultText.textContent = `Em Cảnh cảm ơn! STK: 12427511 ACB`;
    }

}
