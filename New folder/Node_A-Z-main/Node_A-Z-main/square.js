//File-based Modules: We can access any file using module.export and require function.

//ES6 Way of exporting
//exports.area = (a) => (a*a); 
//exports.perimeter = (a) => (4*a); 

//Traditional way
const area = (a) => (a*a); 
const perimeter = (a) => (4*a);
// module.exports.area = area; 
// module.exports.perimeter = perimeter; 

const add = (a,b) => {
    return a + b;
}

module.exports = {area, perimeter, add}



