let numbers =["hello",1,[2,3],4,[5,[6,7,"whats UP?",[8,9, true,[10,undefined,11,"yes"]]]]]
let array=[]
function flatArray(arr){
    if(typeof(arr)=='number' || typeof(arr)=='string' || typeof(arr)=='boolean' || typeof(arr)=='undefined')
        array.push(arr)
    else if(typeof(arr) == 'object'){
        for(let number of arr)
            flatArray(number)
    }
} 
for(let number of numbers){
    flatArray(number)
}
console.log(array)
