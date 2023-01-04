/**
 *  Implementation of binary search
 */


/**
 * 
 * 
 *  Given an ordered array of integers and a integer. If the number exists in the
 *  provided array, its index is returned. If not, null is returned.
 *  
 * 
 * @param myArray 
 * @returns The index of number or null.
 */
export default function binarySearch(myArray: number[], number: number): number | null{

  if(!Array.isArray(myArray)){
    return null;
  }

  if(!Number.isInteger(number)){
    return null;
  }

  let lowerIndex:number = 0;
  let higherIndex:number = myArray.length;

  while(lowerIndex <= higherIndex){
    const guessIndex = Math.floor((lowerIndex + higherIndex) / 2);
    const currentGuess = myArray[guessIndex];

    if(currentGuess === number){
      return guessIndex;
    }

    if(currentGuess > number){
      higherIndex = guessIndex - 1;
    }else{
      lowerIndex = guessIndex + 1;
    }
  }
  return null;
}