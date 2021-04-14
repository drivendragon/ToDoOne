//Push Front
//Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
alert(fruits);


//Pop Front
//Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
var items = ["Banana", "Orange", "Apple", "Mango"];
items.pop();
alert(items);


//Insert At
//Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
var arr = [ 'A', 'B', 'D', 'E' ];
arr.insert(2, 'C');
alert(arr);

//Remove At
//Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
let forDeletion = [2, 3, 5]
let farr = [1, 2, 3, 4, 5, 3]
farr = farr.filter(item => !forDeletion.includes(item))
alert(farr)


//Swap Pairs
//Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
function swap_adjacent_digits(n) {
    if (n.toString().length % 2 != 0) {
      return false;
    }
  
    var result = 0,
        x = 1;
  
    while (n != 0) {
      var dg1 = n % 10,
          dg2 = (n - dg1) / 10 % 10;
      result += x * (10 * dg1 + dg2);
      n = Math.floor(n / 100);
      x *= 100;
    }
  
    return result;
  }
  
  console.log(swap_adjacent_digits(15));
  console.log(swap_adjacent_digits(1234));
  console.log(swap_adjacent_digits(123456));
  console.log(swap_adjacent_digits(12345));


//Remove Duplicates
//Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = [];
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});

alert(uniqueChars);

//Second: Solve this without using any nested loops.