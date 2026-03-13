console.log("Checking temperature freezing point")
let n=5
function freezer(n){
    if(n<=0){
        return "It is at or below freezing point"
    }else{
        return "It is above freezing point"
    }
}
let temp=freezer(n)
console.log(temp)