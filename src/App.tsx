import { store } from './store';
import { Provider } from 'react-redux';

export function App() {
  return (
    <Provider store={store}>
      <>Fancy seeing you here.</>
    </Provider>
  );
}
