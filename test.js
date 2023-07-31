// import the function sum from the app.js file
const { sum,fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
// test eurotodollar
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    // const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
// test dollartoyen
test("one dollar should be 106.588 yen", function(){
   
    const yen = fromDollarToYen(1)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 1 * 142.15 ; 
    
    // this is the comparison for the unit test
     expect(yen).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
// test fromyentopound
test("One Yen should be 0.00976 GBP ", function(){
    
    // use the function like its suppoed to be used
    const pound = fromYenToPound(100)

    const expected = 100 * 0.0055; 
    
   
     expect(pound).toBe(expected); 
})