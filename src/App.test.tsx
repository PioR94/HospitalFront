import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

// Mock Redux store
const middlewares: any[] = [];
const mockStore = configureStore(middlewares);
const initialState = {
 
};
const store = mockStore(initialState);

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
});
