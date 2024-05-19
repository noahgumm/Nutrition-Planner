import '../styles/EditDeck.css'
import Card from './Card'

export default function EditDeck() {
    return(
        <> 
            <div className='deckArea'>
                <h2>Breakfast</h2>
                <div className="breakfastArea">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <br></br>
                <h2>Lunch</h2>
                <div className="lunchArea">

                    <Card />
                    <Card />
                    <Card />
                </div>
                <br></br>
                <h2>Dinner</h2>
                <div className="dinnerArea">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <br></br>
                <h2>Dessert</h2>
                <div className="dessertArea">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className='cardArea'>
                <form>
                    <input type="text" name="searchInput"></input>
                    <button type="submit">Search</button>
                </form>
                <div className='cardList'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}