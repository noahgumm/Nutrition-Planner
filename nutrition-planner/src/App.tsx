import './styles/App.css'
import Sidebar from './Sidebar'
import Deck from './Deck'

function App() {
  return (
    <>
      <Sidebar />
      <div className='content-area'>
        <Deck />
      </div>
    </>
  )
}

export default App
