let toCalc: string = "3 + 4";

interface calcVars {
  firstInput: number;
  operator: string;
  secondInput: number;
}

let inputVars: calcVars;

export function getInput(input: string): string {
  toCalc = input;

  return toCalc;
}

export function splitInput(input: string): string[] {
  let splitIn: string[] = getInput(input).split(" ");
  return splitIn;
}

export function setInputVars(input: string[]): calcVars {

    

  if (checkNum(input[0]) && checkNum(input[2]) && isOperator(input[1])) {
      let inputVars: calcVars;
      let inputVarsTemp: calcVars = {
      firstInput: parseFloat(input[0]),
      operator: input[1],
      secondInput: parseFloat(input[2]),
    };
    return inputVars = inputVarsTemp;
  }
return inputVars;
  
}

export function checkNum(input: string): boolean {
  let isNum: boolean;

  if (!isNaN(parseFloat(input))) {
    isNum = true;
  } else {
    isNum = false;
  }

  return isNum;
}

export function isOperator(input: string): boolean {
  switch(input) {
    case("+"):
    case("-"):
    case("*"):
    case("/"):
    case("^"):
        return true;

    default: return false;
  }
}

export function performOperation(input: calcVars): number{

  let inputOp = input.operator;
  let firstNum = input.firstInput;
  let secondNum = input.secondInput;

  switch(inputOp) {
    case("+"):
      //add(firstNum, secondNum);
      return firstNum + secondNum;

    case("-"):
      //subtract(firstNum, secondNum);
      return firstNum - secondNum;
    
    case ("/"):
     // divide(firstNum, secondNum);
     return firstNum / secondNum;

    case ("*"):
     // multiply(firstNum, secondNum);
     return firstNum * secondNum;

    case("^"):
     // pow(firstNum, secondNum);
     return Math.pow(firstNum, secondNum);

  }

  return firstNum;

}

export function add(firstNum: number, secondNum: number): number {

  return firstNum + secondNum;

}

export function subtract(firstNum: number, secondNum: number): number {

  return firstNum - secondNum;

}

export function divide(firstNum: number, secondNum: number): number {

  return firstNum / secondNum;

}

export function multiply(firstNum: number, secondNum: number): number {

  return firstNum * secondNum;

}

export function pow(firstNum: number, secondNum: number): number {

  return Math.pow(firstNum, secondNum);

}