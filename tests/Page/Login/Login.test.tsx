import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Login from '../../../src/Page/Login/Login';
import '@testing-library/jest-dom/extend-expect';

describe('Login component test', function() {

    test('test render', () => {

        render(<Login />);

        const 
            emailLabel = screen.getByText("Email"),
            passwordLabel = screen.getByText("Mot de passe"),
            emailPlaceholder = screen.getByPlaceholderText("Entrez votre email ou nom d'utilisateur"),
            passordPlaceholder = screen.getByPlaceholderText("Entrez votre mot de passe"),
            passwordForgetText = screen.getByText("Mot de passe oublié?"),
            buttonText = screen.getByText("Se connecter")
        ;

        expect(emailLabel).toBeInTheDocument();
        expect(passwordLabel).toBeInTheDocument();
        expect(emailPlaceholder).toBeInTheDocument();
        expect(passordPlaceholder).toBeInTheDocument();
        expect(passwordForgetText).toBeInTheDocument();
        expect(buttonText).toBeInTheDocument();
    });

    test('test onSubmit', () => {
       expect(1).toBe(1);
    })
});