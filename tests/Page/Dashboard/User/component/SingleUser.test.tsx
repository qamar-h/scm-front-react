import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import SingleUser from '../../../../../src/Page/Dashboard/User/component/SingleUser';
import user from '../../../../__mocks__/user';
import '@testing-library/jest-dom/extend-expect';

describe('Single user component test', () => {

    test('test render', () => {
        
        render(<SingleUser user={user} />);
        
        const 
            fullname = screen.getByText("test TEST"),
            email = screen.getByText("test@scm.fr"),
            id = screen.getByText("#1");
        
        expect(fullname).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(id).toBeInTheDocument();
    });

});

