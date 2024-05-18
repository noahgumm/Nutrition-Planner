import { useState } from 'react'
import './styles/Deck.css'
import { FaRegArrowAltCircleUp } from "react-icons/fa";

function Deck() {
    const [isInfoCardVisible, setInfoCardVisible] = useState(false);

    const toggleSecondCard = () => {
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
                <FaRegArrowAltCircleUp className='upArrow' />
            </div>
            <div className={`infoCard ${isInfoCardVisible ? 'visible' : ''}`} onClick={toggleSecondCard}>
                Information related to the deck. (Meals, total calories, food types)
            </div>
        </div>
        </>
    );
}

export default Deck;