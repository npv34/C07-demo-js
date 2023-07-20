/*
BT1: Viet chuong trinh nhap vao nhiet do C -> F
BT2: Viet chuong trinh tinh chu vi, dien tich hinh chu nhat
- yeu cau: nhap vao chieu dai, chieu rong
BT3: Viet chuong trinh tinh lai xuat  ngan hang
- input: m - so thang gui, monney: so tien gui biet lai 1n co dinh 8%/nam
*/


function convertVNDtoUSD() {
    let monney = document.getElementById("monney").value;
    let kq = monney / 23000;
    document.getElementById("result").innerHTML = kq
}

function convertUSDtoVND() {
    let monney = document.getElementById("monney").value;
    let kq = monney * 23000;
    document.getElementById("result").innerHTML = kq
}