// compute the maximum of the elements of an array and display it in the console
var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1];
var max = -324567;

for(var i = 0; i < array.length; i++)
    if(max < array[i])
        max = array[i];

console.log(max);