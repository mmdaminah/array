function insertionSort(arr, n) { 
    let i, key, j; 
    for (i = 1; i < n; i++){ 
        key = arr[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key){ 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 
} 
let arrConcat = (...arr)=>{
    let temp = []
    loop:for(let array of arr){
        if(typeof(array)==="object"){
            for(let number of array){
                if(typeof(number)!=="number")
                    continue loop
                }
            }
        else{
            continue loop
        }
            temp = temp.concat(array) 
    }
    insertionSort(temp,temp.length)
    return temp
}
console.log(arrConcat([6,2],[3,4],999,"test",[26,12,42,32,"mamd"], [23,42],[-1],[]))