import { render } from '@testing-library/react';
import Alert from '../../src/Utils/Alert';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

describe('Alert component Test', () => {

    test('Test the content of text without providing it', () => {
        render(<Alert type={undefined} text={undefined} />) ;
        const text = screen.getByText("successfully")
        expect(text).toBeInTheDocument();
    });

    test('Test the content of text by providing it', () => {
        render(<Alert type={"danger"} text={"an error occured!"} />) ;
        const text = screen.getByText("an error occured!")
        expect(text).toBeInTheDocument();
    });

});
