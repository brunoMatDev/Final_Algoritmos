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
        <Link to={props.to}>
            <div>
                <span >{props.text}</span>
            </div>
        </Link>
    );
}

export default LinkButton;