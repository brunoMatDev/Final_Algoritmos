
/**
 * 
 * @param {
 *  type 
 *  callback
 *  placeholder 
 * } props 
 * @returns 
 */
const TextInput = (props) => {

    return(
            <input type={props?.type} placeholder={props?.placeholder} onChange={props.callback} 
                className={`shadow-x w-[10rem] outline-none rounded-md border-2 text-center p-[.1rem] opacity-75 border-grey duration-200 focus:opacity-100 focus:border-green-500 shadow-xl`}
            />
    );
};

export default TextInput;