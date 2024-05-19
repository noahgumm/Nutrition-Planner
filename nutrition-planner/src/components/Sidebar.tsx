import { FaUser } from 'react-icons/fa'
import '../styles/Sidebar.css'

interface SidebarProps {
    setContent: (content: string) => void;
}

function Sidebar({ setContent }: SidebarProps) {
    return(
        <div className="sidebar">
            <div className="profile">
                <FaUser className="profile-icon" />
            </div>
            <div className="buttons">
                <button className="sidebar-button" onClick={() => setContent("Home")}>Home</button>
                <button className="sidebar-button" onClick={() => setContent("Decks")}>My Nutrition Decks</button>
                <button className="sidebar-button" onClick={() => setContent("Browse")}>Browse Decks</button>
                <button className="sidebar-button" onClick={() => setContent("Settings")}>Settings</button>
                <button className="sidebar-button" onClick={() => setContent("LogOut")}>Log Out</button>
            </div>
        </div>
    )
}

export default Sidebar;