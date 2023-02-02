import { Route, Routes } from 'react-router'

// Pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/contact' element={<ContactForm />} />
                <Route path='/about' element={<About />} />
            </Routes>
            <Footer />
        </>
    )
}