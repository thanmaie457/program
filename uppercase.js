console.log('Sentence in uppercase')
let sent=["Girls","are","beautiful"]
function shout(hash){
    return hash.map(function(word){
        return word.toUpperCase()
    })
}
let result=shout(sent)
console.log(result)