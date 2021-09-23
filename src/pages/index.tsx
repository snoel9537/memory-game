import { Redirect, Route, Switch } from 'react-router-dom';
import { GamePage } from 'pages/game';

export function Pages() {
  return (
    <Switch>
      <Route path="/game" component={GamePage} />
      <Redirect to="/game" />
    </Switch>
  );
}
