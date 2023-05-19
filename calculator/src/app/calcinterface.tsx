"use client";

import React, { useState } from "react";


let inputOneText: string = "";
let inputTwoText: string = "";
let inputOperatorText: string = "";

let inputOneFinal: string = "";
let inputOneTrue: boolean = false;


let inputTwo: string;
let inputOperator: string;

 

export default function CalculatorPad() {

  const [inputOne, updateTextOne] = useState(inputOneText);
  const [inputTwo, updateTextTwo] = useState(inputTwoText);
  const [inputOp, updateTextOp] = useState(inputOperatorText);


  return (
    <div>
      <div>
        <div className="gridContainer">
          <div className="calcDisp">
            <div className="calcDispText">{inputOne}{inputOperator}{inputTwo}</div>
          </div>
          <div className="item1">
            <button className="numberPad" onClick={() => updateCalcText("7")}>7</button>
          </div>
          <div className="item2">
          <button className="numberPad" onClick={() => updateCalcText("8")}>8</button>
          </div>
          <div className="item3">
          <button className="numberPad" onClick={() => updateCalcText("9")}>9</button>
          </div>
          <div className="divide">
          <button className="numberPad" onClick={() => updateCalcText(" / ")}>/</button>
          </div>
          <div className="item4">
          <button className="numberPad" onClick={() => updateCalcText("4")}>4</button>
          </div>
          <div className="item5">
          <button className="numberPad" onClick={() => updateCalcText("5")}>5</button>
          </div>
          <div className="item6">
          <button className="numberPad" onClick={() => updateCalcText("6")}>6</button>
          </div>
          <div className="multiply">
          <button className="numberPad" onClick={() => updateCalcText(" * ")}>*</button>
          </div>
          <div className="item7">
          <button className="numberPad" onClick={() => updateCalcText("1")}>1</button>
          </div>
          <div className="item8">
          <button className="numberPad" onClick={() => updateCalcText("2")}>2</button>
          </div>
          <div className="item9">
          <button className="numberPad" onClick={() => updateCalcText("3")}>3</button>
          </div>
          <div className="add">
          <button className="numberPad" onClick={() => updateCalcText(" + ")}>+</button>
          </div>
          <div className="zero">
          <button className="numberPad" onClick={() => updateCalcText("0")}>0</button>
          </div>
          <div className="decimal">
          <button className="numberPad" onClick={() => updateCalcText(".")}>.</button>
          </div>
          <div className="equal">
          <button className="numberPad">=</button>
          </div>
          <div className="subtract">
          <button className="numberPad" onClick={() => updateCalcText(" - ")}>-</button>
          </div>
        </div>
      </div>
    </div>
  );

  function updateCalcText(input: string): void {

    if (!inputOneTrue){
    inputOneText += input;
    updateTextOne(inputOneText);
    }
    else if (inputOneTrue){
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
    if(!inputOneTrue) {
      let tempText = inputOneText.substring(0,inputOneText.length-1);
      inputOneText = tempText;
      tempText = "";
      updateTextOne(inputOneText);

    }

    if(inputOneTrue) {
      if(inputTwoText === "") {
        inputOperatorText = "";
        updateOperator(inputOperatorText);
      }
      else{
        let tempText = inputTwoText.substring(0,inputTwoText.length-1);
      inputTwoText = tempText;
      tempText = "";
      updateTextTwo(inputTwoText);
      }
    }
  }
}


