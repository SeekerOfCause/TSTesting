let toCalc: string;

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

export function performOperation(input: string[]): string {
  let ans: number = NaN;

  if (checkNum(input[0]) && checkNum(input[2]) && isOperator(input[1])) {
    let inputOp = input[1];
    let firstNum = parseFloat(input[0]);
    let secondNum = parseFloat(input[2]);

    switch (inputOp) {
      case "+":
        //add(firstNum, secondNum);
        ans = firstNum + secondNum;

      case "-":
        //subtract(firstNum, secondNum);
        ans = firstNum - secondNum;

      case "/":
        // divide(firstNum, secondNum);
        ans = firstNum / secondNum;

      case "*":
        // multiply(firstNum, secondNum);
        ans = firstNum * secondNum;

      case "^":
        // pow(firstNum, secondNum);
        ans = Math.pow(firstNum, secondNum);
    }
    return ans.toString(10);
  }
  return "";
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
  switch (input) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "^":
      return true;

    default:
      return false;
  }
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
