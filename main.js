
//時計の設定
function renewClock(){
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes(); 

    if(hour < 10) { hour = "0" + hour; }
    if(minute < 10) { minute = "0" + minute; }
    let clock = hour + ":" + minute;
    document.getElementById("iphone-clock").innerHTML = clock;
}

setInterval("renewClock()", 100);

//計算の設定
let result = document.getElementById("result");
let temporary = null; 
let firstLetter;
let total;
let status = 1;  // １回前に入力したもの 0:数字 1:演算子

function clickNum(num) {
    if(temporary == null) {
        status = 0;
        if(result.value == "0" && num.value == "0"){
            result.value = 0;
        }else if(result.value == "0" && num.value == ".") {
            result.value = "0."
        }else if(result.value == "0") {
            result.value = num.value;
        }else if(result.value.length < 8) {
            result.value += num.value;
        }
    }else{
        if(status == 1){
            result.value = num.value;
            status = 0;
        }else if(result.value.length < 8) {
            result.value += num.value;
        }
    }
}

function clickPosNeg(){
    firstLetter = result.value.slice(0, 1);
    if(firstLetter == "-"){
        result.value = result.value.slice(1);
    }else{
        result.value = "-" + result.value;
    }
}

function clickOpe(ope) {
    if(status == 0) {
        status = 1;
        temporary = result.value + ope.value;
    }else{
        status = 1;
        temporary = temporary.slice(0, -1) + ope.value;
    }
}

function clickEqual() {
    if(status == 0) {
        temporary += result.value;
        total = String(eval(temporary));
        if(total <= 99999999){
            result.value = total.slice(0, 9);
        }else{
            result.value = "error"
        }
    }else{
    ;
    }
}

function clickC() {
    result.value = "0";
    temporary = null;
}

$(document).ready(function(){
  $(".plus").click(function(){
   $(this).css({"color":"#FF9502", "background-color":"#fff"});
   $(".minus, .multiply, .divide").css({"color":"#fff", "background-color":"#FF9502"});
 });
 
  $(".minus").click(function(){
   $(this).css({"color":"#FF9502", "background-color":"#fff"});
   $(".plus, .multiply, .divide").css({"color":"#fff", "background-color":"#FF9502"});
 });
 
   $(".multiply").click(function(){
   $(this).css({"color":"#FF9502", "background-color":"#fff"});
   $(".plus, .minus, .divide").css({"color":"#fff", "background-color":"#FF9502"});
 });
 
   $(".divide").click(function(){
   $(this).css({"color":"#FF9502", "background-color":"#fff"});
   $(".plus, .minus, .multiply").css({"color":"#fff", "background-color":"#FF9502"});
 });
 
   $(".number, .equal").click(function(){
   $(".operation").css({"color":"#fff", "background-color":"#FF9502"});
 });

});