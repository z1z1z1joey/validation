"use strict";

function  validate() {
  var code = document.getElementById("nric").value ;
  if (code == "") {
    alert("不能是空的！");
    return;
  }else if (!isNaN(code)) {
    alert("不能只有數字！");
    return;
  }else if (code.length != 10) {
    alert("內容長度不正確！");
    return;
  }else {
    document.getElementById("result").innerHTML = "符合驗證";
  }
}