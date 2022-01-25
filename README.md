# twig-challenge

Splitting an array into N arrays using javascript

groupArrayElements([1, 2, 3, 4, 5], 3)

the original array which is [1, 2, 3, 4, 5] with length of 5 and n equal 3

How the function works:

-   first, the function check if the length of the original array >= 0 and n should be always positive

-   For loop will be executed

        start with i = 3 as n=3

        -   array.length / i => 5/3 = 1.6666666666666667 => Math.ceil(1.6666666666666667) = 2
        -   array.splice(0,2) will remove the elements with index mentioned from the original array and return a new array which will be pushed to result array
        -   so this should be the new value of result = [ [ 1, 2 ] ], and this should be the new value of original array = [ 3, 4, 5 ]

        when i = 1

        -  the original array will be equal to [ 5 ]
        -  array.length / i = 1/3 = 0.33 => Math.ceil(0.33) = 1
        -  array.splice(0,1) will remove the element with index mentioned from the original array and return a new array which will be pushed to result array.
        -  so this should be the value of result = [ [ 1, 2 ], [2, 3], [ 5 ] ], and this should be the new value of original array = []
