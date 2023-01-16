'use strict';
function checkPalindrome(str) {
    let lowerCaseStr = str.toLowerCase();
    let reverseStr = lowerCaseStr.split('').reverse().join('');
    return lowerCaseStr === reverseStr;
  }
  let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function() {
  let wordOrSentence = document.getElementById("word-or-sentence").value;
  let isPalindrome = checkPalindrome(wordOrSentence);
  if (isPalindrome) {
    console.log("C'est un palindrome");
  } else {
    console.log("Ce n'est pas un palindrome");
  }
});
