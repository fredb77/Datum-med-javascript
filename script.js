
// uppdaterar varje sekund
var timer = setInterval(klocka, 1000);

function klocka(){
    var d = new Date();
    var h = d.getHours();       //variabel för timmar
    var m = d.getMinutes();     //variabel för minuter
    var s = d.getSeconds();     //variabel för sekunder

    // här sätter jag en 0 framför som talet är mindre än 10
    if(h < 10){
        h = "0" + h;
    }

    if(m < 10){
        m = "0" + m;
    }

    if(s < 10){
        s = "0" + s;
    }

    // skriver ut det till html sidan
    document.getElementById("klocka").innerHTML = h + ":" + m + ":" + s;
}