import { useState } from 'react'
import './styles/App.css'
import Sidebar from './components/Sidebar'
import Deck from './components/Deck'

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
          <div className='content-area decks'>
            <Deck setContent={contentSetter}/>
            <Deck setContent={contentSetter}/>
            <Deck setContent={contentSetter}/>
            <Deck setContent={contentSetter}/>
            <Deck setContent={contentSetter}/>
            <Deck setContent={contentSetter}/>
          </div>
        </>
      )
      break;
    case "Editing":
      return (
        <>
          <Sidebar setContent={contentSetter}/>
          <div className='content-area'>
          </div>
        </>
      )
      break;
    case "Viewing":
      return (
        <>
          <Sidebar setContent={contentSetter}/>
          <div className='content-area'>
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
