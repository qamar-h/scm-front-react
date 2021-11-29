import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import Filtres from '../../../../../src/Page/Dashboard/User/component/Filters';
import '@testing-library/jest-dom/extend-expect';

describe("User's filtre component test", () => {

    const dispatchMock = jest.fn();

    test('test render', () => {
        
        const { getByPlaceholderText } = render(<Filtres dispatch={dispatchMock} />)
        const 
            lastnamePlaceholder = getByPlaceholderText('Nom ...'),
            firstnamePlaceholder = getByPlaceholderText('Prénom ...'),
            emailPlaceholder = getByPlaceholderText('Email ...');

        expect(lastnamePlaceholder).toBeInTheDocument();
        expect(firstnamePlaceholder).toBeInTheDocument();
        expect(emailPlaceholder).toBeInTheDocument();
    });

    /*test('test handleSubmit', () => {
        
        let handleSubmit = jest.fn();
        let useFormMocking = {
            triggerValidation: jest.fn(),
            handleSubmit: handleSubmit(),
            getValues: jest.fn(),
        };

        const { getByRole } = render(<Filtres dispatch={dispatchMock} {...useFormMocking} />);
        //fireEvent.submit(getByRole("form"))
        expect(handleSubmit).toHaveBeenCalled();

    });*/

});