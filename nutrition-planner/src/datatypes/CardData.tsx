export default class CardData {
    name: string;
    calories: Number;
    meals: Meals[];
    foodGroups: FoodGroup[];

    constructor(_name: string, _calories: Number, _meals: Meals[], _foodGroups: FoodGroup[]) {
        this.name = _name;
        this.calories = _calories;
        this.meals = _meals;
        this.foodGroups = _foodGroups;
    }
    
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