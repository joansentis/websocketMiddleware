# websocketMiddleware

This is an example of a websocket middleware.

## Add it to your ReactJS project:

In the store.js

```
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';
import websocketMiddleware from '../websocketMiddleware';

const store = createStore(
	reducer,
	compose(applyMiddleware(thunk, websocketMiddleware))
);

export default store;
```
