var names = ['Ram', 'Shatrugan', 'Bharat', 'Laxman'];

// names.forEach(function (element) {
//     console.log('for each' + ' ' + element);
// });

// names.forEach((name) => {
//     console.log('arrow' + ' ' + name)
// })

// names.forEach((name) => console.log(name))

// var returnMe = (name) => name + '!';

// console.log(returnMe('Brosky'));

// var person = {
//     name: "Rajnikanth",
//     greet: function (){
//         names.forEach((name) =>{
//             console.log(this.name + ' ' + 'says hi to' + ' ' + name);
//         })
//     }
// }

// person.greet();

function add(a,b){
    return a+b;
}

var addStatement = (a,b) => {
    return a+b
}

var addExpression = (a,b) => a+b;

console.log(addExpression(1,2))