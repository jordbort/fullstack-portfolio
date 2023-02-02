import { Route, Routes } from 'react-router'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
            </Routes>
            <Footer />
        </>
    )
}