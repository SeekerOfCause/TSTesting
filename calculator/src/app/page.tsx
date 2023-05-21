"use client";

import React, { useState } from "react";
import DisplayHist, { updateHistory } from "./history"


const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
let historyData = require('./history.json');

let inputOneText: string = "";
let inputTwoText: string = "";
let inputOperatorText: string = "";
let inputEntry;
let inputOneFinal: string = "";
let ans: string;


export default function CalculatorPad() {
  const [inputOne, updateTextOne] = useState(inputOneText);
  const [inputTwo, updateTextTwo] = useState(inputTwoText);
  const [inputOp, updateTextOp] = useState(inputOperatorText);
  const [inputOneTrue, setInputTrue] = useState(false);
  const [displayHist, setHistDisp] = useState(false);
  const [ansDisplayed, setAnsDisp] = useState(false);
  const [result, setResult] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div>
        <div>
          <div className="gridContainer" style={{width: displayHist ? "650px":"325px"}}>
            <div className="calcDisp">
              <div className="calcDispText">
                {inputOne}
                {inputOp}
                {inputTwo}
                {result}
              </div>
            </div>
            <div className="calcRowOne">
              <div className="item1">
                <div className="numberPad" onClick={() => setHistDisp(!displayHist)}></div>
              </div>
              <div className="item2">
                <button className="numberPadAC" onClick={() => allClear()}>
                  AC
                </button>
              </div>
              <div className="item3">
                <button className="numberPad" onClick={() => updateOperator(" ^ ")}>^</button>
              </div>
              <div className="item4">
                <button
                  className="numberPad"
                  onClick={() => updateOperator(" / ")}
                >
                  /
                </button>
              </div>
            </div>
            <div className="calcRowTwo">
              <div className="item1">
                <button
                  className="numberPad"
                  onClick={() => updateCalcText("7")}
                >
                  7
                </button>
              </div>
              <div className="item2">
                <button
                  className="numberPad"
                  onClick={() => updateCalcText("8")}
                >
                  8
                </button>
              </div>
              <div className="item3">
                <button
                  className="numberPad"
                  onClick={() => updateCalcText("9")}
                >
                  9
                </button>
              </div>
              <div className="item4">
                <button
                  className="numberPad"
                  onClick={() => updateOperator(" * ")}
                >
                  *
                </button>
              </div>
            </div>
            <div className="calcRowThree">
              <div className="item1">
                <button
                  className="numberPad"
                  onClick={() => updateCalcText("4")}
                >
                  4
                </button>
              </div>
              <div className="item2">
                <button
                  className="numberPad"
                  onClick={() => updateCalcText("5")}
                >
                  5
                </button>
              </div>
              <div className="item3">
                <button
                  className="numberPad"
                  onClick={() => updateCalcText("6")}
                >
                  6
                </button>
              </div>
              <div className="item4">
                <button
                  className="numberPad"
                  onClick={() => updateOperator(" + ")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="calcRowFour">
              <div className="item1">
                <button
                  className="numberPad"
                  onClick={() => updateCalcText("1")}
                >
                  1
                </button>
              </div>
              <div className="item2">
                <button
                  className="numberPad"
                  onClick={() => updateCalcText("2")}
                >
                  2
                </button>
              </div>
              <div className="item3">
                <button
                  className="numberPad"
                  onClick={() => updateCalcText("3")}
                >
                  3
                </button>
              </div>
              <div className="item4">
                <button
                  className="numberPad"
                  onClick={() => updateOperator(" - ")}
                >
                  -
                </button>
              </div>
            </div>
            <div className="calcRowFive">
              <div className="item1">
                <button
                  className="numberPad"
                  onClick={() => updateCalcText("0")}
                >
                  0
                </button>
              </div>
              <div className="item2">
                <button
                  className="numberPad"
                  onClick={() => updateCalcText(".")}
                >
                  .
                </button>
              </div>
              <div className="item3">
                <button className="numberPad" onClick={() => getResult()}>=</button>
              </div>
              <div className="item4">
                <button className="numberPad" onClick={() => deleteCalcText()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -90 576 725"
                    transform="scale(.75)"
                  >
                    <path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="history" style={{display: displayHist ? "block": "none"}}><div className="numberPad"></div></div>
          </div>
        </div>
      </div>
    </main>
  );

  async function updateCalcText(input: string) {
    if (!inputOneTrue) {
      inputOneText += input;
      updateTextOne(inputOneText);
    } else if (inputOneTrue) {
      inputTwoText += input;
      updateTextTwo(inputTwoText);
    }
  }

  async function updateOperator(input: string) {
    inputOperatorText = input;
    updateTextOp(inputOperatorText);
    setInputTrue(true);
  }

  async function deleteCalcText() {
    if (!inputOneTrue) {
      if (inputOneText.length == 0){
        setResult("");
      }
      let tempText = inputOneText.substring(0, inputOneText.length - 1);
      inputOneText = tempText;
      tempText = "";
      updateTextOne(inputOneText);
      console.log("deleted input one");
    } else if (inputOneTrue && inputTwoText === "") {
      inputOperatorText = "";
      updateOperator(inputOperatorText);
      console.log("deleted operator");
      setInputTrue(false);
    } else {
      let tempText = inputTwoText.substring(0, inputTwoText.length - 1);
      inputTwoText = tempText;
      tempText = "";
      updateTextTwo(inputTwoText);
      console.log("deleted input two");
    }
  }

  async function getResult() {
    setInputTrue(false);
    ans  = performOperation([inputOne, inputOp, inputTwo]);
    allClear();
    deleteCalcText();
    updateTextTwo(ans);
    console.log(ans);
    inputEntry = performOperation([inputOne, inputOp, inputTwo]);
    let jsonEntry = JSON.stringify(inputEntry);
    
  }

  async function setDisp() {
    if (Object.keys(historyData).length > 0) {
      setHistDisp(true);
    }
    else if (Object.keys(historyData).length == 0) {
      setHistDisp(false);
    }
  }

  async function updateHist(input: any) {
    setDisp();
      //updateHistory(input);
  }

  async function allClear() {
    inputOperatorText = "";
    inputOneText = "";
    inputTwoText = "";
    updateTextOne(inputOneText);
    updateTextTwo(inputTwoText);
    updateOperator(inputOperatorText);
  }
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
