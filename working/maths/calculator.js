// defining and exporting at the same time
exports.add = (x, y) => {
    return x + y;
};

// defining and exporting at the same time
exports.mul = (x, y) => {
  return x * y;
};

// defining function and export at the end statement
let subs = (x, y) => {
    return x - y;
};

let power_level = (level) =>{
    return level > 9000 ? "it's over 9000!!!" : level;
};

var User = function(name, email) {
    this.name = name;
    this.email = email;
};

module.exports.subs = subs;
module.exports.power_level = power_level;
module.exports.User = User;