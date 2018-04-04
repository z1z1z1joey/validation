"use strict";

function  validate() {
  var code = document.getElementById("nric").value ;
  if (code == "") {
    alert("不能是空的！");
    document.getElementById("result").innerHTML = "";
    return;
  }else if (!isNaN(code)) {
    alert("不能只有數字！");
    document.getElementById("result").innerHTML = "";
    return;
  }else if (code.length != 10) {
    alert("內容長度不正確！");
    document.getElementById("result").innerHTML = "";
    return;
  }else if (code.substr(1,1)== 1) {
    document.getElementById("result").innerHTML = "男生，符合驗證";
    return;
  }else if (code.substr(1,1)== 2) {
    document.getElementById("result").innerHTML = "女生，符合驗證";
    return;
  }else {
    alert = "性別不符合驗證";
    return;
  }
}
// function validate()  {
//   code = document.getElementById("nric").value ;
//   code = /^[A-Z][1-2]\d{8}$/;
//   if (re.test(string))
//     alert("成功！符合「" + re + "」的格式！");
//   else
//     alert("失敗！不符合「" + re + "」的格式！");

//   if (code.substr(2) == 1) {
//     document.getElementById("result").innerHTML = "男生，符合驗證";
//   }else (code.substr(2) == 2) {
//     document.getElementById("result").innerHTML = "女生，符合驗證";
//   }
// }