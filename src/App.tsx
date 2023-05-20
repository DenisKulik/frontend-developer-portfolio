import styled from 'styled-components';
import Header from './components/Header/Header.tsx';

const App = () => {
    return (
        <AppWrapper>
            <Header />
        </AppWrapper>
    );
};

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  color: white;
  background-color: #0F1624;
`;

export default App;
