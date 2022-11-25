import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Home from '../views/Home';

describe('Home view tests', () => {
  it('renders correctly', () => {
    const home = render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>,
    );
    expect(home).toMatchSnapshot();
  });

  it('displays the correct country', () => {
    const { getByText } = render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>,
    );
    expect(getByText('USA')).toBeInTheDocument();
  });
});
