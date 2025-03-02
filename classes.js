function topla(a, b) {
    var result = a + b;
    return result;
}
console.log(topla(3, 5));
// Arrow Function
var topla2 = function (a, b) {
    return a + b;
};
console.log(topla2(5, 10));
// Callback Function
var students = ["A", "B", "C"];
students.forEach(function callback(i) {
    console.log(i);
});
students.forEach(function (i) { return console.log(i); });
// opsiyonel
var selamla = function (isim) {
    console.log(isim ? "Merhaba " + isim : "Merhaba");
};
selamla("Halit");
selamla("Mahmut");
selamla();
// varsayılan
var selamla2 = function (isim) {
    if (isim === void 0) { isim = "Ziyaretçi"; }
    console.log("Merhaba " + isim);
};
selamla2("Ali");
selamla2("Melih");
selamla2();
var toplama = function (a) {
    var result = 0;
    a.forEach(function (number) { return result += number; });
    return result;
};
console.log(toplama([1, 2, 3]));
console.log(toplama([4, 5, 6, 7, 8, 9]));
