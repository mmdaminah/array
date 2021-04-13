let arr = [1,2,3,2,3,12,1,2,3,4,5,2,1,3,2,3,4,5,5,2,5,7,8]
let deleteDuplicate = arr.map((item, index, array)=>{
    for(let i=index+1;i < array.length;i++)
        if(item == array[i]){
            delete arr[i]
        }
})
let newArr = []
for(let i = 0; i < arr.length;i++){
    if( typeof(arr[i]) === "number")
        newArr.push(arr[i])
}
console.log(newArr)