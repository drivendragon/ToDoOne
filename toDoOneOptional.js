//Average (Warmup)
//(Warm-up) Always run through some quick algorithm problems before any coding interview, to get yourself warmed up. 
//How about this one: return the average value of an array of unsorted numbers.
    function average(a, n)
    {
    
    // Find sum of array element
    var sum = 0;
    for (var i = 0; i < n; i++) sum += a[i];

    return parseFloat(sum / n);
    }

    // Driver code

    var arr = [10, 2, 3, 4, 5, 6, 7, 8, 9];
    var n = arr.length;

    document.write(average(arr, n));
    document.write("<br>");


//Balance Point
//Write a function that returns whether the given array has a balance point between indices, 
//where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false.
    A=[5,2,3,1,4,6]
    partial sum = [5,7,10,11,15,21]
    alert(A)

//Balance Index
//Here, a balance point is on an index, not between indices. 
//Return the balance index where sums are equal on either side (exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2, but [9,9] → -1.'
    A=[5,2,3,1,4,6]
    partial sum = [5,7,10,11,15,21]
    alert(partial sum)