import { Link } from "react-router-dom";

/**
 * 
 * @param {
 *  text    - Texto que se muestra en el link
 *  route   - ruta a la que se navega
 * } props 
 * @returns NULL
 */
const LinkButton = (props) => {


    return(
        <Link className="text-black drop-shadow-md" to={props.to}>
            <div className={`text-left flex duration-200`}>
                    <div className="w-[1.75rem]"/>
                <span className="mx-[.8rem]">{props.text}</span>
            </div>
        </Link>
    );
}

export default LinkButton;