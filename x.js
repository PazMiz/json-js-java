const numbers = [10, 20, 30, 40] // להכפיל את המספרים ב 3

numbers.forEach(items => console.log(items * 3));



    // לזהות מה זוגי ומה אי זוגי ואם זה זוגי לרשום true / אם זה אי זוגי false

    function checkOddEven(arr) {
        var result = [];
        
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] % 2 === 0) {
            result.push(true);
          } else {
            result.push(false);
          }
        }
        
        return result;
      }
      
      var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var result = checkOddEven(arr);
      
      console.log(result);
      
//

const numBers = [1,2,3,4,5,6,7,8,9,10,11]
const newArray = numBers.map(number => number * 3) 
console.log(newArray);

numbers.filter(number => number % 2 === 0).forEach((evenNumber) => console.log(evenNumber));