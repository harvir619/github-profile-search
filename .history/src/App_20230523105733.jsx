import './App.css'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
function App() {

  return (
    <>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          
          <main>Content</main>
          {/* <Footer/> */}
        </div>
        <h1>Hello World</h1>
        
        </Router>
    </>
  )
}

export default App
