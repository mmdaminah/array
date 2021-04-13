let arr1 = ["a","b", "c", "d"]
let deleteByIndex = (arr, index)=>{
    if(index > arr.length-1)
        return "out of range"
    else if(arr.length < 2)
        return []
    else if(index == arr.length-1 ){
        arr.pop()
        return arr     
    }
    else if(index == 0){
        arr.shift()
        return arr
    }
    else{
        let subArr1 = arr.slice(0,index)
        let subArr2 = arr.slice(index+1,arr.length)
        return subArr1.concat(subArr2)
    }
}
console.log(deleteByIndex(arr1,0))