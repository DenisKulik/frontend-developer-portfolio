import { AppWrapper } from './AppStyles.ts'
import Header from './layout/Header'
import Home from './layout/Home'
import Skills from './layout/Skills'
import Projects from './layout/Projects'
import Contact from './layout/Contact'
import Footer from './layout/Footer'

const App = () => {
    return (
        <AppWrapper>
            <Header />
            <Home />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </AppWrapper>
    )
}

export default App
