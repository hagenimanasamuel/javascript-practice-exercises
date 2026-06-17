function isPalindrome(txt) {
  return console.log(txt.split('').reverse().join('') === txt ? "is a Palindrome" : "Not Palindrome");
}

isPalindrome("ifi")