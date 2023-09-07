import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import RocketList from '../components/RocketList';

const mockStore = configureMockStore([]);

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Loading rockets component', () => {
  it('renders correctly', () => {
    const initialState = {
      rockets: {
        rockets: [
          {
            id: 1,
            name: 'Rocket 1',
            description: 'The edge of the universe, found by the nose of this spaceship',
            flickr_images: ['src.png'],
            reserved: false,
          },
        ],
      },
    };

    const store = mockStore(initialState);

    const { tree } = render(
      <Provider store={store}>
        <RocketList />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
