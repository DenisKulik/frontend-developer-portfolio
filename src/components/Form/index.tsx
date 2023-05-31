import { FormContainer, FormItem, Input, Textarea } from './FormStyles.ts';
import Button from '../Button';
import { FormEvent } from 'react';

const Form = () => {
    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => e.preventDefault();

    return (
        <FormContainer>
            <FormItem onSubmit={onSubmitHandler}>
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="E-mail" />
                <Textarea placeholder="Message" />
                <Button type="submit">Send</Button>
            </FormItem>
        </FormContainer>
    );
};

export default Form;