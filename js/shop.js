function product1l() {
    var counter = parseInt(document.getElementById("result1").innerText);
    counter++;
    document.getElementById("result1").innerText = counter;
    updateTotalPrice();
}
function product1b() {
    var counter = parseInt(document.getElementById("result1").innerText);
    if (counter > 0) {
        counter--;
        document.getElementById("result1").innerText = counter;
        updateTotalPrice();
    }
}

// Product 2
function product2l() {
    var counter = parseInt(document.getElementById("result2").innerText);
    counter++;
    document.getElementById("result2").innerText = counter;
    updateTotalPrice();
}
function product2b() {
    var counter = parseInt(document.getElementById("result2").innerText);
    if (counter > 0) {
        counter--;
        document.getElementById("result2").innerText = counter;
        updateTotalPrice();
    }
}

// Product 3
function product3l() {
    var counter = parseInt(document.getElementById("result3").innerText);
    counter++;
    document.getElementById("result3").innerText = counter;
    updateTotalPrice();
}
function product3b() {
    var counter = parseInt(document.getElementById("result3").innerText);
    if (counter > 0) {
        counter--;
        document.getElementById("result3").innerText = counter;
        updateTotalPrice();
    }
}

// Product 4
function product4l() {
    var counter = parseInt(document.getElementById("result4").innerText);
    counter++;
    document.getElementById("result4").innerText = counter;
    updateTotalPrice();
}
function product4b() {
    var counter = parseInt(document.getElementById("result4").innerText);
    if (counter > 0) {
        counter--;
        document.getElementById("result4").innerText = counter;
        updateTotalPrice();
    }
}

function updateTotalPrice() {
    var counter1 = parseInt(document.getElementById("result1").innerText);
    var counter2 = parseInt(document.getElementById("result2").innerText);
    var counter3 = parseInt(document.getElementById("result3").innerText);
    var counter4 = parseInt(document.getElementById("result4").innerText);
    
    var pricePerUnit1 = parseFloat(document.getElementById("pricePerUnit1").innerText);
    var pricePerUnit2 = parseFloat(document.getElementById("pricePerUnit2").innerText);
    var pricePerUnit3 = parseFloat(document.getElementById("pricePerUnit3").innerText);
    var pricePerUnit4 = parseFloat(document.getElementById("pricePerUnit4").innerText);

    var totalPrice1 = counter1 * pricePerUnit1;
    var totalPrice2 = counter2 * pricePerUnit2;
    var totalPrice3 = counter3 * pricePerUnit3;
    var totalPrice4 = counter4 * pricePerUnit4;
    var unitzz = counter1 + counter2 +counter3 +counter4;
    var total = totalPrice1 + totalPrice2 + totalPrice3 + totalPrice4;
    var discount = 0;

    if (total >= 1000) {
        discount = total * 0.1
        total *= 0.9;
    }
    document.getElementById("totalPrice").innerText = total;
    document.getElementById("unitzz").innerText = unitzz;
    document.getElementById("discount").innerText = discount.toFixed(2);
}

function finalizeOrder() {

    document.getElementById("modalUnitzz").textContent = document.getElementById("unitzz").textContent;
    document.getElementById("modalTotalPrice").textContent = document.getElementById("totalPrice").textContent;

    document.getElementById("unitzz").textContent = "0";
    document.getElementById("totalPrice").textContent = "0";
    }