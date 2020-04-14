/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function (s) {};

console.log(lengthOfLongestSubstring("abcabcbb") === 3);

// Solutions
/*
var lengthOfLongestSubstring = function (s) {
  var left = 0;
  var max = 0;
  var map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      while (map[s[i]]) {
        map[s[left]] = false;
        left++;
      }
    }
    map[s[i]] = true;
    max = Math.max(max, i - left + 1);
  }

  return max;
};
*/

// The problem can also be solved using the map data structure
/*
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let max = 0;
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) !== false) {
      while (map.get(s[i])) {
        map.set(s[left], false);
        left++;
      }
    }
    map.set(s[i], true);
    max = Math.max(max, i - left + 1);
  }
  return max;
};
*/
