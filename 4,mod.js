console.log('this is moudle');

function average(arr) {
    let sum = 0;
     arr.forEach(element => {
         sum += element;
         
     });
     return sum / arr.length;
 }

 module.exports = {

    avg : average,
    name : 'rahi',
    repo : "github"

}

    // asa be kr skte ho

    module.exports.name = 'rahi';