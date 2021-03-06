//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler(name) {
    if(name === "Tyler") {
      return true;
    }
  return false;
  }//Code Here

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  function getName() {
   var name = prompt("Your name?");
   return name; 
  }//Code Here


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome(){
    alert("Welcome, " + getName());
  }//Code Here


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  /*parameters are variables. They are usually found at the declaration of functions.
  arguments are actual datas or values that's passed into the function */
  //Answer Here


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?
/* falsy values in JS are: NaN, null, undefined, false, "", 0.
To check if something is falsy, we can put use the triple equal sign method and see if 
returns true or false*/
  //Answer Here



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName() {
    return "Jessica Zhou";
  }
  


//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;//Code Here

//Now alert the result of invoking newMyName

alert(myName);

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.
function outerFn() {
  return function() {return "Jessica Zhou";}
}//Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn()//Code Here

//Now invoke innerFn.
innerFn;