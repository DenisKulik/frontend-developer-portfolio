import styled, { css } from 'styled-components';
import { DefaultTheme as StyledDefaultTheme } from 'styled-components';

// type InputPropsType = DefaultTheme

export const FormContainer = styled.div``;

export const FormItem = styled.form``;

const baseInputStyles = (props: StyledDefaultTheme) => css`
  width: 100%;
  padding: 1.8rem 2.6rem;
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: 400;
  color: #fff;
  letter-spacing: 0.8px;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: ${props.theme.colors.primary.replace('rgb', 'rgba')
                     .replace(')', ', 0.1)')};
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
`;

export const Input = styled.input`
  ${props => baseInputStyles(props)}
  margin-bottom: 1.2rem;
`;

export const Textarea = styled.textarea`
  ${props => baseInputStyles(props)}
  resize: none;
`;