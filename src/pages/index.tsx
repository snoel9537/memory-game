import { Route, Switch } from 'react-router-dom';
import { GamePage } from 'pages/game';

export function Pages() {
  return (
    <Switch>
      <Route path="/" component={GamePage} />
    </Switch>
  );
}
