let _ = {
    clamp(num, lB , uB){
 const lowerClampedValue = Math.max( num, lB);
 const clampedValue = Math.min(lowerClampedValue, uB);
 return clampedValue;
    },
    inRange(num, start, end){
let min= 0;
let max = 0;
 if (end) { min = start;  max =end }
else { min = 0 ; max = start};
if (min > max){ max= start ; min =end };
if (num >= min && num < max){ return true}
else {return false};
    },
    words(string){
        let length = string.length -1 ;
        let outArr = [];
        let startClip = 0;
        for (i=0 ; i<= length ; i++){
            if (string[i] === ' '){ outArr.push(string.substring(startClip, i)); startClip = i+1;}
            else if (i === length){ outArr.push(string.substring(startClip, i+1))}

        }
        return outArr;
        // this has been implemeted in the most complicated possible way  - could have been achieved with .split()
        
    },
    pad(string, length){
       if (length <= string.length){return string};
       let padTotal = length - string.length
      let padLeft = Math.floor(padTotal/2);
       let padRight = Math.ceil(padTotal/2);
       let space = ' '
        return (space.repeat(padLeft) + string + space.repeat(padRight))
    },
    has(object, key){

for ( let elm in object){
    if (typeof elm === 'object'){ 
        for ( let elm2 in elm){
            if (elm2 === key){return true}
            else {return false}
        }
}
else {
    if (elm === key){return true}
    else {return false}

} } },
invert(obj){
let outObj = {};
let propNames = Object.getOwnPropertyNames(obj);
let propLength = propNames.length
for (let i = 0; i < propLength; i ++){
    let values = Object.values(obj);
    let value = values[i];
    outObj[value] = propNames[i];
    }
    return outObj;
},
findKey(obj, func){
    let keys = Object.keys(obj);
   let keyLength = keys.length;
   let values = Object.values(obj);
for (let i = 0; i < keyLength ; i++){
    let result = func(values[i]);
    // I need to find out a way to get the key name, maybe discuss on monday- I have used 2 arrays of keys and values instead
    if (result){ return keys[i]};
};
return undefined
},
drop(arr, n){
    if (n === undefined){ n = 1};
    return arr.slice(n);
},
dropWhile(arr, func){
    let length = arr.length;
    for ( let i = 0 ; i < length ; i++){
        let result = func(arr[i], i, arr);
        if (result === false ){ return this.drop(arr, i)}
    }
},
chunk(arr, n){
if (n === undefined){ n = 1};
let outArr = [];
let inArr = [];
let length = arr.length;
for ( let i = 0 ; i<length; i++){
    inArr.push(arr[i]);
    let timeToCut =  Number.isInteger((i+1)/n);
    if (timeToCut){
        outArr.push(inArr); 
        inArr = [];};
    if (i === length-1 && inArr[0]){outArr.push(inArr)};    
}
return outArr;
}


}





// Do not write or modify code below this line.
module.exports = _;