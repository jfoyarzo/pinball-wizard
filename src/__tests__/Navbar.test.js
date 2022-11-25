import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import MainNav from '../Components/Navbar';

describe('Navbar component tests', () => {
  it('renders correctly', () => {
    const navbar = render(
      <Router>
        <MainNav />
      </Router>,
    );
    expect(navbar).toMatchSnapshot();
  });

  it('displays the corresponding title in home', () => {
    const route = '/';
    const { getByText } = render(
      <MemoryRouter initialEntries={[route]}>
        <MainNav />
      </MemoryRouter>,
    );
    expect(getByText('most pinball machines')).toBeInTheDocument();
  });

  it('displays the corresponding title in details page', () => {
    const route = '/Portland';
    const { getByText } = render(
      <MemoryRouter initialEntries={[route]}>
        <MainNav />
      </MemoryRouter>,
    );
    expect(getByText('city view')).toBeInTheDocument();
  });
});
