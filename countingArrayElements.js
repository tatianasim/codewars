// Write a function that takes an array and counts the number of each unique element present.
//
// count(['james', 'james', 'john'])
// #=> { 'james': 2, 'john': 1}


function count(array){
    let obj = {};
    for(let i=0; i< array.length; i++){
        if(array[i] in obj){
            obj[array[i]]++;
        }else{
            obj[array[i]]= 1;
        }
    }
    return obj;
}