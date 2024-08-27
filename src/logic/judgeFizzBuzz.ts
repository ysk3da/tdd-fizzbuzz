import { checkMod3, checkMod5 } from "./checkMod";

export function judgeFizzBuzz(i:number){
  if(checkMod3(i) && checkMod5(i)){
    return "FizzBuzz";
  }else if(checkMod3(i)){
    return "Fizz";
  }else if(checkMod5(i)){
    return "Buzz";
  }else{
    return i.toString();
  }
}