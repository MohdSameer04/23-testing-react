import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {

        // with the help of jest.fn() we can create a mock function 
        window.fetch = jest.fn();

        // when we execute our project that will resolved that mock function and overwrite in the fetch function
        window.fetch.mockResolvedValueOnce( {
            json : async () => [{id : 'p1', title : 'First Post'}],
        });
        render(<Async />);


        const listItemElements = await screen.findAllByRole('list', {}, {timeout : 3000});
        expect(listItemElements).not.toHaveLength(0);
    });
});