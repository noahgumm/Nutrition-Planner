import { useState } from 'react'
import './styles/App.css'
import Sidebar from './Sidebar'
import Deck from './Deck'

function App() {
  const [getCurrentContent, setCurrentContent] = useState(String);

  const contentSetter = (content : string) => {
    setCurrentContent(content);
  }

  switch(getCurrentContent){
    case "Home":
      return (
        <>
          <Sidebar setContent={contentSetter}/>
          <div className='content-area'>
          </div>
        </>
      )
      break;
    case "Decks":
      return (
        <>
          <Sidebar setContent={contentSetter}/>
          <div className='content-area'>
            <Deck />
          </div>
        </>
      )
      break;
    case "Browse":
      return (
        <>
          <Sidebar setContent={contentSetter}/>
          <div className='content-area'>
          </div>
        </>
      )
      break;
    case "Settings":
      return (
        <>
          <Sidebar setContent={contentSetter}/>
          <div className='content-area'>
          </div>
        </>
      )
      break;
    default:
      return (
        <>
          <Sidebar setContent={contentSetter}/>
          <div className='content-area'>
          </div>
        </>
      )
      break;
  }

}

export default App
