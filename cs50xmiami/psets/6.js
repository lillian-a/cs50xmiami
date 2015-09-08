/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(a, b) {
  // write your solution here...
    var as = a.charAt(0);
    var bs = b.charAt(0);
    var ab = a.slice(1);
    var bb = b.slice(1);
    String new1 = bs.concat(ab);
    String new2 - as.concat(bb);
    String space = " ";
    String word = new1.concat(space, new2);
    return word;
}
