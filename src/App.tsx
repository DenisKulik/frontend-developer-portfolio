import { AppWrapper } from './AppStyles.ts';
import Header from './layout/Header';
import Home from './layout/Home';
import Skills from './layout/Skills';
import SkillsContext from './context/SkillsContext.ts';
import { projects, skills } from './data/data.ts';
import Projects from './layout/Projects';
import ProjectsContext from './context/ProjectsContext.ts';
import Contact from './layout/Contact';
import Footer from './layout/Footer';

const App = () => {
    return (
        <SkillsContext.Provider value={skills}>
            <ProjectsContext.Provider value={projects}>
                <AppWrapper>
                    <Header />
                    <Home />
                    <Skills />
                    <Projects />
                    <Contact />
                    <Footer />
                </AppWrapper>
            </ProjectsContext.Provider>
        </SkillsContext.Provider>
    );
};

export default App;
