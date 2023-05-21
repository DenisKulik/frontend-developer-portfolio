import { AppWrapper } from './AppStyles.ts';
import Header from './layout/Header';
import Home from './layout/Home';

const App = () => {
    return (
        <AppWrapper>
            <Header />
            <Home />
        </AppWrapper>
    );
};

export default App;
