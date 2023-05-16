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
