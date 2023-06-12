
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Landing, Home, NewAttempt } from './pages'


function App() {




  return (
    <div className='App h-screen w-screen'>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/newAttempt' element={<NewAttempt/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
