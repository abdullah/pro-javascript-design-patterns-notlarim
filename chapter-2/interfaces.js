/**
 * JavaScript'te interface yoktur. “Program to an interface, not an
 * implementation," 
 * 
 * Interface aslında bir method'un hangi özelliklerinin olması
 * gerektiğini göstermeyi sağlar.
 */


// :::::::::::::::::::: Emulating Interfaces with Attribute Checking ::::::::::::::::::::::::::::::

/**
	interface Composite {
	    function add(child);

	    function remove(child);

	    function getChild(index);
	}
	interface FormItem {
	    function save();
	}
*/


var CompositeForm = function(id, method, action) {
    this.implementsInterfaces = ['Composite', 'FormItem'];
};

function addForm(formInstance) {
    if (!implements(formInstance, 'Composite', 'FormItem')) {
        throw new Error("Object does not implement a required interface.");
    }
}


function implements(object /** formInstance -- first argument	*/ ) {
    for (var i = 1; i < arguments.length; i++) { // Looping through all arguments
        // after the first one.
        var interfaceName = arguments[i];

        var foundInterface = object.implementsInterfaces.filter(function(interface) {
            return interface == interfaceName;
        })

        return foundInterface.length > 0
    }
    return true; // All interfaces were found.
}

var c = new CompositeForm()
addForm(c) //No errors

/**
 * Yukarıdaki örnekte aslında sözde interface check yapıyor.
 * implementsInterfaces içinde belirtilen interface'ler sözde yazılmıştır.
 * implements fonksiyonu sadece bu arrayin içinde belirtilen interface isimleri
 * var mı yok mu onu kontrol ediyor veya destekliyor mu??.
 */
