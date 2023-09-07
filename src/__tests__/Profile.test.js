import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Profile from '../components/Profile';

const mockStore = configureMockStore([]);

describe('Loading profile component', () => {
  it('renders correctly', () => {
    const store = mockStore({
      rockets: {
        rockets: [],
      },
      dragons: {
        dragons: [],
      },
      missions: {
        missions: [],
      },
    });

    const { tree } = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
