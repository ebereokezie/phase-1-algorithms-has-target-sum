// function hasTargetSum(numbers, targetSum) {
//   let newCollection=[]
//   for(let i =0; i< numbers.length; i++){
//       // console.log(numbers[i])
//     for(let j =i+1; j<numbers.length; j++){
//   newCollection.push(numbers[i]+numbers[j])
//       }
//   }
//   let newTargetSum = newCollection.find(e => e === targetSum)
//   if(newTargetSum === targetSum){
//     return true
//   } else {
//     return false
//   }
  
// }


function hasTargetSum(array, target){
  for(let i = 0; i<array.length; i++){
    for(let j= i+1; j<array.length; j++){
      if(array[i]+array[j] === target) return true
    }
  }
return false
}

/* 
  O(n)
*/

/* 
  Create a new, blank array
  Iterate over the numbers to create all possible solutions
  Push the solutions to the new array
  Look through new array to see if any solutions equal target
  if so, return true; else, return false
*/

/*
  I want to add all the numbers together in the array and come up with all possible solutions.
  I want to move these solutions to another array, and then see if any of these solutions match my target
  If they do, return it true. If they don't return it false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
