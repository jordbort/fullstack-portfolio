import './App.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import { Route, Routes } from 'react-router'

function App() {
    const URL = "http://localhost:4000/"
    return (
        <>
            <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects URL={URL} />} />
                    <Route path='/about' element={<About URL={URL} />} />
                </Routes>
            <Footer />
        </>
    )
}

export default App