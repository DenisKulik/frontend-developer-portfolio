import { AppWrapper } from 'app/app.styles.ts'
import { Header } from 'layout/header'
import { Home } from 'layout/home'
import { Skills } from 'layout/skills'
import { Projects } from 'layout/projects'
import { Contact } from 'layout/contact'
import { Footer } from 'layout/footer'

export const App = () => {
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
