import { useState } from 'react'
import '../styles/Deck.css'
import { FaArrowUp } from "react-icons/fa";

interface DeckProps {
    setContent: (content: string) => void;
}

function Deck({ setContent }: DeckProps) {
    const [isInfoCardVisible, setInfoCardVisible] = useState(false);
    const [isInteracted, setInteracted] = useState(false);

    const toggleSecondCard = () => {
        setInteracted(true);
        setInfoCardVisible(!isInfoCardVisible);
    };

    return(
        <>
        <div className='deck' onClick={toggleSecondCard}>
            <div className="deckBanner">
                <h3>Deck Name</h3>
            </div>
            <div className="card1">

            </div>
            <div className="card2">
                
            </div>
            <div className="card3">
                <FaArrowUp className='upArrow' />
            </div>
            <div className={`infoCard ${isInfoCardVisible ? 'visible' : ''} ${!isInteracted ? 'notInteracted' : ''}`} onClick={toggleSecondCard}>
                <ul>
                    <li>Meals: Breakfast, Lunch, Dinner</li>
                    <li>Food Groups: Grain, Fruit, Vegetables</li>
                    <li>Total Calories: 2300</li>
                </ul>
                <button onClick={() => setContent("Editing")}>Edit</button>
                <button onClick={() => setContent("Viewing")}>View</button>
            </div>
        </div>
        </>
    );
}

export default Deck;