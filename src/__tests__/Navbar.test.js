import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';

describe('Loading navbar component', () => {
  it('Renders correctly', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const title = screen.getByText('Space Travelers Hub');
    expect(title).toBeInTheDocument();
  });

  it('Renders correct links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    
    const rockets = screen.getByRole('link', { name: 'Rockets' });
    const dragons = screen.getByRole('link', { name: 'Dragons' });
    const missions = screen.getByRole('link', { name: 'Missions' });
    const profile = screen.getByRole('link', { name: 'My Profile' });

    expect(rockets).toHaveAttribute('href', '/rockets');
    expect(dragons).toHaveAttribute('href', '/dragons');
    expect(missions).toHaveAttribute('href', '/missions');
    expect(profile).toHaveAttribute('href', '/profile');
  });
});