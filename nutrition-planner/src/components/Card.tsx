import '../styles/Card.css'
import { IoFastFood } from "react-icons/io5";

function Card() {
    //Flip it for recipe?
    return(
        <>
            <div className='card'>
                <IoFastFood  className='foodIcon'/>
                <h4>Name</h4>
                <h4>Calories</h4>
                <h4>Food Group</h4>
            </div>
        </>
    );
}

export default Card;