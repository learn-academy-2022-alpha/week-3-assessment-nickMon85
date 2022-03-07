// // ASSESSMENT 3: Coding Practical Questions with Jest



// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest
// // a describe method that lists the name of the function OR naming of the particular test.
describe("hello", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("returns a string that says hi", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(hello()).toEqual("hi")
    })
  })
  const hello = () => {
    return "hi"
  }
//Just ran to make sure i was formatting right!

// // --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// // a) Create a test with expect statements for each of the variables provided.
// // a describe method that lists the name of the function OR naming of the particular test.
// //1. test jest
// //2. create a function variable (to test)
describe("numbFib3", () => {

    let inputNum = 6
    let result = [1, 1, 2, 3, 5, 8]
    let inputNum2= 10
    let result2= [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
  
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(numbFib3(6)).toEqual(result)
      expect(numbFib3(10)).toEqual(result2)
    })
})
// //TESTED JEST GOT MY FAIL!!
// //1.Create the function the takes in the number
// //2.That number parameter will be the number of iterations to create an array
// //Tools: a.)while(loop) b.Recursion c.for loop
// //!!Note: This is just Algerbra 
// //[1,1,2,3,5]
const numbFib = (n)=>{
    var fib = [1, 1];
    for(var i=fib.length; i<n; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }
    return fib
}
const numFib2 = (n) =>{
    var fib2 =[1,1];
    var i = 0;
    while(i<n){
        fib2[i]= fib2[i-2] + fib2[i-1]
    
        n--;
    }
    return fib2
}
// //I kinda want to work on Recurrsion.
// //To my best understanding, recurrsion it similar to loops, but its simply afunction recalling itself.(To best of my remedial understanding!!)
// //1. create my function
const numbFib3=(number)=>{
    //i'll use an if statement I understand. 
    if(number>2){
        //Ill use the basic fib algerbra
        // Also, I need an array!! I wrote literally 13 codes that didnt work mostly due to screwing up my array.
        return [1];
    }
    if(number>3){
        return [1,1];
    }
    //Here's the remix
    var arr1 = numbFib3(number-1);
    arr1.push(arr1[number-2] +[number-3]);
    return arr1


}
//expected [1,1,2,3,5,8] recieved [1,2,3,5,8]
//My recurrsion kinda worked, never tried it before, the web has alot of overly complicated models
// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
describe("sortOdd", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    let output= [-9, 7, 9, 199]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    let output2= [-823, 7, 23]
    it("returns a new array of only odd numbers sorted from least to greatest.", () => {
      expect(sortOdd(fullArr1)).toEqual(output)
      expect(sortOdd(fullArr2)).toEqual(output2)
    })
  })



// Test failed!!

// b) Create the function that makes the test pass.
//1.create funct.
//2.Separate Strings, even numbers, and booleans
//3.Leave only odd numbers
//4.Sort odd numbers
const sortOdd = (arr)=>{
    let oddNum = arr.filter(value=>{
        return typeof value === "number" && value % 2!==0
    })
    return oddNum.sort((a,b)=>a-b)

}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
// !!Function name accSum
describe("accSum", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    let output= [2, 6, 51, 60]

    // const numbersToAdd2 = [0, 7, -8, 12]
    // let output2 = [0, 7, -1, 11]

    // const numbersToAdd3 = []
    // let output3 = []
    it("returns an array of the accumulating sum. An empty array should return an empty array", () => {
      expect(accSum(numbersToAdd1)).toEqual(output)
    //   expect(accSum(numbersToAdd2)).toEqual(output2)
    //   expect(accSum(numbersToAdd3)).toEqual(output3)
    })
  })
  //Use the same Idea as the fib!
//Test Failure
const accSum =(arr)=>{
    var arrSum = [1,1]
    for(let i =0; i<arr.length+1;i++){
        arrSum[i]=arr[i-2]+arr[i-1]
    }
    return arrSum
}
//Test fail!!!Failed like 10times



// b) Create the function that makes the test pass.
