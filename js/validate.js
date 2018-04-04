"use strict";


function validate()  {
  var code = document.getElementById("nric").value.toUpperCase();
  var re = /^[A-Z](1|2)\d{8}$/;
  if (re.test(code) && code.substr(1,1)== 1){
    alert("成功！男生");
    return;
  }else if(re.test(code) && code.substr(1,1)== 2) {
    alert("成功！女生");
    return;
  } else
    alert("失敗！不符合「" + re + "」的格式！");
  return;

  
}