import './App.css';
import basicMath from "@mferns/basic-math";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, ToggleButtonGroup, ToggleButton, Accordion } from "react-bootstrap";

function App() {
  const [inputs, setInputs] = useState({
    input1: '', 
    input2: ''
  });
  const [outputFormat, setOutputFormat] = useState("decimal");
  const [result, setResult] = useState();

  useEffect(() => {}, [])

  const onChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };
  const handleClick = (e) =>{
    var action = e.target.attributes.getNamedItem('action');
    
    switch(action.nodeValue){
      case "add": 
        setResult(
          basicMath.addToString(outputFormat, inputs.input1, inputs.input2)
        );
        break;
      case "sub":
        setResult(basicMath.subtractToString(outputFormat, inputs.input1, inputs.input2));
        break;
      case "multiply":
         setResult(basicMath.multiplyToString(outputFormat, inputs.input1, inputs.input2));
         break;
      case "divide": 
        setResult(basicMath.divideToString(outputFormat, inputs.input1, inputs.input2));
        break;
      case "exponent":
        setResult(basicMath.powerToString(outputFormat, inputs.input1, inputs.input2));
        break;
      case "sqrRt": 
        setResult(basicMath.squareRootToString(outputFormat, inputs.input1));
        break;
      default: 
        console.log(`Something went wrong, what button did you click?!?! ${action.nodeValue}`);
        break;
    }
  }
  
  const handleOutput = (e) =>  { setOutputFormat(e) }; 
  return (
    <div className="centered">
      <form>
        <div id="" className="fltRight">
          <ToggleButtonGroup
            type="radio"
            name="output"
            value={outputFormat}
            onChange={handleOutput}
            vertical
          >
            <ToggleButton id="decimal" value="decimal" variant="secondary">
              Decimal
            </ToggleButton>
            <ToggleButton id="binary" value="binary" variant="secondary">
              Binary
            </ToggleButton>
            <ToggleButton id="octal" value="octal" variant="secondary">
              Octal
            </ToggleButton>
            <ToggleButton id="hex" value="hex" variant="secondary">
              Hex
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="itemGroup">
          <label>Input 1</label>
          <input
            type="text"
            name="input1"
            value={inputs.input1}
            onChange={onChange}
          />
        </div>
        <div className="itemGroup">
          <label>Input 2</label>
          <input
            type="text"
            name="input2"
            value={inputs.input2}
            onChange={onChange}
          />
        </div>
        <div className="itemGroup">
          <label>Result </label>
          <input
            type="text"
            name="result"
            value={result}
            className="readOnly"
            readOnly={true}
          />
        </div>
        <div className="buttonGroup">
          <ButtonGroup>
            <Button onClick={handleClick} action="add">
              Add
            </Button>
            <Button onClick={handleClick} action="sub">
              Subtract
            </Button>
            <Button onClick={handleClick} action="multiply">
              Multiply
            </Button>
            <Button onClick={handleClick} action="divide">
              Divide
            </Button>
            <Button onClick={handleClick} action="exponent">
              Raise to
            </Button>
            <Button onClick={handleClick} action="sqrRt">
              Square Root
            </Button>
          </ButtonGroup>
        </div>
      </form>
      <Accordion className="accordion">
        <Accordion.Header>
          Instructions
        </Accordion.Header>
        <Accordion.Body>
          <p>Put your values into input 1 and Input 2. Select a button along the bottom to perform the corresponding action. Input 2 will be subtracted from Input 1, and Input 1 will be divided by input 2. If you choose squre root, only the first input will be used.</p>
          <p>You are able to change the output type by selecting from the right side. Default is standard decimal.</p>
        </Accordion.Body>
      </Accordion>
    </div>
  );
}

export default App;
