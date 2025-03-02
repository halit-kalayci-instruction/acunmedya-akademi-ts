function topla(a:number, b:number) :number 
{
    let result = a+b;
    return result;
}

console.log(topla(3,5))

// Arrow Function
const topla2 = (a:number, b:number) : number => {
    return a+b;
}

console.log(topla2(5,10))

// Callback Function
let students:string[] = ["A","B","C"]

students.forEach(function callback(i) {
    console.log(i)
})

students.forEach((i) => console.log(i))


// opsiyonel
const selamla = (isim?:string) :void => {
    console.log(isim ? "Merhaba "+isim : "Merhaba")
}

selamla("Halit")
selamla("Mahmut")
selamla()

// varsayılan
const selamla2 = (isim:string="Ziyaretçi") :void => {
    console.log("Merhaba " + isim)
}

selamla2("Ali")
selamla2("Melih")
selamla2()

// Rest parameters
const toplama = (...a:number[]) :number => {
    let result = 0;
    a.forEach(number => result += number) // reduce
    return result;
}

console.log(toplama(1,2,3))
console.log(toplama(4,5,6,7,8,9))


// Sınıflar

//

// this -> Classın kendisi
class Car {
    // Access modifiers - Erişim belirleyiciler
    private _brand: string; // Tüm her yerden erişilebilir 
    private model: string; // Sadece class tarafından erişilebilir
    protected year: number; // Inheritance ...
    // constructor - yapıcı method
    constructor(brand:string, model:string, year:number) {
        this._brand = brand;
        this.model = model;
        this.year = year;
    }


    // Encapsulation
    // getter-setter fonksiyonlar
    get brand() {
        return this._brand;
    }
    set brand(brand:string){
        if(brand.length < 2)
        {
            console.log("Marka ismi 2 haneden küçük olamaz.")
            return;
        }
        this._brand = brand;
    }
    //

    start():void {
        console.log(this._brand + " " + this.model + " " + " araç başlatılıyor..")
        this.startEngine();
    }
    startEngine():void {
        console.log("Motor başlatılıyor..")
    }

}
let car1 = new Car("Hyundai","i20",2025); // new Car() => Car isimli classtan bir örnek üret.
console.log(car1.brand)
car1.brand = "T"
//car1.brand = "Toyota" // #set etmek
//car1.model = "i20"
//car1.year = 2025
car1.start();