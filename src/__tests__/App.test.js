import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../App';
import store from '../redux/configureStore';

const server = setupServer(
  rest.get('https://pinballmap.com/api/v1/locations/top_cities_by_machine.json', (req, res, ctx) => res(ctx.json([
    {
      city: 'Portland',
      state: 'OR',
      machine_count: 5,
      id: null,
    },
  ]))),
  rest.get('https://pinballmap.com/api/v1/regions/location_and_machine_counts.json', (req, res, ctx) => res(ctx.json({
    num_locations: 8,
    num_lmxes: 33,
  }))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App integration tests', () => {
  it('renders correctly', () => {
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(app).toMatchSnapshot();
  });

  it('displays the correct title', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(getByText('most pinball machines')).toBeInTheDocument();
  });
});
