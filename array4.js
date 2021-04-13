let str = "123i have 2154 app34les and 602 pinaples and 10000 of bithces"
let extractedNumbers = (str)=>{
    let numbers = []
    for(let i=0; i < str.length ;i++){
        if(str[i].charCodeAt(0) <58 && str[i].charCodeAt(0)>47){
            let num = ""
            num+=str[i]
            for(let j = i+1;j<str.length;j++){
                if(str[j].charCodeAt(0) <58 && str[j].charCodeAt(0)>47){
                    num+=str[j]
                    i++
                }
                else
                    break
                }
                numbers.push(+num)
            }
    }
    return numbers
}
console.log(extractedNumbers(str))