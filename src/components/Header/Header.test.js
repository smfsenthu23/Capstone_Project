import React from 'react';
import {render} from '@testing-library/react';
import Header from './Header';

test('Header component renders correctly', () => {
    const {container} = render(<Header />);

    const mainContainer = container.querySelector('.main__container');
    expect(mainContainer).toBeInTheDocument();

    const image = container.querySelector('img');
    expect(image).toBeInTheDocument();
})