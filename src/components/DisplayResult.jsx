import ButtonComponent from "./ButtonComponent";

function DisplayResult(props) {
    return ( 
        <div className="border rounded p-4 grid content-between justify-items-center w-52 h-52">
                <p className="text-xl font-semibold">{props.operation}</p>
                <p>{props.resultValue}</p>
            <ButtonComponent buttonName={props.operator + " " + props.value} onClickFunction={props.performOperation} />
        </div>
     );
}

export default DisplayResult;