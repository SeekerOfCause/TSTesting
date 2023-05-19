"use client";

import React, { useState } from "react";


let inputOneText: string = "";
let inputTwoText: string = "";
let inputOperatorText: string = "";

let inputOneFinal: string = "";
let inputOneTrue: boolean = false;

let inputTwo: string;
let inputOperator: string;

const deleteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>

export default function CalculatorPad() {
  const [inputOne, updateTextOne] = useState(inputOneText);
  const [inputTwo, updateTextTwo] = useState(inputTwoText);
  const [inputOp, updateTextOp] = useState(inputOperatorText);



  return (
    <div>
      <script
        src="https://kit.fontawesome.com/4cf0328873.js"
        crossOrigin="anonymous"
      ></script>
      <div>
        <div className="gridContainer">
          <div className="calcDisp">
            <div className="calcDispText">
              {inputOne}
              {inputOp}
              {inputTwo}
            </div>
          </div>
          <div className="calcRowOne">
            <div className="item1">
              <div className="numberPad"></div>
            </div>
            <div className="item2">
              <button className="numberPadAC" onClick={() => allClear()}>
                AC
              </button>
            </div>
            <div className="item3">
              <button className="numberPad">^</button>
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
              <button className="numberPad" onClick={() => updateCalcText("7")}>
                7
              </button>
            </div>
            <div className="item2">
              <button className="numberPad" onClick={() => updateCalcText("8")}>
                8
              </button>
            </div>
            <div className="item3">
              <button className="numberPad" onClick={() => updateCalcText("9")}>
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
              <button className="numberPad" onClick={() => updateCalcText("4")}>
                4
              </button>
            </div>
            <div className="item2">
              <button className="numberPad" onClick={() => updateCalcText("5")}>
                5
              </button>
            </div>
            <div className="item3">
              <button className="numberPad" onClick={() => updateCalcText("6")}>
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
              <button className="numberPad" onClick={() => updateCalcText("1")}>
                1
              </button>
            </div>
            <div className="item2">
              <button className="numberPad" onClick={() => updateCalcText("2")}>
                2
              </button>
            </div>
            <div className="item3">
              <button className="numberPad" onClick={() => updateCalcText("3")}>
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
              <button className="numberPad" onClick={() => updateCalcText("0")}>
                0
              </button>
            </div>
            <div className="item2">
              <button className="numberPad" onClick={() => updateCalcText(".")}>
                .
              </button>
            </div>
            <div className="item3">
              <button className="numberPad">=</button>
            </div>
            <div className="item4">
              <button
                className="numberPad"
                onClick={() => deleteCalcText()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -90 576 725" transform="scale(.75)"><path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function updateCalcText(input: string): void {
    if (!inputOneTrue) {
      inputOneText += input;
      updateTextOne(inputOneText);
    } else if (inputOneTrue) {
      inputTwoText += input;
      updateTextTwo(inputTwoText);
    }
  }

  function updateOperator(input: string): void {
    inputOperatorText += input;
    updateTextOp(inputOperatorText);
    inputOneTrue = true;
  }

  function deleteCalcText(): void {
    if (!inputOneTrue) {
      let tempText = inputOneText.substring(0, inputOneText.length - 1);
      inputOneText = tempText;
      tempText = "";
      updateTextOne(inputOneText);
    }

    if (inputOneTrue) {
      if (inputTwoText === "") {
        inputOperatorText = "";
        updateOperator(inputOperatorText);
      } else {
        let tempText = inputTwoText.substring(0, inputTwoText.length - 1);
        inputTwoText = tempText;
        tempText = "";
        updateTextTwo(inputTwoText);
      }
    }
  }

  function allClear(): void {
    inputOperatorText = "";
    inputOneText = "";
    inputTwoText = "";
    updateTextOne(inputOneText);
    updateTextTwo(inputTwoText);
    updateOperator(inputOperatorText);
  }
}
