var Mixin = function() {};
Mixin.prototype = {
  serialize: function() {
    var output = [];
    for (var key in this) {
      output.push(key + ': ' + this[key]);
    }
    return output.join(', ');
  }
};

function augment(recevingClass, givingClass) {
  for (var method in givingClass.prototype) {
    if (!recevingClass.prototype[method]) {
      recevingClass.prototype[method] = givingClass.prototype[method];
    }
  }
}

function User() {}
augment(User, Mixin);

var user = new User();

var serializeData = user.serialize();
console.log(serializeData);
