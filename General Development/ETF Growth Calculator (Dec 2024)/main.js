// Exponential Growth Formula: f(x) = a(1 + r)^t

var a = 50 /* prompt("Enter initial amount: "); */
var r = 0.02 /* prompt("Enter growth rate (in percentage): ") / 100; */
var t = 264 /* prompt("Enter time (in years): ") * 12; */

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var currYear = 2024;
var yrCnt = 1;

var age = 18;

let storedVal = [];
storedVal[0] = a;

/* for (let i = 1; i < t + 1; i++) {
    var exFunc = (storedVal[i - 1] * r) + storedVal[i - 1];
    
    storedVal[i] = exFunc;

    for (let j = 0; j <= t / 12; j++) {
        if (months[i - 1] == "Dec") {
            for (let k = 0; k < 12; k++) {
                console.log(months[k] + " " + currYear + ": " + storedVal[i]);
            }
        }

        currYear++;
    }
} */

for (let x = 1; x < t; x++) {
    var exFunc = ((storedVal[x - 1] * r) + storedVal[x - 1]) + a;

    storedVal[x] = Math.round(exFunc);
}

for (let i = 0; i < t / 12; i++) {
    for (let j = 0; j <= t / 12; j++) {
        if (months[j - 1] == "Dec") {
            for (let k = 0; k < 12; k++) {
                console.log(months[k] + " " + (currYear) + ": $" + storedVal[k]);
            }
            
            currYear++;
        }

        if (months[j] == "Jan") {
            console.log("Year " + yrCnt + " - " + age + " years old");

            yrCnt++;
            age++;
        }
    }
}