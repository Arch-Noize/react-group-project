import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Dragons from '../components/Dragons';

const mockStore = configureMockStore([]);

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Loading dragons component', () => {
  it('renders correctly', () => {
    const initialState = {
      dragons: {
        dragons: [
          {
            id: 1,
            name: 'Dragon 1',
            type: 'Type 1',
            flickr_images: ['image1.jpg'],
            reserved: false,
          },
        ],
      },
    };

    const store = mockStore(initialState);

    const { tree } = render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
