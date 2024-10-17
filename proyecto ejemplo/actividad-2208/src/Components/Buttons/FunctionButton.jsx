


/**
 * 
 * @param {
 *  text
 *  callback
 * } props 
 * @returns 
 */
const FunctionButton = (props) => {

    return(
        <button onClick={props.callback}>
            <div className={`text-left flex duration-200`}>
                <span className="mx-[.8rem]">{props.text}</span>
            </div>
        </button>
    );
}

export default FunctionButton;