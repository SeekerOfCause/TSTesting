import { getInput, splitInput, setInputVars, checkNum, isOperator } from "./calculator";

describe("Testing calculator", () => {
    const input: string = "3 + 4";

    interface calcVars {
        firstInput: number;
        operator: string;
        secondInput: number;
        }
    
    test("Get input from user", () => {
        expect(getInput(input)).toBe("3 + 4");
  });

    test("Split input from user", () => {
        expect(splitInput(input)).toStrictEqual(["3", "+", "4"]);
    });

    test("Setting input varaibles", () => {
        let input = ["3","+","4"];
        let output: calcVars = setInputVars(input);
        expect(output.firstInput).toEqual(3);
        expect(setInputVars(input).operator).toBe("+");
        expect(setInputVars(input).secondInput).toBe(4);
    });

    test("Check if number", () => {
        expect(checkNum("3")).toBe(true);
        expect(checkNum("+")).toBe(false);
        expect(checkNum("4")).toBe(true);
    })

    test("Check if is operator", () => {
        expect(isOperator("3")).toBe(false);
        expect(isOperator("+")).toBe(true);
        expect(isOperator("4")).toBe(false);
        expect(isOperator("$")).toBe(false);
    })

});
