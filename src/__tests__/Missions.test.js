import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Missions from '../components/Missions';

const mockStore = configureMockStore([]);

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Loading missions component', () => {
  it('renders correctly', () => {
    const initialState = {
      missions: {
        missions: [
          {
            id: 1,
            name: 'Mission',
            description: 'This is a lengthy description indicating the mission paramaters',
            reserved: false,
          },
        ],
      },
    };

    const store = mockStore(initialState);

    const { tree } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
