import { store } from './store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Pages } from './pages';

export const history = createBrowserHistory();

export function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Pages />
      </Router>
    </Provider>
  );
}
