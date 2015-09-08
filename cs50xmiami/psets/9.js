/*

Not Bad

Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

*/

function notBad(sentence) {
  // write your solution here...
  var i = str.search("not");
  var j = str.search("bad");
  // if no not
  if(i = -1){
    return sentence;
  }
  else if(j < i){
    return sentence;
  }
  else{
    var str = sentence.substr(0, i);
    var str2 = "is good!"
    var new = str.concat(str2)
    return new;
  }
}
