import { Route, Routes } from 'react-router'

// Pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/about' element={<About />} />
            </Routes>
            <Footer />
        </>
    )
}