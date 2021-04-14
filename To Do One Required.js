//Remove Blanks
//Create a function that, given a string, returns all of that string’s contents, but without blanks. 

//If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
oldString = " Pl ayTha tF u nkyM usi c "
var newString = oldString.replace(/ /g,"");

//Get Digits
//Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
//Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
var b = parseInt("0s1a3y5w7h9a2t4?6!8?0") + "<br>";

//Acronyms
//Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
//Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
//Given "Live from New York, it's Saturday Night!", return "LFNYISN".
const str = "Live from New York, it's Saturday Night!";
const buildAcronym = (str = '') => {
   const strArr = str.split(' ');
   let res = '';
   strArr.forEach(el => {
      const [char] = el;
      if(char === char.toUpperCase() && char !== char.toLowerCase()){
         res += char;
      };
   });
   return res;
};
console.log(buildAcronym(str));



//Count Non-Spaces
//Accept a string and return the number of non-space characters found in the string. 
//For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
let myString = getElementById("input").value;

// use the \s quantifier to remove all white space
let remText = myString.replace(/\s/g, "")

// get the length of the string after removal
let length = remText.length;


//Remove Shorter Strings
//Given a string array and value (length), remove any strings shorter than the length from the array.
do {
    arr.splice(0,1)
  } while (arr[0].length < 5)