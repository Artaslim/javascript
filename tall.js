//  Largest number
 function tallest(numbers){
    let largest=numbers[0];
    for(let i=0; i<numbers.length; i++){
        let element=numbers[i];
        if(element>largest){
            largest=element;
        }
    }
    return largest;
}
let arrayGet =[167, 190, 120, 165, 137];
let largestArray = tallest(arrayGet);
console.log(largestArray);



//  Lowest number
 function lower(numbers){
    let lowest=numbers[0];
    for(let i=0; i<numbers.length; i++){
        let element=numbers[i];
        if(element<lowest){
            lowest=element;
        }
    }
    return lowest;
}
let arrayGetOf =[167, 190, 120, 165, 137];
let lowestArray = lower(arrayGetOf);
console.log(lowestArray);