const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
// module.exports = { sum };

// 
let onEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
    
}

function fromEuroToDollar (euros){
    const dollars = euros * onEuroIs["USD"];
    return dollars
}
function fromDollarToYen(dollars){
   
    const Yen = dollars * 142.15;
    return Yen
}
function fromYenToPound(yen){
    
    const pound = yen * 0.0055;
    return pound
}
console.log(fromEuroToDollar(5));
console.log(fromDollarToYen(5));
console.log(fromYenToPound(5));


module.exports = { fromEuroToDollar,sum,fromDollarToYen,fromYenToPound };