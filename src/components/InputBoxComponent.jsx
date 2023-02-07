function InputBoxComponent(props) {
    return ( 
        <input type="text" 
            className="w-1/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder={props.placeholderValue} onChange={props.onChangeFunction} value={props.value} />
    );
}

export default InputBoxComponent;