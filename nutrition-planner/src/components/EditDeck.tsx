import '../styles/EditDeck.css'
import CardData from '../datatypes/CardData'
import Card from './Card'
import { useState } from 'react'

export default function EditDeck() {
    const [getBreakfastCards, setBreakfastCards] = useState<CardData[]>([]);
    const [getLunchCards, setLunchCards] = useState<CardData[]>([]);
    const [getDinnerCards, setDinnerCards] = useState<CardData[]>([]);
    const [getDessertCards, setDessertCards] = useState<CardData[]>([]);
    const [getChoiceCards, setChoiceCards] = useState<CardData[]>([]);

    const breakfastCards = getBreakfastCards.map(card => <Card name={card.name} calories={card.calories} foodGroups={card.foodGroups} meals={card.meals}/>);
    const lunchCards = getLunchCards.map(card => <Card name={card.name} calories={card.calories} foodGroups={card.foodGroups} meals={card.meals}/>);
    const dinnerCards = getDinnerCards.map(card => <Card name={card.name} calories={card.calories} foodGroups={card.foodGroups} meals={card.meals}/>);
    const dessertCards = getDessertCards.map(card => <Card name={card.name} calories={card.calories} foodGroups={card.foodGroups} meals={card.meals}/>);
    const choiceCards = getChoiceCards.map(card => <Card name={card.name} calories={card.calories} foodGroups={card.foodGroups} meals={card.meals}/>);

    return(
        <> 
            <div className='deckArea'>
                <h2>Breakfast</h2>
                <div className="breakfastArea">
                    {breakfastCards}
                </div>
                <br></br>
                <h2>Lunch</h2>
                <div className="lunchArea">
                    {lunchCards}
                </div>
                <br></br>
                <h2>Dinner</h2>
                <div className="dinnerArea">
                    {dinnerCards}
                </div>
                <br></br>
                <h2>Dessert</h2>
                <div className="dessertArea">
                    {dessertCards}
                </div>
            </div>
            <div className='cardArea'>
                <form>
                    <input type="text" name="searchInput"></input>
                    <button type="submit">Search</button>
                </form>
                <div className='cardList'>
                    {choiceCards}
                </div>
            </div>
        </>
    )
}