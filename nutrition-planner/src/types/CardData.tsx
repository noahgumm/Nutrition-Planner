class CardData {
    name: string;
    meals: Meals[];
    foodGroups: FoodGroup[];

    constructor(_name: string, _meals: Meals[], _foodGroups: FoodGroup[]) {
        this.name = _name;
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