import { useState } from "react";
import InputBoxComponent from "../components/InputBoxComponent";
import ButtonComponent from "../components/ButtonComponent";
import "../assets/styleTailwind.css";
import DisplayResult from "../components/DisplayResult";

function Home() {

    //Setting initial values
    const[number1,setNumber1] = useState("");
    const[number2,setNumber2] = useState("");
    const[number,setNumber] = useState("");

    const[add,setAdd] = useState();
    const[subtract,setSubtract] = useState();
    const[multiply,setMultiply] = useState();
    const[divide,setDivide] = useState();

    //Taking Inputs: number1, number2, number
    const takeInput1 = (event) => {
        setNumber1(parseInt(event?.target?.value));
    }

    const takeInput2 = (event) => {
        setNumber2(parseInt(event?.target?.value));
    }

    const takeInputNumber = (event) => {
        setNumber(parseInt(event?.target?.value));
    }
    
    //Function to perform all the four operations
    const calculation = () => {
        setAdd(number1 + number2);
        setSubtract(number1 - number2);
        setMultiply(number1 * number2);
        setDivide(number1 / number2);
    }

    //Function to reset the two input numbers: number1 and number2
    const resetNumbers = () => {
        setNumber1("");
        setNumber2("");
    }

    //Function to reset the whole page
    const resetAll = () => {
        resetNumbers();
        setNumber("");
        setAdd("");
        setSubtract("");
        setMultiply("");
        setDivide("");
    }

    return ( 
        <div className="px-8 grid content-evenly h-screen">
            <div className="flex justify-around">
                <InputBoxComponent placeholderValue="Number 1" value={number1} onChangeFunction={takeInput1} />
                <InputBoxComponent placeholderValue="Number 2" value={number2} onChangeFunction={takeInput2} />
                <ButtonComponent buttonName="Calculate" onClickFunction={calculation} />
                <ButtonComponent buttonName="Reset Numbers" onClickFunction={resetNumbers} />
                <InputBoxComponent placeholderValue="Number" value={number} onChangeFunction={takeInputNumber} />
            </div>
            <div className="flex justify-around">
                <DisplayResult resultValue={add} operation="Addition" operator="+" value={number} 
                               performOperation={()=>setAdd((prev)=>prev + number)} />
                <DisplayResult resultValue={subtract} operation="Subtraction" operator="-" value={number}
                               performOperation={()=>setSubtract((prev)=>prev - number)} />
                <DisplayResult resultValue={multiply} operation="Multiplication" operator="*" value={number} 
                               performOperation={()=>setMultiply((prev)=>prev * number)} />
                <DisplayResult resultValue={divide} operation="Division" operator="/" value={number} 
                               performOperation={()=>setDivide((prev)=>prev / number)} />
            </div>
            <div className="text-end">
                <ButtonComponent buttonName="RESET ALL" onClickFunction={resetAll} additionalClassProp="w-1/4 " />    
            </div>
        </div>
    );
}

export default Home;