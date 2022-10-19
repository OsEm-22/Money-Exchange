let rateUsd = prompt("enter USD TO MMK rate");
let btn = document.getElementById("calculateBtn");
let display = document.getElementById("result");
let finalResult;

btn.addEventListener("click", function () {
    let usd =document.getElementById("firstNum").value;
    let mmk =document.getElementById("secNum").value;
    let rate = parseInt(rateUsd);
    usd = parseInt(usd);
    mmk = parseInt(mmk);
    if (usd > 0) {
        display.innerHTML = usd * rate + " " +  "MMK";
    } else if (mmk > 0) {
        display.innerHTML = mmk / rate + " " +  "USD";
    } else {
        display.innerHTML = "ERROR";
    }
});