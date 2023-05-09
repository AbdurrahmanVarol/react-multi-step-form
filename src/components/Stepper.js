import React, { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import { Button } from "reactstrap";

const Stepper = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const getCurrentComponent = () =>{
    switch(currentPage){
        case 1:
            return (<Form1></Form1>)
        case 2:
            return (<Form2></Form2>)
        case 3:
            return (<Form3></Form3>)
        case 4:
            return (<Form4></Form4>)
            default:
                return (<Form1/>)
    }
  }
  return (
    <div className="comp">
      <div className="step-wizard">
        <ul className="step-wizard-list">
          <li
            className={`step-wizard-item ${
              currentPage == 1 ? "current-item" : ""
            }`}
          >
            <span className="progress-count">1</span>
            <span className="progress-label">Step 1</span>
          </li>
          <li
            className={`step-wizard-item ${
              currentPage == 2 ? "current-item" : ""
            }`}
          >
            <span className="progress-count">2</span>
            <span className="progress-label">Step 2</span>
          </li>
          <li
            className={`step-wizard-item ${
              currentPage == 3 ? "current-item" : ""
            }`}
          >
            <span className="progress-count">3</span>
            <span className="progress-label">Step 3</span>
          </li>
          <li
            className={`step-wizard-item ${
              currentPage == 4 ? "current-item" : ""
            }`}
          >
            <span className="progress-count">4</span>
            <span className="progress-label">Step 4</span>
          </li>
        </ul>
        
      </div>
      <div>
        {
            getCurrentComponent()
        }
        <Button onClick={()=> setCurrentPage(prev=>prev-1)} disabled={currentPage<=1} >Previous</Button>
        <Button onClick={()=> setCurrentPage(prev=>prev+1)} disabled={currentPage>4}>Next</Button>
      </div>
    </div>
  );
};

export default Stepper;
