function ButtonComponent(props) {
    return (
        <button className={props.additionalClassProp  + "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"}
                onClick={props.onClickFunction}>
            {props.buttonName}
        </button>
     );
}

export default ButtonComponent;