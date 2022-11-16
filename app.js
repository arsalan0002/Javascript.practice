// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["karachi", "lahore", "islamabad", "faisalabad", "quetta", "multan", "hydrabad", "sawaat", "muree", "gilgit"];
//   for (var i = 0; i <=  cleanestCities.length; i++) { 
//     if (cityToCheck == cleanestCities[i]) { 
//         alert("It's one of the cleanest cities"); }
//      }

// var msg = "my favourit fruit is apple"

// var firstChar = msg.slice(0, 1);
// console.log(firstChar);

// var someChar = msg.slice(2, 11);
// console.log(someChar);

// var firstChar = msg.slice(0, 1);
// var someChars = msg.slice(1);
// firstChar = firstChar.toUpperCase();
// someChars = someChars.toLowerCase();
// var cappedCity = firstChar + someChars;
// console.log(cappedCity);

//  var month = prompt("Enter a month");
//  var charsInMonth = month.length;
//  if (charsInMonth > 3) {
//  monthAbbrev = month.slice(0, 3);
//  }

// console.log(monthAbbrev);

//  var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === " ") {
//  alert("No double spaces!");
//  break;
//  }
//  }

// var text = "The New Yorker magazine doesnt allow the phrase World War II.  They say it should be the Second World War. So lets search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.It is startling to think that, even in the darkest depths of World War II, J. R. R.";

//  for (var i = 0; i < text.length; i++) {
    //  if (text.slice(i, i + 12) === "World War II") {
    //  text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
    //  }
    //  var firstChar = text.indexOf("World War II");
    //  if (firstChar !== -1) {
    //  text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
    //  }
    
    // }
// console.log(text);



// var text = "To be or not to be.";
// var segIndex = text.lastIndexOf("be");
// console.log(segIndex);



/////1st Method;

// var firstName =prompt("Entrer Your Name");
// var firstChar = firstName.slice(0, 1);
// console.log(firstChar);

/////2nd Method;

// var firstName =prompt("Entrer Your Name");
// var firstChar = firstName.charAt(0);
// console.log(firstChar);


// var Name = "Bear"
// var lastChar = Name.charAt(Name.length - 1);
// console.log(lastChar);

// var text = "Hello Worlds"

// for (var i = 0; i < text.length; i++) {
//      if (text.charAt(i) === "!") { 
//         alert("Exclamation point found!"); 
//         break;  
//     } 
//  }