import { AppWrapper } from './AppStyles.ts';
import Header from './layout/Header';
import Home from './layout/Home';
import Skills from './layout/Skills';
import SkillsContext from './context/SkillsContext.ts';
import { particlesOptions, projects, skills } from './data/data.ts';
import Projects from './layout/Projects';
import ProjectsContext from './context/ProjectsContext.ts';
import Contact from './layout/Contact';
import Footer from './layout/Footer';
import ParticlesOptionsContext from './context/ParticlesOptionsContext.ts';

const App = () => {
    return (
        <SkillsContext.Provider value={skills}>
            <ProjectsContext.Provider value={projects}>
                <ParticlesOptionsContext.Provider value={particlesOptions}>
                    <AppWrapper>
                        <Header />
                        <Home />
                        <Skills />
                        <Projects />
                        <Contact />
                        <Footer />
                    </AppWrapper>
                </ParticlesOptionsContext.Provider>
            </ProjectsContext.Provider>
        </SkillsContext.Provider>
    );
};

export default App;
