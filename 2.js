//поиск чисел - start
var arr = [1,2,3,4,5,6,7,8,9,32,55,67,89,65];

if(in_array(32, arr)) console.log('есть');

function in_array(value, array) {
    for(var i = 0; i < array.length; i++) {
        if(array[i] == value) return true;
    }
    return false;
//поиск чисел - finish

//reverce 132456 - start
var source = [1,2,3,4,5,6];
 console.log(source.reverse());
//reverce 132456 - finish

//поиск строки - start
var arr = [1,2,3,4,5,6,7,'hello',9,32,55,67,89,65];

if(in_array('hello', arr)) console.log('есть');

function in_array(value, array) {
    for(var i = 0; i < array.length; i++) {
        if(array[i] == value) return true;
    }
    return false;
}
//поиск строки - finish