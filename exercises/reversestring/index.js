// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //soln 1

    // let reversedStr="";
    // for(let i=str.length-1; i>=0;i--){
    //     reversedStr=reversedStr+str[i];
    // }
    // return reversedStr;

    //soln 2
    return str.split('').reverse().join('');
    
}

module.exports = reverse;
