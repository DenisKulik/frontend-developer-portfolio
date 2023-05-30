import { FormContainer, FormItem, Input, Textarea } from './FormStyles.ts';

const Form = () => {
    return (
        <FormContainer>
            <FormItem>
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="E-mail" />
                <Textarea placeholder="Message" />
            </FormItem>
        </FormContainer>
    );
};

export default Form;