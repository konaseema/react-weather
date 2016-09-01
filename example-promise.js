//app id:d05af6b38d639411e4c53b833a492250

// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallback('Boulder', function (err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });

// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             //resolve(79);
//             reject('City not found');
//         }, 2000);
//     });
// }

// getTempPromise('Konaseema').then(function (temp) {
//     console.log('promise temp', temp);
// }, function (err) {
//     console.log('promise error', err);
// });

//challenge funtion

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Invalid inputs');
        }
    })
};

addPromise(3).then(function (result) {
    console.log(result);
}, function (err) {
    console.log('oops error', err)
})