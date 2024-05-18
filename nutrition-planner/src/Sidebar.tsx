import { FaUser } from 'react-icons/fa'
import './styles/Sidebar.css'

function Sidebar() {
    return(
        <div className="sidebar">
            <div className="profile">
                <FaUser className="profile-icon" />
            </div>
            <div className="buttons">
                <button className="sidebar-button">Home</button>
                <button className="sidebar-button">My Nutrition Decks</button>
                <button className="sidebar-button">Browse Decks</button>
                <button className="sidebar-button">Settings</button>
                <button className="sidebar-button">Log Out</button>
            </div>
        </div>
    )
}

export default Sidebar;