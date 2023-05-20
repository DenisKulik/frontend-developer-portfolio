import styled from 'styled-components';

const App = () => {
    return (
        <AppWrapper>
            Hello, I'm Denis Kulik
            Frontend developer
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
