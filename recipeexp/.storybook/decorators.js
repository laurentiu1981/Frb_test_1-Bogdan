import { Provider } from 'react-redux';
import { store } from '../src/store';
import { BrowserRouter } from 'react-router-dom';

export const withProvider = (Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
);
export const withRouter = (Story) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
