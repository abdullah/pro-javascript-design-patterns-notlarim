/** 
 * Convenience Method  
 * Function'a prototype olarak method adında bir özellik eklenir
 * Bu özellik her sınıfın yeni bir prototype eklenmesinde kullanılabilir
 * Ayrıca return this olarak tanımlandığı için zincirleme prototype da eklenebilir
 */
Function.prototype.method = function (name, fn) {
    this.prototype[name] = fn
    return this
}
var Anim = function () {
    console.log("Anim constructor")
}
/** 
 * Bu kısımdaki return this fonsktionun'un ait olduğu class'ı geri döndürür
 * Bu sayede sınıftaki diğer fonksiyonlar da çalıştırılabilir.
 * Chain method
 * Jquery benzeri 
 */
Anim.method('start', function () {
    console.log("start Animate")
    return this
}).method('stop', function () {
    console.log("stop Animate")
})
var myAnim = new Anim()
myAnim.start().stop();

