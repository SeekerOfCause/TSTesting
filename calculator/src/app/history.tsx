import React from "react";

const historyData = require("./history.json");
const fs = require("fs");

const DisplayHist = (): any => {
  Object.keys(historyData).forEach((key) => {
    let currentInput = historyData[key]["input"];
    let currentResponse = historyData[key]["response"];

    // return (
    //   <>
    //     <li>
    //       <p>{currentInput}</p>
    //       <p>{currentResponse}</p>
    //     </li>
    //   </>
    // );
  });
}

export default DisplayHist;

export async function updateHistory(toHistory: any) {
  fs.writeFileSync(
    historyData,
    JSON.stringify(toHistory[Object.keys(historyData).length])
  );
}
