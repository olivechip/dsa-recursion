/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Base Case
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, currentLongest = 0) {
  // Base Case
  if (words.length === 0) return currentLongest;

  // Recursive Case
  if (words[0].length > currentLongest){
    currentLongest = words[0].length;
  }
  return longest(words.slice(1), currentLongest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // Base Case
  if (str.length === 0) return "";

  // Recursive Case
  const firstLetter = str[0];
  const remainingLetters = str.slice(2);
  return firstLetter + everyOther(remainingLetters);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Base Case
  if (str.length === 0) return true;

  // Recursive Case
  let arr = str.split("");
  const firstLetter = arr[0];
  const lastLetter = arr[arr.length - 1];

  if (firstLetter !== lastLetter){
    return false;
  } 
  return isPalindrome(arr.slice(1, arr.length-1).join(""));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, currentIdx = 0) {
  // Base Case
  if (arr.length === 0) return -1;

  // Recursive Case
  const first = arr[0];

  if (first === val){
    return currentIdx;
  } else {
    return findIndex(arr.slice(1), val, currentIdx + 1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // Base Case 
  if (str.length === 0) return "";
  
  // Recursive Case
  const lastLetter = str[str.length - 1];
  return lastLetter + revString(str.slice(0, str.length - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const strings = [];

  // Helper function for traversal
  function helper(innerObj){
    // Implicit base case w/ for...in loop and typeof checks
    for (const key in innerObj){
      let value = innerObj[key];
      if (typeof(value) === "string"){
        strings.push(value); 
      } else if (typeof value === 'object' && value !== null){
        helper(value);
      }
    }
  }

  // Execute recursive helper
  helper(obj);
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {

  // Base Case
  if (left > right || !arr.length) return -1

  // Establish middle index
  let mid = Math.floor((left + right)/2);

  // Check if value is found
  if (val === arr[mid]) return mid;

  // Recursive Case: search left
  if (val < arr[mid]){
    return binarySearch(arr, val, left, mid - 1);
  } 

  // Recursive Case: search right
  if (val > arr[mid]){
    return binarySearch(arr, val, mid + 1, right);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
