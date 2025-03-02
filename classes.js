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
// Rest parameters
var toplama = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var result = 0;
    a.forEach(function (number) { return result += number; }); // reduce
    return result;
};
console.log(toplama(1, 2, 3));
console.log(toplama(4, 5, 6, 7, 8, 9));
// Sınıflar
//
// this -> Classın kendisi
var Car = /** @class */ (function () {
    // constructor - yapıcı method
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log(this.brand + " " + this.model + " " + " araç başlatılıyor..");
        this.startEngine();
    };
    Car.prototype.startEngine = function () {
        console.log("Motor başlatılıyor..");
    };
    return Car;
}());
var car1 = new Car("Hyundai", "i20", 2025); // new Car() => Car isimli classtan bir örnek üret.
// car1.brand = "Hyundai"
// car1.model = "i20"
// car1.year = 2025
car1.start();
