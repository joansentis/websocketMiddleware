let websocket = null;

const websocketMiddleware = (() => {
	const onOpen = (ws, store) => evt => {
		// store.dispatch('action');
	};

	const onClose = (ws, store) => evt => {
		// store.dispatch('action');
	};

	const onError = (ws, store) => evt => {
		// store.dispatch('action');
	};

	const onMessage = (ws, store) => evt => {
		// parse the event data to get he message
		var msg = JSON.parse(evt.data);
		// add a case for each message type
		switch (msg.type) {
			default:
				console.log(`Unknown message type: ${msg.type}`);
				break;
		}
	};

	return store => next => action => {
		switch (action.type) {
			case 'websocket connect':
				websocket = new WebSocket(action.payload); // action.payload = ws url
				websocket.onmessage = onMessage(websocket, store);
				websocket.onclose = onClose(websocket, store);
				websocket.onerror = onError(websocket, store);
				websocket.onopen = onOpen(websocket, store);
				break;
			case 'websocket disconnect':
				websocket ? websocket.close() : null;
				break;
			case 'websocket send':
				websocket.send(JSON.stringify(action.payload));
				break;
			default:
				return next(action);
		}
	};
})();

export default websocketMiddleware;
