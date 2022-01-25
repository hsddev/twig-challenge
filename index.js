/*
Given an array of length >= 0, and a positive integer N, 
return the contents of the array divided into N equally sized arrays.

Where the size of the original array cannot be divided equally by N, the final part should have a length equal
to the remainder.
*/
function groupArrayElements(arr, n) {
    let result = [];
    // Check if N is positive and arr length >= 0
    if (n > 0 && arr.length >= 0) {
        //
        for (let i = n; i > 0; i--) {
            /*
            - push:  method to add elements to the end of result array.
            - Math.ceil: rounds number up to the next largest integer. 
            - splice : method help to make changes the contents of an array in our case we use it to remove elements from the original array
            */
            result.push(arr.splice(0, Math.ceil(arr.length / i)));
        }
    }
    // return the new array
    return result;
}
console.log(groupArrayElements([1, 2, 3, 4, 5], 3));
