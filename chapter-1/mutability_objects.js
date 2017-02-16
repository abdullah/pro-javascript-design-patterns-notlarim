/**
 *displayError sınıfı numTimesExecuted adındada static bir özellik tanıtılır
 *instance üzerinden erişelemez
 *this keyword'ü ile erişelemez
 *Bu sadece function'larında mutable olduğunu gösterir
 *displayError.numTimesExecuted olarak erişilir/değiştirilir
 */
function displayError(message) {
  displayError.numTimesExecuted++;
  console.log(message)
}

displayError.numTimesExecuted = 0;

console.log(displayError.numTimesExecuted)//0
var _displayError = new displayError("Error");
console.log(_displayError.numTimesExecuted) // 
console.log(displayError.numTimesExecuted) // 1


/**
 *Bir sınıfı tanımladıktan sonra değiştirilebilir
 *Bunun anlamı örneklenen sınıfta değiştirilebilir
 *Aşağıda görüldüğü gibi Person adında bir sınıf tanımlanmış
 *Person'ın bütün instance'ları getName,getAge ve sonradan
 tanımlanmasa (new) bile getGreeting özelliğine erişebilir
 *Fakat alice için özel olarak eklenen displayGreeting özelliğine diğer
 instance'lar erişemez
 *Bunun sebebi prototype özelliğinin Object türünde olmasıdır console.log(typeof Person.prototype)
 *Primitive type'lar dışında bütün tipler mutable'dır.
 *Bu olaylar introspection (iç gözlem) kavramı ile alakalıdır
 *Bu örneklenen nesnelerin herhangi birini çalışma zamanında (run-time)
 hangi özellikleri ve fonksiyonları taşınığını görebilirsin
 isimlerini bilmeden dinamik olarak çalıştırabilirsin (reflection)
 *Chapter1 s9
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype = {
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  }
}

//Instance Person

var alice = new Person('Alice', 30)
var bill = new Person('Bill', 30)

Person.prototype.getGreeting = function () {
  return "Hi" + this.getName() + "!";
}

alice.displayGreeting = function () {
  alert(this.getGreeting())
}

console.log(alice) // alice has 4 method getAge,getName,getGreeting,displayGreeting
console.log(bill) // bill has 3 method getAge,getName,getGreetin