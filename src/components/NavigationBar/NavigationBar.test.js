import React from 'react';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavigationBar from './NavigationBar';

test('NavigationBar component renders correctly', () => {
    render(
        <MemoryRouter>
            <NavigationBar/>
        </MemoryRouter>
    );

    const homeLink = screen.getByText('Home');
    const charactersLink = screen.getByText('👤Characters');
    const housesLink =screen.getByText('🚩Houses');

    expect(homeLink).toBeInTheDocument();
    expect(charactersLink).toBeInTheDocument();
    expect(housesLink).toBeInTheDocument();
});