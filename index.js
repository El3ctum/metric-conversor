var feet = 3.2808399
var gallon = 0.26417
var pound = 2.20462262
var result = 0

function meterToFeet(iptNumber) {
    result = iptNumber * feet
    document.getElementById("feet").innerHTML = (Math.round(result * 100) / 100).toFixed(2);
}

function literToGallon(iptNumber) {
    result = iptNumber * gallon
    document.getElementById("gallon").innerHTML = (Math.round(result * 100) / 100).toFixed(2);
}

function kiloToPound(iptNumber) {
    result = iptNumber * pound
    document.getElementById("pound").innerHTML = (Math.round(result * 100) / 100).toFixed(2);
}

function transformCalc() {
    let iptNumber = document.getElementById("ipt-number").value
    meterToFeet(iptNumber);
    literToGallon(iptNumber);
    kiloToPound(iptNumber);
}

