
/** 
 * Executed Immediately
 * Anında çalışan anonymous fonsksiyon -- Magic method olarakta geçiyor
 */
(function(){
    var foo = 10;
    var bar = 2;
    console.log(foo * bar)
})()


/**
 * Parametre alabilir
 * Bir değişkene atanabilir
 */
var baz =  (function(foo,bar){
    return foo * bar
})(20,2)
// Baz 40 yapar
console.log(baz)


//Closure protected variable space
/** 
 * JavaScript function level scope'a sahiptir
 * baz2 çalıştırıldığında 20 sonucunu verecek fakat foo ve bar'a ulaşamayacaktır 
 * çünkü foo ve var anonymous fonsksiyon'un içinde tanımlandı
 */
var baz2;

(function(){
    var foo = 10;
    var bar = 2;
    baz2 = function(){
        return foo * bar
    }
})();

console.log(baz2())