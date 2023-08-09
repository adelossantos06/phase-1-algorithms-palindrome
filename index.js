function isPalindrome(word) {
  let length = word.length

  for (let index = 0; index < length / 2; index++) {
    if (word[index] !== word[length - 1 - index])
      return false
  } {
    return true
  }


}

/* 
  Add your pseudocode here
// create a for loop 
//as long as characters form each part match the loop will go on

Add written explanation of your solution here
*///decleare a variable that defined the length of the string
//create a for loop that iterates over each character in the array and makes sure it matches
//if the loop stops becuase the string doesnt match it will return false 
//if the loop never breaks it will return true 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
