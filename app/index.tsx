import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader'

import Root from './containers/Root'
import { configureStore, history } from './store/configureStore'
import './app.global.css'
import './antd.less'

const store = configureStore()

const AppContainer = process.env.PLAIN_HMR
  ? React.Fragment
  : ReactHotAppContainer

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root'),
)

if ((module as any).hot) {
  ;(module as any).hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./containers/Root').default
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root'),
    )
  })
}
