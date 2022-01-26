// compute how many times a certain element appears in an array - tips: use object, var element = 2
var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1];

var given_element = 1;
var count = 0;

for(var i = 0; i < array.length; i++)
    if(given_element==array[i])
        count++;

console.log(count);
