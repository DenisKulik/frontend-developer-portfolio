import styled from 'styled-components'

const Form = styled.form`
    min-width: 50rem;
    width: 100%;
    flex: 1;
`

const InputWrapper = styled.div`
    width: 100%;
    position: relative;
    padding-bottom: 1rem;
`

const Input = styled.input`
    width: 100%;
    margin-bottom: 1.2rem;
    padding: 1.8rem 2.6rem;
    font-family: inherit;
    font-size: 1.8rem;
    font-weight: 400;
    color: #fff;
    letter-spacing: 0.8px;
    border-radius: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: ${({ theme }) =>
        theme.colors.primary.replace('rgb', 'rgba').replace(')', ', 0.1)')};
    transition: 0.3s ease-in-out;

    &:focus {
        color: #121212;
        outline: none;
        background-color: #fff;
    }

    &::placeholder {
        font-size: 1.8rem;
        font-weight: 400;
        color: #fff;
    }

    &:focus::placeholder {
        color: #121212;
        opacity: 0.8;
    }
`

const Textarea = styled.textarea`
    resize: none;
`

const ErrorMessage = styled.div`
    position: absolute;
    bottom: 0;
    left: 2.6rem;
    font-size: 1.4rem;
    color: #ff4949;
`
export const S = {
    Form,
    InputWrapper,
    Input,
    Textarea,
    ErrorMessage,
}
