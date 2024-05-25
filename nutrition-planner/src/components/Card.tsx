import '../styles/Card.css'
import { IoFastFood } from "react-icons/io5";

interface CardProps {
    name: string;
    calories: Number;
    foodGroups: FoodGroup[];
    meals: Meals[];
}

function Card({name, calories, foodGroups, meals}: CardProps) {

    const groups = foodGroups.map(group => <li>{group}</li>);
    const m = meals.map(meal=> <li>{meal}</li>);

    //Flip it for recipe?
    return(
        <>
            <div className='card'>
                <IoFastFood  className='foodIcon'/>
                <h4>Meal: {name}</h4>
                <h4>Calories: {calories.toString()}</h4>
                <h4>Food Groups</h4>
                <ul>
                    {groups}
                </ul>
                <br></br>
                <h4>Meal Times</h4>
                <ul>
                    {m}
                </ul>
            </div>
        </>
    );
}

//Different meals associated with the food 
enum Meals {
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert"
}

//Different food groups
enum FoodGroup {
    "Fruits",
    "Vegetables",
    "Grains",
    "Protein",
    "Dairy"
}

export default Card;