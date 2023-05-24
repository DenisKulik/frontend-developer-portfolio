import { AppWrapper } from './AppStyles.ts';
import Header from './layout/Header';
import Home from './layout/Home';
import Skills from './layout/Skills';
import SkillsContext from './context/SkillsContext.ts';
import { skills } from './data/data.ts';

const App = () => {
    return (
        <SkillsContext.Provider value={skills}>
            <AppWrapper>
                <Header />
                <Home />
                <Skills />
            </AppWrapper>
        </SkillsContext.Provider>
    );
};

export default App;
