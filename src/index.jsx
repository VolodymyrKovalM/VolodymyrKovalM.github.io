import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import App from '@/components/App.jsx';

const history = createHistory();

render(
  <AppContainer>
    <App history={history} />
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    const NewRoot = require('./components/App.jsx').default;
    render(
      <AppContainer>
        <NewRoot history={history} />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
