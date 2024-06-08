/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function transfrom(str){
  let ans=''
  for(let i=0;i<str.length;i++){
    if(str[i]!=' ' && str[i]!=',' && str[i]!='!' && str[i]!='?' && str[i]!="."){
      ans+=str[i]
    }
  }
  return ans
}
function isPalindrome(str) {
  str=str.toUpperCase()
  str=transfrom(str)
  let str1=str.split('').reverse().join('')
  if(str==str1)
    return true
  else
    return false
}

module.exports = isPalindrome;
