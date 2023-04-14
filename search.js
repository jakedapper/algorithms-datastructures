//Linear Search
    // checking every single element one at a time of an array/data structure to see if it's present
        // indexOf, includes, find,  findIndex are all doing the same thing behind the scenes

function linearSearch(arr, num){
    for(var i=0; i < arr.length; i++){
        if (arr(i) === num){
            return i;
        }
        else {
            return -1;
        }
    }
}